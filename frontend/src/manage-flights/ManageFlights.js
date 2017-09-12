import React from 'react';
import { connect } from 'react-redux';

import Layout, { LayoutTitle } from '../components/Layout';

const ManageFlights = ({ flightData }) => (
  <Layout>
    <LayoutTitle>Manage flights</LayoutTitle>
    <p>Allows addition of new flights (origin and destination pair)</p>
  </Layout>
);

function mapStateToProps(state) {
  return state.app;
}

export default connect(
  mapStateToProps
)(ManageFlights);
