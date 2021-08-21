import React, {useState} from 'react';
import { Link } from "react-router-dom";
import '../assets/styles/design-tokens.css';
import './syncMenu.css';
import { ProposalsNav } from './ProposalsNav';
import { ReactComponent as Logo } from '../assets/icons/hen-vote-logo.svg';
import { ReactComponent as MenuOpen } from '../assets/icons/menu-open.svg';
import { ReactComponent as MenuClose } from '../assets/icons/menu-close.svg';
// import { truncateSync } from 'fs';

interface SyncProps {
  admin: boolean,
  connect: any;
  disconnect: any;
  connected: boolean;
  activeAccount: string;
  addr: string;
}
export const SyncMenu = ({
  admin = false,
  connect = () => {},
  disconnect = () => {},
  connected = false,
  activeAccount = "",
  addr="",
  ...props
}: SyncProps) => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="syncMenu"
      {...props}
    >
      { open ? <MenuClose className="syncMenu-close" onClick={(event: any) => { setOpen(false); }} /> : <MenuOpen className="syncMenu-open" onClick={(event: any) => { setOpen(true) }} />  
      }
      { open && 
        <div className="syncMenu-contents">
          <section className="syncMenu-mobileOnly">
              <Link to="/"><Logo className="syncMenu-logo"/></Link><br/>
              <MenuClose className="syncMenu-close" onClick={(event: any) => { setOpen(false); }} />
              <ProposalsNav />
          </section>
          <section className="syncMenu-mainOptions">
            { activeAccount && 
              <section className="syncMenu-section">
                <Link to="/my-votes" className="syncMenu-item" onClick={(event: any) => { setOpen(false); }}>My Votes</Link>
                <Link to="/profile" className="syncMenu-item" onClick={(event: any) => { setOpen(false); }}>Profile</Link>
              </section>
            }
            { admin && 
            <section className="syncMenu-section">
              <Link to="/admin" className="syncMenu-item" onClick={(event: any) => { setOpen(false); }}>Create</Link>
              <Link to="/profile" className="syncMenu-item" onClick={(event: any) => { setOpen(false); }}>Settings</Link>
            </section> }
            <section className="syncMenu-section mobileOnly">
              <Link to="/about" className="syncMenu-item" onClick={(event: any) => { setOpen(false); }}>About</Link>
              <Link to="/faq" className="syncMenu-item" onClick={(event: any) => { setOpen(false); }}>FAQ</Link>
              <a target="_blank" rel="noreferrer" href="https://community.hicetnunc.xyz" className="syncMenu-item">Forum ↪</a>
            </section>
            <section className="syncMenu-section">
              <div className="syncMenu-item">
                { activeAccount && <div>{addr}</div> }
                <div>{ activeAccount ? (
                  <button onClick={disconnect}>Unsync</button>
                 ) : (
                   <button onClick={connect}>Sync</button>
                 )}</div>
              </div>
            </section>
          </section>
        </div>
      }
    </nav>
  );
};
