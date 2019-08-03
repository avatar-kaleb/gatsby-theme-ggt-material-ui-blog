import React, { memo } from 'react';

import NavButton from '../Buttons/NavButton';
import useSiteMetadata from '../../hooks/use-site-metadata';

import { AppBar, Grid, Toolbar, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  appBar: {
    bottom: 0,
    top: 'auto'
  },
  subscribeButton: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
});

/**
 * Footer component shared throughout the site
 *
 * @param {Object} props
 * @returns {Component}
 */
const Footer = ({ classes }) => {
  const { copyright, legalUrl, rssUrl } = useSiteMetadata();
  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <Grid container direction='row' justify='space-evenly' style={{ textAlign: 'center' }}>
          <Grid item xs={6} lg={4}>
            <Typography variant='h6' color='inherit' noWrap>
              {copyright}
            </Typography>
          </Grid>

          <Grid className={classes.subscribeButton} item lg={4}>
            <NavButton color='inherit' to={rssUrl} variant='outlined' internal={false}>
              subscribe
            </NavButton>
          </Grid>
          <Grid item xs={6} lg={4}>
            <NavButton color='inherit' to={legalUrl} variant='outlined'>
              legal
            </NavButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default memo(withStyles(styles, { withTheme: true })(Footer));
