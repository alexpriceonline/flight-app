import React from 'react';
import { connect } from 'react-redux';

import Layout, { LayoutTitle } from '../components/Layout';
import { white } from '../constants/styles';

const AirportList = ({ airportData }) => (
  <Layout>
    <LayoutTitle>All airports</LayoutTitle>
    <p>Ordered by number of flights each airport appears in</p>
    <ul>
      { airportData.map((airport, i) => (
          <li key={i}>
            <span>{i + 1}</span>
            { airport[0] } ({ airport[1] })
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
        background: ${white()};
        flex: 0 0 120px;
        margin: 0 10px 10px 0;
        padding: 10px 10px 10px 20px;
        position: relative;
        text-align: center;
      }

      span {
        left: 5px;
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

export default connect(
  mapStateToProps
)(AirportList);
