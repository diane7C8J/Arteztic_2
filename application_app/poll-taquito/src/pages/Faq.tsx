import '../assets/styles/utility-classes.css';
import './faq.css';

export const Faq = () => {
  return (
    <article className="pageContents--centered">
      <header className="pageHeader">
        <h1>Frequently Asked Questions</h1>
      </header>
      <section className="pageSection">
        <h2>Who can vote?</h2>
        <p>In this first version, any valid TzProfiles user will be able to sync and cast 
          a vote. Once a voting period has ended, a script will run to determine which 
          votes were valid at the moment they were cast, and how they will be weighted.</p>
        <p>See “What is the weighting rule?” for more information on how vote weights 
          will be calculated.</p>
      </section>
      <section className="pageSection">
        <h2>What is the voting rule?</h2>
        <p><b>Rule 1:</b> Each account can vote for one option per proposal.</p>
        <p><b>Rule 2:</b> Votes need to be within the voting period - time period as determined by Hicathon orga team (consider having to bring this to the attention of all participants of the hicathon and in the ecosystem generally in deciding on the start, length and end of the voting period).</p>
      </section>
      <section className="pageSection">
        <h2>What is the weighting rule?</h2>
        <p>For each of the following 3 criteria, your vote will receive more weight.</p>
        <ul>
          <li>Your profile is verified with TzProfiles? You get one weight</li>
          <li>You own a hicathon badge? You get one more weight</li>
          <li>You own hDAO? You get one more weight</li>
        </ul>
        <p>
          The weight of each voter can be amplified by 3, at maximum.<br></br>
          Voters won’t be able to vote unless their profile is verified with <a href="https://tzprofiles.com/" target="_blank" rel="noreferrer">TzProfiles</a>.
        </p>
      </section>
      <section className="pageSection">
        <h2>How are people voting?</h2>
        <p>People may vote for any available option on any open proposal until the end of its voting period, and change their vote as many times as they like during the voting period (before it ends). Voting in version 1, will not include a token, or a representation of a token but a vote will simply be added to the tally of the voting results.</p>
        <p>This function should only work during a voting period.</p>
        <p>Gas fees for voting will be paid by voters. Current cost for an initial vote is ~0.017 tez (about 5 cents USD at the time of writing), the cost to change your vote is 0.0007 tez.</p>
        <p>Any voting cost is intrinsic to the blockchain, we charge no fee for voting. We aim to reduce gas prices even further in our next contract.</p>
      </section>
      <section className="pageSection">
        <h2>How is Quorum achieved?</h2>
        <p>After the voting period has ended, votes will be compiled with their according weight.</p>
        <p>For a vote to pass quorum, by the end of the voting period 30 or more accounts must vote on it.</p>
        <p>If a proposal does not meet quorum it does not pass and the proposal will need to be adjusted/resubmitted for another round of voting at a later time.</p>
      </section>
      <section className="pageSection">
        <h2>Who can enter the options?</h2>
        <p>The hicathon orga team has been compiling the info from the WGs and entered the data directly in the voting tool. Only a very short title describing the proposal and questions are on-chain, the rest is hosted in the IPFS to avoid website slowdown.</p>
        <p>Hicathon orga team provides here the link to the document they took the information from to fill in the voting system.</p>
      </section>
      <section className="pageSection">
        <h2>Can I delegate my vote?</h2>
        <p>Not yet. This option will be unlocked in an upcoming version of our voting DAO.</p>
      </section>
      <section className="pageSection">
        <h2>Where are the discussion and debates being held?</h2>
        <p>We are using the tool discourse to give space for discussion and debate. You will be able to join the conversation there, or just read it, to make up your mind before voting. This tool is off-chain.</p>
        <p>On this discussion tool, you will be able to comment on a proposal, like a comment or a reply, share links and ideas.
</p>
      </section>
    </article>
  );
}
