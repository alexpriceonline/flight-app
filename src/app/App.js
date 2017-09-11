import React from 'react';
import { Route } from 'react-router-dom';

import { black, grey } from '../constants/styles.js';
import './reset.css';
import './fonts.css';

// App routes
import Dashboard from '../dashboard/Dashboard';

// import Pages, { EditPage } from '../pages';
// <Route exact path="/pages" component={Pages} />

const App = () => (
  <div>
    <Route exact path="/" component={Dashboard} />

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
