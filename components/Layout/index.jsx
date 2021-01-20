// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { NavBar } from '../NavBar';

// Styles
import styles from './layout.module.css';

export const Layout = ({ children }) => (
  <div className={styles.container}>
    <NavBar />
    {children}
    <footer>This is the footer</footer>
  </div>

);

Layout.propTypes = {
  children: PropTypes.element
};
