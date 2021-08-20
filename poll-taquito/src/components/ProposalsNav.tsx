import React from 'react';
import { NavLink } from "react-router-dom";
import '../assets/styles/design-tokens.css';
import './proposalsNav.css';

export const ProposalsNav = ({...props}) => {
  const [proposalCount] = React.useState(0);
  const [questionCount] = React.useState(0);
  const [pastVoteCount] = React.useState(0);
  return (
    <nav
      className={`proposalsNav ${props.className??''}`}
    > 
      <div className="proposalsNav-primary">
        <NavLink to="/proposals" className={`text-l-bold proposalsNav-item`}>
          Proposals
          { proposalCount ? (
            <span className="proposalsNav-item-count text-xs">{proposalCount}</span>
            ) : null } 
        </NavLink>
        <NavLink to="/questions" href="#hereandnow" className={`text-l-bold proposalsNav-item`}>
          Questions
          { questionCount ? (
            <span className="proposalsNav-item-count text-xs">{questionCount}</span>
            ) : null }
        </NavLink>
      </div>
      <div className="proposalsNav-secondary">
        <NavLink to="/past-votes" href="#hereandnow" className={`text-l-light proposalsNav-item`}>
          Past Votes
          { pastVoteCount ? (
            <span className="proposalsNav-item-count text-xs">{pastVoteCount}</span>
            ) : null }
        </NavLink>
      </div>
    </nav>
  );
};
