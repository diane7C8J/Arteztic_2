import '../assets/styles/utility-classes.css';
import './profile.css';
import { Link } from "react-router-dom";

import { ReactComponent as IconFor } from '../assets/icons/vote-for.svg';
import { ReactComponent as IconAgainst } from '../assets/icons/vote-against.svg';

export const Profile = (props: any) => {
  // console.log(props)
  return (
    <article className="pageContents">
      <header className="pageHeader">
        <h1>Your profile</h1>
      </header>
      <section className="pageSection-gray">
        <strong>{ props.activeAccount }</strong> 
        <div style={{display:'flex', justifyContent: 'space-between'}}>
          <strong>{ props.votes.count } VOTE WEIGHT:</strong> 
          <span style={{opacity: props.votes.tzprof?'1.0':'0.5'}}>{ props.votes.tzprof?<IconFor/>:<IconAgainst/>} Tezos Profiles</span>
          <span style={{opacity: props.votes.hDAO?'1.0':'0.5'}}>{ props.votes.hDAO?<IconFor/>:<IconAgainst/>} hDAO</span>
          <span style={{opacity: props.votes.badge?'1.0':'0.5'}}>{ props.votes.badge?<IconFor/>:<IconAgainst/>} Hicathon Badge</span>
        </div>
      </section>
      <section className="pageSection">
        <Link to='/my-votes'>My Votes</Link>
        {/* <br></br>
        <Link to='/contact'>Contact admin</Link> */}
      </section>
    </article>
  );
}
