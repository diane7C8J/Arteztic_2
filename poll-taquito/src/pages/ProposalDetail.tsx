import '../assets/styles/utility-classes.css';
import './proposalDetail.css';
import { useParams } from "react-router-dom";
import * as React from "react";
import { Link } from "react-router-dom";

import DiscourseForum from "../components/DiscourseForum";

// import { ReactComponent as ProposalIcon } from '../assets/icons/other.svg';

import { Button } from '../components/Button';

import { ReactComponent as Logo } from '../assets/icons/hen-logo.svg';
import { ReactComponent as VoteForIcon } from '../assets/icons/vote-for.svg';
import { ReactComponent as VoteAgainstIcon } from '../assets/icons/vote-against.svg';
// import { ReactComponent as VoteDrawIcon } from '../assets/icons/vote-draw.svg';
// import { ReactComponent as ViewsIcon } from '../assets/icons/views.svg';
// import { ReactComponent as OtherIcon } from '../assets/icons/other.svg';

import { vote } from "../contract";
import { useToasts } from "react-toast-notifications";

async function getPollData(key: string) {
  return await fetch(`https://api.${process.env.REACT_APP_NETWORK}.tzkt.io/v1/bigmaps/${process.env.REACT_APP_BIGMAP_POLLS}/keys?key=${key}`)
    .then(response => response.json())
    .then(polls => {
      if (polls[0].key === key) {
        return polls[0];
      } else {
        throw new Error(`Poll with key ${key} not found`);
      }
    });
}
async function getVoteData(key: string) {
  return await fetch(`https://api.${process.env.REACT_APP_NETWORK}.tzkt.io/v1/bigmaps/${process.env.REACT_APP_BIGMAP_VOTES}/keys?key.string=${key}`)
    .then(response => response.json())
}

async function getIpfs(hash: string) {
  return await fetch(`https://ipfs.io/ipfs/${hash}`)
    .then(response => response.json())
}

async function getUpdate(poll: string) {
  return await fetch(`https://api.${process.env.REACT_APP_NETWORK}.tzkt.io/v1/bigmaps/${(process.env.REACT_APP_BIGMAP_UPDATES ??'12345')}/keys/${poll}/updates`)
    .then(response => response.json())
    .then(data => {
      console.log(['data',data])
      return true; 
    });
}

function sumVotes(votes: any) {
  // console.log(votes)
  return {
    1: votes.filter((v: any) => v.value === "1").length,
    2: votes.filter((v: any) => v.value === "2").length,
    3: votes.filter((v: any) => v.value === "3").length,
    4: votes.filter((v: any) => v.value === "4").length,
    5: votes.filter((v: any) => v.value === "5").length,
    6: votes.filter((v: any) => v.value === "6").length,
    7: votes.filter((v: any) => v.value === "7").length
  };
}

