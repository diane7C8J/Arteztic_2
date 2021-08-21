import henLogo from '../assets/icons/hen-vote-logo.svg';
import menuClose from '../assets/icons/menu-close.svg';
import menuOpen from '../assets/icons/menu-open.svg';
import options from '../assets/icons/options.svg';
import other from '../assets/icons/other.svg';
import hdao from '../assets/icons/hdao.svg';
import selectChevron from '../assets/icons/select-chevron.svg';
import voteAgainst from '../assets/icons/vote-against.svg';
import voteFor from '../assets/icons/vote-for.svg';
import voteDraw from '../assets/icons/vote-draw.svg';
import views from '../assets/icons/views.svg';

export default {
  title: 'Icons',
};

export const icons = () => <div>
    <h1>Logo</h1>
    <img alt="HEN Vote" src={henLogo} />
    <h1>Voting</h1>
    <img alt="voted for" src={voteFor} />
    <img alt="voted against" src={voteAgainst} />
    <img alt="vote was a draw" src={voteDraw} />
    <h1>Proposal Categories</h1>
    <img alt="hdao proposal" src={hdao} />
    <img alt="other proposal" src={other} />
    <h1>Navigation</h1>
    <img alt="close menu" src={menuClose} />
    <img alt="open menu" src={menuOpen} />
    <h1>Others</h1>
    <img alt="views" src={views} />
    <img alt="multiple options" src={options} />
    <img alt="select chevron" src={selectChevron} />
  </div>;
