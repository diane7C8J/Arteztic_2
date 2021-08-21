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
        <NavLink to="/admin" className={`text-l-bold proposalsNav-item`}>
          Application
        </NavLink>
      </div>
    </nav>
  );
};
