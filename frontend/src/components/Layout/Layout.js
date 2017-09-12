import React from 'react';

import Header from '../Header';
import Wrapper from '../Wrapper';

const Layout = ({ children }) => (
  <div>
    <Header />
    <Wrapper>
      <main className="fade-in">
        { children }
      </main>
    </Wrapper>

    <style jsx>{`
      main {
        margin-top: 80px;
        padding: 0 0 30px;
      }
    `}</style>
  </div>
);

export default Layout;
