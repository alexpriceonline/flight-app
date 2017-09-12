import React from 'react';

import arrow from '../images/aeroplane-arrow.svg';

const FlightListRow = ({ flight }) => (
  <li>
    <Flight flight={flight} org />
    <img
      alt="Aeroplane arrow"
      src={arrow}
    />
    <Flight flight={flight} />
    <style jsx>{`
      li {
        display: flex;
        margin: 0 0 10px;
      }

      img {
        height: auto;
        padding: 0 10px;
        width: 80px;
      }
    `}</style>
  </li>
);

const Flight = ({ flight, org }) => (
  <dl className={org ? 'mod-org' : 'mod-dest'}>
    <dt>{ org ? flight.org : flight.dest }</dt>
    <dd>{ org ? flight.orgName : flight.destName }</dd>
    <style jsx>{`
      dl {
        flex: 1 0 40%;
        padding: 10px;
      }

      .mod-org {
        text-align: right;
      }

      dt {
        font-size: 20px;
      }

      dd {
        font-size: 14px;
        opacity: 0.6;
      }
    `}</style>
  </dl>
);

export default FlightListRow;
