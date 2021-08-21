// import React, {useState} from 'react';
import { Link } from "react-router-dom";
import '../assets/styles/design-tokens.css';
import './proposalCard.css';

import { Button } from './Button';

// import { ReactComponent as ProposalIcon } from '../assets/icons/other.svg';
// import { ReactComponent as VoteForIcon } from '../assets/icons/vote-for.svg';
// import { ReactComponent as VoteAgainstIcon } from '../assets/icons/vote-against.svg';
// import { ReactComponent as VoteDrawIcon } from '../assets/icons/vote-draw.svg';

export const ProposalCard = ({...props}) => {
  const { poll, voted } = props;
  const ended = new Date(poll.value.metadata.end_date) < new Date();
  // console.log(ended);
  return (
    <div
      className="proposalCard"
    >
      <div className="proposalCard-meta">
        <div className="proposalCard-identifiers">
          <div className="proposalCard-id">#{ poll.key.substr(0,8) }...</div>
          <div className="proposalCard-type">
            { poll.value.metadata.category === '3' && (
              <>Proposal 
                {/* <ProposalIcon /> */}
              </>
            )}
            { poll.value.metadata.category === '2' && (
              <>Question 
                {/* <ProposalIcon /> */}
              </>
            )}
          </div>
        </div>
        { voted !== 0 && (
          <div className="proposalCard-yourVote">
            Voted <b className="text-s-bold">{ (poll.value.metadata.category === '1' || poll.value.metadata.category === '3') ? 'Option ' + voted : (voted === "1" ? 'For' : 'Against') }</b>
          </div>
        )}
        <div className={`proposalCard-voteStatus ${ ended ? 'proposalCard-voteStatus--ended' : ''}`}>
          { ended?'Ended':'Ends'} { (new Date(poll.value.metadata.end_date)).toDateString() }
        </div>
      </div>
      <div className="proposalCard-name">
      { poll.value.metadata.title }
      </div>
      <footer className="proposalCard-footer">
        <div className="proposalCard-voteResult">
          { ended ? (
            <>
              {/* Results <VoteForIcon /> */}
            </>
          ) : '' }          
        </div>
        { poll.key ? (
          <Link to={"/vote/"+poll.key}><Button>Details</Button></Link>
        ) : null }
      </footer>
    </div>
  );
};
