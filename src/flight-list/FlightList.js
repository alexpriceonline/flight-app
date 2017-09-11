import React from 'react';
import { connect } from 'react-redux';

import { UPDATE_FILTER } from './constants';
import Layout, { LayoutTitle } from '../components/Layout';
import FlightListRow from './FlightListRow';

const FlightList = props => {
  const {
    flightData,
    availableOrgs,
    selectedFilter,
    updateFilter,
  } = props;

  // Filter the flight data based on origin iata code
  const _flightData = selectedFilter !== "null" ?
    flightData.filter(f => f.org.iata === selectedFilter) :
    flightData;

  return (
    <Layout>
      <LayoutTitle center>
        Available flights
      </LayoutTitle>

      <label htmlFor="filter">
        <span>Filter by origin airport:</span>
        <select
          id="filter"
          onChange={e => updateFilter(e.target.value)}
          value={selectedFilter}
        >
          <option value="null">
            None
          </option>
          { availableOrgs.map(org => (
              <option key={org} value={org}>
                {org}
              </option>
            ))
          }
        </select>
      </label>

      <ul>
        { _flightData.map((data, i) => (
            <FlightListRow key={i} data={data} />
          ))
        }
      </ul>

      <style jsx>{`
        label {
          display: block;
          margin: 5px 0 10px;
          text-align: center;
        }

        select {
          margin: 0 0 0 10px;
          position: relative;
          top: -2px;
        }
      `}</style>
    </Layout>
  );
};

function mapStateToProps(state) {
  return { ...state.app, ...state.flightList };
}

function mapDispatchToProps(dispatch) {
  return {
    updateFilter: value => {
      dispatch({ type: UPDATE_FILTER, filter: value });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightList);
