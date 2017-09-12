import React from 'react';

import {
  green,
  darkgreen,
  white
} from '../../constants/styles';

const Button = ({ children }) => (
  <button>
    { children }

    <style jsx>{`
      button {
        background: ${green()};
        border: 1px solid ${darkgreen()};
        border-radius: 3px;
        color: ${white()};
        display: inline-block;
        font-size: 13px;
        padding: 6px 10px;
        cursor: pointer;
        font-weight: 400;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        transition: background 0.3s ease;
      }

      button:hover {
        background: ${darkgreen()};
      }
    `}</style>
  </button>
);

export default Button;
