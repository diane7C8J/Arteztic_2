import '../assets/styles/utility-classes.css';
import './home.css';

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <article className="pageContents--centered homePage">
      <header className="pageHeader pageHeader--centered">
        <h1>H=N VOTE</h1>
        <h3 className="text-xl">The voice of the hic et nunc community amplified.</h3>
      </header>
      <section className="pageSection">
        <h2>What can I do here?</h2>
        <p>You are the voice of the community.</p>
        <p>Here you can give your opinion and make it heard so that the hicathon’s working 
          groups can build what you want.</p>
      </section>
      <section className="pageSection">
        <h2>Why this tool?</h2>
        <p>Because we believe that, together, we can create tools and applications 
          respecting the community’s needs and wishes.</p>
      </section>
      <section className="pageSection">
        <h2>The hicathon is basically an innovation accelerator.</h2>
        <p>
        On May 22/23, 150 participants joined the first hackathon organized for hic 
        et nunc. Some very nice ideas and prototypes were developed and some of them 
        became projects in their own right (which were launched a few weeks after 
        the event) but the majority of the projects still need a final decision to 
        stand on their own. Some projects will be implemented within hic et nunc, while 
        others will become standalone applications or much more ambitious projects.
        </p>
      </section>
      <section className="pageSection">
        <h2>In the end, we are all building the future of the hic et nunc ecosystem together.</h2>
        <p>
        The hicathon working groups need your input on key questions that determine the 
        direction they should take in the coming weeks. Help them by voting to steer the 
        working groups into making the right decisions and building tools or applications 
        that you like and that will serve you.
        </p>
      </section>
      <section className="pageSection">
        <h2>How does it work?</h2>
        <ol>
          <li>For this V1, proposals and questions are submitted by the hicathon’s working groups and entered by the hicathon orga team in the voting DAO and the forum.</li>
          <li>Check the list of what is to be voted in the menu ‘Proposals’ and ‘Questions’. </li>
          <li>Click on one proposal or question, see the different voting options, how many votes have been done, discuss them via the Forum</li>
          <li>For the proposals, vote by selecting one option and then click on XX. For the questions, vote by clicking on “Against” or “For”. </li>
          <li>Results are tabulated at the end of the voting period, to determine whether it met quorum and was successful.</li>
          <li>Hic et nunc will be able to decide if projects will be adopted for the website or not.</li>
          {/* <li><b>Proposals are submitted</b> either by working groups, or by *you* through the Discourse.</li>
          <li><b>Votes are cast</b> once the proposal is live for voting.</li>
          <li><b>Results are tabulated</b> at the end of the voting period, to determine whether it met quorum and was successful.</li>
          <li><b>H=N decides how/when to adopt</b> any successful proposals.</li> */}
        </ol>
        <p>
        <p>Visit our <Link to="/faq">FAQ</Link> learn more about how to submit proposals, earn voting rights, 
        what the criteria are for a successful proposal, and what the adoption policies are.</p>
        <em>Good to remember:</em> the feedback of the community is a suggestion to the working 
        groups, but not an order. If circumstances change and make the proposal not relevant 
        anymore, the team can react accordingly. 
        </p>
      </section>
    </article>
  );
}
