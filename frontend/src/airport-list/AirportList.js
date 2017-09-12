import React from 'react';
import { connect } from 'react-redux';

import Layout, { LayoutTitle } from '../components/Layout';

const AirportList = ({ flightData }) => (
  <Layout>
    <LayoutTitle>All airports</LayoutTitle>
    <p>Shows a list of all airports, ordered by the number of appearances in both origin and destination.</p>
  </Layout>
);

function mapStateToProps(state) {
  return state.app;
}

export default connect(
  mapStateToProps
)(AirportList);
