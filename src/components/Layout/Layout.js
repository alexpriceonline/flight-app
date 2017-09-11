import React from 'react';
import { connect } from 'react-redux';

import Header from '../Header';
import Wrapper from '../Wrapper';

const Layout = ({ app, children }) => (
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

function mapStateToProps(state) {
  return { ...state };
}

export default connect(
  mapStateToProps
)(Layout);
