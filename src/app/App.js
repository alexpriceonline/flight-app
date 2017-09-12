import React from 'react';
import { Route } from 'react-router-dom';

import { black, grey } from '../constants/styles.js';
import './reset.css';
import './fonts.css';

// App routes
import FlightList from '../flight-list/FlightList';
import AirportList from '../airport-list/AirportList';
import ManageFlights from '../manage-flights/ManageFlights';

const App = () => (
  <div>
    <Route exact path="/" component={FlightList} />
    <Route exact path="/airports" component={AirportList} />
    <Route exact path="/manage" component={ManageFlights} />

    <style jsx global>{`
      html {
        box-sizing: border-box;
        font-family: sans-serif;
      }

      body {
        background: ${grey()};
        color: ${black()};
        font-family: 'Ubuntu', sans-serif;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }

      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .fade-in {
        animation: fade-in 1s ease;
      }
    `}</style>
  </div>
);

export default App;