export const ProposalDetail = (props: any) => {
  console.log(props);
  const activeAccount = props.activeAccount && props.activeAccount.address
  const votePower = props.votePower

  const params = useParams<{poll: string}>();
  const { addToast } = useToasts();

  const [hasUpdate, setHasUpdate] = React.useState(false);
  const [updateIpfs, setUpdateIpfs] = React.useState({} as any);
  
  const [pollData, setPollData] = React.useState({
    hash: '',
    metadata: {
      startDate: '',
      endDate: '',
      numOptions: 0,
      category: '',
      title: ''
    },
    totals: {}
  });
  const [voteData, setVoteData] = React.useState({votes:[],myvote:0});
  const [voteSums, setVoteSums] = React.useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  });
  const [pollIpfs, setPollIpfs] = React.useState({
    discourse: '',
    description: '',
    opt1: 'Option 1',
    opt2: 'Option 2',
    opt3: 'Option 3',
    opt4: 'Option 4',
    opt5: 'Option 5',
    opt6: 'Option 6',
    opt7: 'Option 7',
    multi: false
  });
  React.useEffect(() => {
    getPollData(params.poll)
      .then(poll =>{
        // console.log(poll)
        setPollData({ 
          hash: poll.hash,
          metadata: {
            startDate: poll.value.metadata.start_date,
            endDate: poll.value.metadata.end_date,
            numOptions: Math.floor(poll.value.metadata.num_options),
            category: poll.value.metadata.category,
            title: poll.value.metadata.title
          },
          totals: poll.value.totals
        })
      })
      .catch(err => console.error(err));
    getVoteData(params.poll)
      .then(votes =>{
        // console.log(votes)
        var myvote = 0
        for (let i = 0; i < votes.length; i++) {
          if (votes[i].key.address === activeAccount) {
            myvote = votes[i].value * 1;
          }
        }
        setVoteData({
          votes: votes,
          myvote: myvote
        })
        setVoteSums(sumVotes(votes))
      })
      .catch(err => console.error(err));
    getIpfs(params.poll)
      .then(ipfs =>{
        // console.log(ipfs)
        setPollIpfs(ipfs)
      }
    )
    getUpdate(params.poll)
      .then(update =>{
        if (update !== false) {
          setHasUpdate(true)
          setUpdateIpfs(update)
        }
      }
    )
  }, [params.poll, activeAccount]);

  async function handleVote(option: number) {
    
    if (params.poll) {
      try {
        const hash = await vote(params.poll, option);
        if (hash) {
          addToast("Tx Submitted", {
            appearance: "success",
            autoDismiss: true,
          });
        }
      } catch (error) {
        console.error(error);
        const errorMessage = error?.message || error?.data[1]?.with?.string || "Tx Failed";
        addToast(errorMessage, {
          appearance: "error",
          autoDismiss: true,
        });
      }
    }
  }
  const discourseThreadUrl = pollIpfs.discourse
  let discourseThreadBits: any
  if (typeof discourseThreadUrl !== 'number')
    discourseThreadBits = discourseThreadUrl.split('/')
  const discourseThread = typeof discourseThreadUrl !== 'number' ? 
    (discourseThreadBits[discourseThreadBits.length - 1] === "1" ? discourseThreadBits[discourseThreadBits.length - 2] : discourseThreadBits[discourseThreadBits.length - 1])
    : ''
  return (
    <article className="proposalDetail pageContents">
      <header className="proposalDetail-header pageHeader">
        <div className="proposalDetail-meta">
          <div className="proposalDetail-metaPrimary text-s">
            <div className="proposalDetail-idAndType">
              { pollData.metadata.category === '1' && (
                <>Proposal{/* <ProposalIcon /> */}</>
              )}
              { pollData.metadata.category === '2' && (
                <>Question</>
              )}
            </div>
            {/* <div className="proposalDetail-subCategory">
              <OtherIcon /> DAO
            </div> */}
          </div>
          <div className="proposalDetail-countdown text-s">
            Ends { pollData ? pollData.metadata.endDate.substr(0,10) : '...' }
          </div>
        </div>
        <h1>
        { pollData.metadata.title }
        </h1>
        {/* <div className="proposalDetail-url">
        { discourseThreadUrl }
        </div> */}
        <hr />
        { console.log(['voteData',voteData]) }
        { console.log(votePower) }
        { pollIpfs.opt1 === "" ? (
          <footer className="proposalDetail-voteStatus">
            <div className="proposalDetail-graph">
              <div>
                <a href="#votes" className="text-s-bold">Votes Submitted:</a>&nbsp;
                { Object.values(voteSums).reduce((a, b) => a + b, 0) || 0 }
                <small className="text-s-light"> &nbsp; (30 votes required)</small>
              </div>
            </div>
            <a className="proposalDetail-discussionLink"
              href={ discourseThreadUrl }>
              Discuss on Discourse 
            </a>
            <div className="proposalDetail-yourVote">
              <Button
                voted={ voteData.myvote === 2 }
                onClick={()=>{handleVote(2)}}
                disabled={ !votePower.isAdmin }
              >AGAINST <VoteAgainstIcon/></Button>
              <Button
                voted={ voteData.myvote === 1 }
                onClick={()=>{handleVote(1)}}
                disabled={ !votePower.isAdmin }
              >FOR <VoteForIcon/></Button>
            </div>
            { votePower.tzprof || (
              <span>Sync your <a href='https://tzprofiles.com/' rel='noreferrer' target='_blank'>TzProfiles</a> verified wallet to enable voting</span>
             ) }
          </footer>
        ) : (
          <footer className="proposalDetail-voteStatus">
            <div className="proposalDetail-graph">
              <div>
                <a href="#votes" className="text-s-bold">Votes Submitted:</a>&nbsp;
                { Object.values(voteSums).reduce((a, b) => a + b, 0) || 0 }
                <small className="text-s-light"> (30 votes required)</small>
              </div>
            </div>
            <a className="proposalDetail-discussionLink"
              href={ discourseThreadUrl }>
              Discuss on Discourse
            </a>
            <div className="proposalDetail-yourVote">
              <Button
                voted={ voteData.myvote === 1 }
                onClick={()=>{handleVote(1)}} 
                disabled={ !votePower.isAdmin }
              >{ pollIpfs.opt1 }</Button>
              <Button
                voted={ voteData.myvote === 2 }
                onClick={()=>{handleVote(2)}} 
                disabled={ !votePower.isAdmin }
              >{ pollIpfs.opt2 }</Button>
              { pollData.metadata.numOptions > 2 ? (
                <Button
                  voted={ voteData.myvote === 3 }
                  onClick={()=>{handleVote(3)}} 
                  disabled={ !votePower.isAdmin }
                >{ pollIpfs.opt3 }</Button>
                ) : '' }
              { pollData.metadata.numOptions > 3 ? (
                <Button
                  voted={ voteData.myvote === 4 }
                  onClick={()=>{handleVote(4)}} 
                  disabled={ !votePower.isAdmin }
                >{ pollIpfs.opt4 }</Button>
              ) : '' }
              { pollData.metadata.numOptions > 4 ? (
                <Button
                  voted={ voteData.myvote === 5 }
                  onClick={()=>{handleVote(5)}} 
                  disabled={ !votePower.isAdmin }
                >{ pollIpfs.opt5 }</Button>
              ) : '' }
              { pollData.metadata.numOptions > 5 ? (
                <Button
                  voted={ voteData.myvote === 6 }
                  onClick={()=>{handleVote(6)}} 
                  disabled={ !votePower.isAdmin }
                >{ pollIpfs.opt6 }</Button>
              ) : '' }
              { pollData.metadata.numOptions > 6 ? (
                <Button
                  voted={ voteData.myvote === 7 }
                  onClick={()=>{handleVote(7)}} 
                  disabled={ !votePower.isAdmin }
                >{ pollIpfs.opt7 }</Button>
              ) : '' }
            </div>
            { votePower.isAdmin || (
              <span>Sync your <a href='https://tzprofiles.com/' rel='noreferrer' target='_blank'>TzProfiles</a> verified wallet to enable voting</span>
             ) }
          </footer>
        )}
      </header>
      { hasUpdate ? (
        <div className="pageSection proposalDetail-adoptionStatus">
          <Logo />
          <span className="text-l-light">STATUS</span>
          <span className="text-l-bold">PENDING</span>
          <a href="#adoptiondoc">{ JSON.stringify(updateIpfs) }</a>
        </div>
      ):'' }
      <section className="pageSection proposalDetail-columns">
        <section className="proposalDetail-details">
          {/* <p className="text-m-medium">{ pollData.metadata.title }</p> */}
          <p>{ pollIpfs.description }</p>
          { discourseThread && (
            <DiscourseForum thread={ discourseThread }/>
          )}
        </section>
        <section className="proposalDetail-sidebar">
          <p className="proposalDetail-sidebarHeader">
            <span className="proposalDetail-sidebarHeader-line"></span>
            <span className="proposalDetail-sidebarHeader-text text-s-medium">Specs</span>
          </p>
          <p className="text-s-light">
            Start date:<br/>
            { pollData.metadata.startDate }
          </p>
          <p className="text-s-light">
            End date:<br/>
            { pollData.metadata.endDate }
          </p>
          <p className="text-s-light">
            Hash:<br/>
            { params.poll }
          </p>
          <p className="text-s-light">
            Proposer:<br/>
            Hicathon
          </p>
          <p className="proposalDetail-sidebarHeader">
          <span className="proposalDetail-sidebarHeader-line"></span>
            <span className="proposalDetail-sidebarHeader-text text-s-medium">Help</span>
          </p>
          <p className="text-s-light">
            <Link to="/faq">How does the voting system work?</Link>
          </p>
          <p className="proposalDetail-sidebarHeader">
          <span className="proposalDetail-sidebarHeader-line"></span>
            <span className="proposalDetail-sidebarHeader-text text-s-medium" id="votes">Votes</span>
          </p>
          <p className="text-s-light">
            { voteData.votes.map((vote: any) => 
              <div className="voteRow" key={vote.id}>
                {/* { vote.key.address.substr(0,4)+"..."+vote.key.address.substr(vote.key.address.length - 4,vote.key.address.length) } voted { vote.value === "1" ? 'for' : 'against' } */}
                { vote.key.address }
              </div>
            )}
          </p>
        </section>
      </section>
    </article>
  );
}
