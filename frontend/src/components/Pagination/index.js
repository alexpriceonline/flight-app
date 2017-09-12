import React from 'react';

import {
  green,
  darkgreen,
  white
} from '../../constants/styles';

const Pagination = props => {
  const {
    numPages,
    selectedPage,
    updatePagination,
  } = props;

  let pages = [];

  for (let i = 0; i < numPages; i++) {
    let cls = 'Pagination__link';
    cls = i === selectedPage ?
      cls + ' Pagination__link--selected' :
      cls;

    pages.push(
      <li
        className="Pagination__item"
        key={i}
      >
        <a
          className={cls}
          href={`#page-${i + 1}`}
          onClick={e => {
            e.preventDefault();
            updatePagination(i);
          }}
          title={`Go to page ${i + 1}`}
        >
          { i + 1 }
        </a>
      </li>
    );
  }

  return (
    <div>
      <p>Page:</p>

      <ul>
        { pages }
      </ul>

      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
        }

        p {
          padding: 5px 10px 0 0;
        }

        :global(.Pagination__item) {
          display: inline-block;
        }

        :global(.Pagination__link) {
          background: ${green()};
          border-radius: 3px;
          border: 1px solid ${darkgreen()};
          color: ${white()};
          cursor: pointer;
          display: inline-block;
          font-size: 13px;
          margin: 0 2px 2px 0;
          padding: 6px 8px;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        :global(.Pagination__link:hover),
        :global(.Pagination__link--selected) {
          background: ${darkgreen()};
        }
      `}</style>
    </div>
  );
};

export default Pagination;
