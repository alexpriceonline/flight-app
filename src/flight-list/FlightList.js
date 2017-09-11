import React from 'react';
import { connect } from 'react-redux';

import Layout, { LayoutTitle } from '../components/Layout';
import FlightListRow from './FlightListRow';

const FlightList = ({ flightData }) => (
  <Layout>
    <LayoutTitle center>
      Available flights
    </LayoutTitle>
    <ul>
      { flightData.map((data, i) => (
          <FlightListRow key={i} data={data} />
        ))
      }
    </ul>
  </Layout>
);

function mapStateToProps(state) {
  return state.app;
}

export default connect(
  mapStateToProps
)(FlightList);
