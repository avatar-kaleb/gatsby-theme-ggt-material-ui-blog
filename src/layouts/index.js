/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

import { ThemeProvider } from '@material-ui/styles';

import config from '../constants/default-site-config';
const defaultSiteThemeColors = config.defaultSiteThemeColors;

const theme = createMuiTheme({
  palette: {
    primary: { main: defaultSiteThemeColors.primary },
    secondary: { main: defaultSiteThemeColors.secondary }
  },
  typography: {
    useNextVariants: true
  }
});

/**
 * Layout component used to wrap all pages with for default site layout
 *
 * @param {Object} props
 * @returns {Component}
 */
const Layout = ({ children }) => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Navigation>{children}</Navigation>
    </ThemeProvider>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
