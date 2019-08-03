import React, { memo } from 'react';

import useSiteMetadata from '../../hooks/use-site-metadata';

import { Avatar, Paper, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  avatar: {
    alignItems: 'normal',
    height: 60,
    margin: 10,
    marginRight: theme.spacing(3),
    width: 60
  },
  paper: {
    backgroundColor: theme.palette.grey[300],
    padding: '8px',
    margin: '0 auto',
    wordWrap: 'break-word',
    [theme.breakpoints.up('lg')]: {
      width: '25%'
    },
    [theme.breakpoints.down('lg')]: {
      width: '30%'
    },
    [theme.breakpoints.down('md')]: {
      width: '45%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '65%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '95%'
    }
  },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
});

/**
 * The bio component displays a user avatar and two quick summary lines for a quick intro.
 *
 * @param {Object} props
 * @returns {Component}
 */
const Bio = ({ classes }) => {
  const { avatarImgSrc, bioLineOne, bioLineTwo } = useSiteMetadata();

  return (
    <Paper className={classes.paper} elevation={12}>
      <section className={classes.wrapper}>
        <Avatar alt='Remy Sharp' src={avatarImgSrc} className={classes.avatar} />
        <div>
          <Typography color='primary' variant='body2'>
            {bioLineOne}
          </Typography>
          <Typography color='primary' variant='body2'>
            {bioLineTwo}
          </Typography>
        </div>
      </section>
    </Paper>
  );
};

export default memo(withStyles(styles, { withTheme: true })(Bio));
