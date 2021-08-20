import React from 'react';
import '../assets/styles/utility-classes.css';
import './polls.css';

import { ProposalCard } from '../components/ProposalCard';
// import { Select } from '../components/Select';
// import { AnyCnameRecord } from 'dns';
// import { Pagination } from '../components/Pagination';


async function fetchPolls(cat: number = 0, datecomp: string = '') {
  let fetchUrl = `https://api.${process.env.REACT_APP_NETWORK}.tzkt.io/v1/bigmaps/${process.env.REACT_APP_BIGMAP_POLLS}/keys`
  let params: any = {}

  if (cat !== 0) 
    params['value.metadata.category'] = cat
  if (datecomp === 'gt' || datecomp === 'lt')
    params[`value.metadata.end_date.${datecomp}`] = new Date().toISOString().slice(0, 10)
  
  // params['value.metadata.start_date.gt'] = '2021-08-08' // hide past polls

  fetchUrl += '?' + Object.keys(params).map(k => `${k}=${params[k]}`).join('&')

  return await fetch(fetchUrl)
    .then(response => response.json())
    .then(polls => {
      // return polls
      console.log(polls)
      // return polls.filter((poll: any) => poll.value.metadata.title.indexOf('Test') === -1)
      return polls.filter((poll: any) => !['QmPg6xvJM5RcDmsmNSX5WRo5A2TmbqdDPGTQeU6KuesNS5'].includes(poll.key))
    });
}

// async function fetchVotes() {
//   return await fetch(`https://api.${process.env.REACT_APP_NETWORK}.tzkt.io/v1/bigmaps/${process.env.REACT_APP_BIGMAP_VOTES}/keys`)
//     .then(response => response.json())
//     .then(votes => votes);
// }

class Polls extends React.Component<{ view: string, myVotes: any[] }, { polls: any[] }> {  
  viewTitles: any = {
    'proposals': 'Proposals',
    'questions': 'Questions',
    'my': 'My Votes',
    'past': 'Past Votes'
  };

  loadPolls(view: string) {
    let viewcat, datecomp;
    if (view === 'proposals') {
      viewcat = 1;
      datecomp = 'gt';
    } else if (view === 'questions') {
      viewcat = 2;
      datecomp = 'gt';
    } else if (view === 'my') {
      viewcat = 0;
      datecomp = '';
    } else if (view === 'past') {
      viewcat = 0;
      datecomp = 'lt';
    }
    fetchPolls(viewcat, datecomp).then(result => {
      // console.log(result)
      this.setState({
        polls: result
        // polls: filterPolls(result, 'all', activeAddress)
      })
    })
  }

  
  constructor(props: any) {
    super(props);
    this.state = {
      polls: []
    }
    this.loadPolls(this.props.view);
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.view !== this.props.view) {
      this.loadPolls(nextProps.view);
    }
  }

  render() {

    return (
      <article className="polls">
        <header className="pageHeader">
          <h1>{ this.viewTitles[this.props.view] ?? 'All Votes' }</h1>
        </header>
        <nav className="pageSection polls-filters">
          {/* <Select/>
          <Select/> */}
        </nav>
        <section className="pageSection polls-cards">
          { this.props.view === 'my' ? 'Vote history coming soon' : 
            this.state.polls.map((poll: any) => {
              let voted = 0;
              this.props.myVotes.forEach(vote => {
                if (vote.key.string === poll.key)
                  voted = vote.value;
              });
              return <ProposalCard key={poll.key } poll={poll} voted={voted}/>
            }) 
          }
        </section>
        <footer className="pageSection polls-pagination">
          {/* <Pagination /> */}
        </footer>
      </article>
    );
  }
}

export {Polls};