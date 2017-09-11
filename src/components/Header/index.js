import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import Wrapper from '../Wrapper';
import styles from './styles.js';

const Header = () => (
  <aside className="Header">
    <Wrapper>
      <div className="Header__wrapper">
        <Link
          className="Header__logo-link"
          title="Go to dashboard"
          to="/"
        >
          <img
            alt="logo"
            className="Header__logo"
            src={logo}
          />
        </Link>

        <ul className="Header__nav">
          <li className="Header__nav-item">
            <Link
              className="Header__nav-link"
              to="/"
            >
              Flights
            </Link>
          </li>
          <li className="Header__nav-item">
            <Link
              className="Header__nav-link"
              to="/airports"
            >
              Airports
            </Link>
          </li>
          <li className="Header__nav-item">
            <Link
              className="Header__nav-link"
              to="/manage"
            >
              Manage
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
    <style jsx>{ styles }</style>
  </aside>
);

export default Header;
