/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';
import CssBaseline from '@material-ui/core/CssBaseline';

/**
 * Layout component used to wrap all pages with for default site layout
 *
 * @param {Object} props
 * @returns {Component}
 */
const Layout = ({ children }) => (
  <>
    <CssBaseline />
    <Navigation>{children}</Navigation>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
