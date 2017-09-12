import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { UPDATE_FILTER } from '../flight-list/constants';
import Layout, { LayoutTitle } from '../components/Layout';
import { green, white } from '../constants/styles';

const AirportList = ({ airportData, updateFilter, updatePath }) => (
  <Layout>
    <LayoutTitle>All airports</LayoutTitle>
    <p>Ordered by number of flights each airport appears in</p>
    <ul>
      { airportData.map((airport, i) => (
          <li key={i}>
            <a
              href={`#${airport[0]}-flights`}
              onClick={e => {
                e.preventDefault();
                updateFilter(airport[0]);
                updatePath();
              }}
              title={`View flights from ${airport[0]}`}
            >
              <span>{i + 1}</span>
              { airport[0] } ({ airport[1] })
            </a>
          </li>
        ))
      }
    </ul>

    <style jsx>{`
      p {
        margin: 0 0 20px;
      }

      ul {
        align-content: flex-start;
        display: flex;
        flex-wrap: wrap;
      }

      li {
        flex: 0 0 120px;
      }

      a {
        background: ${white()};
        color: inherit;
        display: block;
        margin: 0 10px 10px 0;
        padding: 10px 6px 10px 24px;
        position: relative;
        text-align: center;
        text-decoration: none;
        transition: all 0.2s ease;
      }

      a:hover {
        background: ${green()};
        color: ${white()};
      }

      span {
        left: 8px;
        position: absolute;
        font-size: 12px;
        opacity: 0.4;
        top: 50%;
        transform: translateY(-50%);
      }
    `}</style>
  </Layout>
);

function mapStateToProps(state) {
  return state.app;
}

function mapDispatchToProps(dispatch) {
  return {
    updateFilter: value => {
      dispatch({ type: UPDATE_FILTER, filter: value });
    },
    updatePath: () => {
      dispatch(push('/'));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AirportList);
