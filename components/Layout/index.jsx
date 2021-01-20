// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { NavBar } from '../NavBar';

export const Layout = ({ children }) => (
  <div>
    <NavBar />
    {children}
    <footer>This is the footer</footer>
  </div>

);

Layout.propTypes = {
  children: PropTypes.element
};
