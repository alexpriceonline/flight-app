import React from 'react';

const LayoutTitle = ({ children, center }) => (
  <h1 className={center ? 'mod-center' : ''}>
    { children }

    <style jsx>{`
      h1 {
        font-size: 22px;
        margin: 0 0 15px;
        text-transform: capitalize;
      }

      .mod-center {
        text-align: center;
      }
    `}</style>
  </h1>
);


export default LayoutTitle;
