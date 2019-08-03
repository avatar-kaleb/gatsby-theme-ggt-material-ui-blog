import React, { memo } from 'react';

import Bio from '../Bio';
import PostListing from './PostListing';

import { Grid, withStyles } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing(0.5)
  },
  link: {
    color: theme.palette.secondary.contrastText,
    textDecoration: 'none'
  },
  pageWrapper: {
    width: '100%',
    margin: '0px',
    marginTop: theme.spacing(1),
    padding: theme.spacing(2)
  }
});

/**
 * The main blog page - a short bio followed a grid of blog post previews.
 *
 * @param {Object} props
 * @returns {Component}
 */
const Blog = ({ classes, postEdges }) => {
  return (
    <>
      <Grid className={classes.pageWrapper} container direction='row' spacing={3}>
        <Grid item xs={12}>
          <Bio />
        </Grid>
        <PostListing postEdges={postEdges} />
      </Grid>
    </>
  );
};

export default memo(withStyles(styles)(Blog));
