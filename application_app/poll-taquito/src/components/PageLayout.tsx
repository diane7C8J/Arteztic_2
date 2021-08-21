import React from 'react';
import '../assets/styles/design-tokens.css';
import './pageLayout.css';

import { Header } from './Header';
import { Footer } from './Footer';

export const PageLayout = ({...props}) => {
  const votes = {
    t: true,
    h: true,
    b: false,
    count: 2
  }
  const wallet = {
    connect: () => {},
    disconnect: () => {},
    connected: true,
    activeAccount: 'tz1234567890123'
  }
  return (
    <div className="pageLayout">
      <div
        className="pageLayout-contents"
      >
        <Header 
          votes={votes.count}
          connected={wallet.connected}
          disconnect={wallet.disconnect}
          connect={wallet.connect}
          activeAccount={wallet.activeAccount}
        />
        <div className="pageLayout-body">
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  );
};
