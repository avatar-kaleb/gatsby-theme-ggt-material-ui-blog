import React, { memo } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Bio from '..//Bio';
import PostListing from './PostListing';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit / 2
  },
  link: {
    color: theme.palette.secondary.contrastText,
    textDecoration: 'none'
  },
  pageWrapper: {
    width: '100%',
    margin: '0px',
    marginTop: theme.spacing.unit,
    padding: theme.spacing.unit * 2
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
      <Grid className={classes.pageWrapper} container direction='row' spacing={24}>
        <Grid item xs={12}>
          <Bio />
        </Grid>
        <PostListing postEdges={postEdges} />
      </Grid>
    </>
  );
};

export default memo(withStyles(styles)(Blog));
