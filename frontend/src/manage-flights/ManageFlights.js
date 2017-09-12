import React from 'react';
import { connect } from 'react-redux';

import insertFlight from './actions/insert-flight';
import { white, green, black } from '../constants/styles';
import Layout, { LayoutTitle } from '../components/Layout';
import Button from '../components/Button';

const ManageFlights = ({ insertFlight, app, manageFlights }) => {

  const { availableOrgs } = app;
  const { loading, message } = manageFlights;

  return (
    <Layout>
      <LayoutTitle>Manage flights</LayoutTitle>
      <h2>Add a new flight</h2>

      <form
        onSubmit={e => {
          e.preventDefault();
          insertFlight(
            e.target.org.value,
            e.target.dest.value
          );
        }}
      >
        <label htmlFor="org">
          Origin airport:

          <select id="org">
            { availableOrgs.map(org => (
                <option key={org}>{ org }</option>
              ))
            }
          </select>
        </label>

        <p>- to -</p>

        <label htmlFor="org">
          Destination airport:

          <select id="dest">
            { availableOrgs.map(org => (
                <option key={org}>{ org }</option>
              ))
            }
          </select>
        </label>

        <Button>
          { loading ? 'Loading...' : 'Save' }
        </Button>

        { message &&
          <div>{ message }!</div>
        }
      </form>

      <style jsx>{`
        h2 {
          border-bottom: 2px solid ${black()};
          display: inline-block;
          margin: 0 0 10px;
          padding: 10px 20px 10px 0;
        }

        select {
          margin: 0 0 0 10px;
          position: relative;
          top: -1px;
        }

        label,
        p {
          display: block;
          margin: 0 0 10px;
        }

        div {
          display: inline-block;
          font-size: 14px;
          opacity: 0.8;
          padding: 6px 10px;
        }
      `}</style>
    </Layout>
  );
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    insertFlight: (org, dest) => {
      dispatch(insertFlight(org, dest));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageFlights);
