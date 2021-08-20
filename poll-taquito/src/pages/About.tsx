import { Link } from "react-router-dom";

import '../assets/styles/utility-classes.css';
import './about.css';

export const About = () => {
  return (
    <article className="pageContents--centered">
      <header className="pageHeader pageHeader--centered">
        <h1>ABOUT</h1>
      </header>
      <section className="pageSection">
        <p><Link to="/">H=N VOTE</Link> is an experimental collaboration between TZ Connect, 
          hicathon org team, Hicathon Working Group 5.4 &amp; the H=N VOTE dev team.</p>
        <p>This voting DAO is an experiment born from the hicathon, which was the first hackathon 
          organised by and with the community of the Tezos-based marketplace hic et nunc. 
          You can find more info about the <a href="https://www.hicathon.xyz/" target="_blank" rel="noreferrer">hicathon here</a>.
        </p>
      </section>
      <section className="pageSection">
        <h2>Why ask the community to vote?</h2>
        <p>Since its inception, hic et nunc received great support from the community so 
          we (the hicathon team) believe that listening to the needs and wishes of the community is key.</p> 
        <p>Good to remember that the hicathon itself was born from the requests of creators 
          and artists active on hic et nunc. The dates of the hicathon were decided through a 
          poll on Twitter and a call for volunteers. The team that was formed managed to set 
          up the hackathon in 1 week and organized a fabulous weekend where 150 participants 
          joined us. The topics of the hackathon working groups were all suggested by the community 
          members and then selected by a vote open to all community members.</p>
        <p>It is to respect and continue this community and collaborative culture that we have 
          produced this voting DAO today. One more time, produced by volunteers, all creators 
          on hic et nunc.</p>
      </section>
      <section className="pageSection">
        <h2>Why a voting DAO?</h2>
        <p>Voting is the first step towards the hic et nunc governance DAO. This voting DAO is 
          an experiment aiming to find a voting system for hic et nunc. For now, we will use 
          it solely in the context of the hicathon in order to test it.</p>
        <p>This tool has been developed by Tz Connect (daughter company of the Tezos Foundation) 
          thanks to John Newby (smart contract), and with the help of a fabulous team of 
          volunteers including UFFFD and depatchmode (front-end dev), 
          denscimonk and debasti (UX/UI design), with the support of MZapz and Mitch&Murray 
          from the Hicathon WG. 5.4 “How to make decisions in a decentralized world” 
          (voting framework and feature requirements list) and Diane Drubay (as a project manager).</p>
        <p>Our success will be measured by the community involvement in the voting process, 
          plus the ease to vote.</p>
      </section>
      <section className="pageSection">
        <h2>Key dates</h2>
        <dl>
          <dt>11-16 August 2021: “Calling for Feedback!” Community Vote</dt> 
          <dd>The working groups of the hicathon are asking for feedback and reactions.</dd>
          <dt>08-11 August 2021: Let’s select the WGs of the post-hicathon</dt>
          <dd>As representatives of the hic et nunc community, let us know which working groups 
            should be part of the post-hicathon.</dd>
          <dt>08-11 August 2021: Let’s vote the post-hicathon budget</dt>
          <dd>The orga team of the hicathon is asking your feedback to decide how the budget 
            will be distributed among the team.</dd>
          <dt>12 August - 12 September: Post-hicathon</dt>
          <dd>The working groups are working towards their final milestone. </dd>
          <dt>12 September: Final Post-Hicathon Livestream</dt>
          <dd>All the hicathon community meets online to hear about the achievements of the 
            working groups.</dd>
        </dl>
        <p>See the timeline of the post-hicathon <a href="https://miro.com/app/board/o9J_lELpu8c=/?moveToWidget=3074457361752103305&cot=10"
            target="_blank" 
            rel="noreferrer">here</a>.</p>
      </section>
    </article>
  );
};
