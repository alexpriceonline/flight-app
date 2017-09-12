import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UPDATE_FILTER, UPDATE_PAGE } from './constants';
import Layout, { LayoutTitle } from '../components/Layout';
import Pagination from '../components/Pagination';
import FlightListRow from './FlightListRow';

const PAGEBY = 30;

class FlightList extends Component {

  // When we navigate to another page we should reset
  // the filter
  componentWillUnmount() {
    this.props.updateFilter('null');
  }

  render() {
    const {
      availableOrgs,
      flightData,
      selectedFilter,
      selectedPage,
      updateFilter,
      updatePagination,
    } = this.props;

    // Filter the flight data based on origin iata code
    const filteredFlightData = selectedFilter !== 'null' ?
      flightData.filter(f => f.org === selectedFilter) :
      flightData;

    // Slice the data into pages
    const paginatedData = filteredFlightData.slice(
      (selectedPage * PAGEBY), ((selectedPage + 1) * PAGEBY)
    );

    const numFlights = filteredFlightData.length;

    return (
      <Layout>
        <LayoutTitle center>
          Available flights ({ numFlights })
        </LayoutTitle>

        <label htmlFor="filter">
          <span>Filter by origin airport:</span>
          <select
            id="filter"
            onChange={e => updateFilter(e.target.value)}
            value={selectedFilter}
          >
            <option value="null">
              Show all
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
          { paginatedData.map((flight, i) => (
              <FlightListRow key={i} flight={flight} />
            ))
          }
        </ul>

        {/* Hide pagination if not needed */}
        { numFlights > PAGEBY &&
          <Pagination
            numPages={numFlights / PAGEBY}
            selectedPage={selectedPage}
            updatePagination={updatePagination}
          />
        }

        <style jsx>{`
          label {
            display: block;
            margin: 5px 0 10px;
            text-align: center;
          }

          select {
            margin: 0 0 0 10px;
            position: relative;
            top: -1px;
          }
        `}</style>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.app, ...state.flightList };
}

function mapDispatchToProps(dispatch) {
  return {
    updateFilter: value => {

      // Make sure we page back to 0 when we filter
      dispatch({ type: UPDATE_PAGE, page: 0 });
      dispatch({ type: UPDATE_FILTER, filter: value });
    },
    updatePagination: page => {
      dispatch({ type: UPDATE_PAGE, page });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightList);
