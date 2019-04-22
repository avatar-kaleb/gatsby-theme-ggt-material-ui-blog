import React, { memo } from 'react';
import { Link } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import useSiteMetadata from '../../hooks/use-site-metadata';

const styles = theme => ({
  appBar: {
    top: 0,
    bottom: 'auto'
  },
  content: {
    flexGrow: 1
  },
  tagline: {
    paddingLeft: theme.spacing.unit * 2,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      paddingBottom: theme.spacing.unit / 2
    }
  },
  title: {
    borderRight: '3px white solid',
    paddingRight: theme.spacing.unit * 2,
    [theme.breakpoints.down('xs')]: {
      borderRight: '0px'
    }
  },
  titleLink: {
    color: theme.palette.common.white,
    textDecoration: 'unset'
  }
});

/**
 * Header component shared throughout the site
 *
 * @param {Object} props
 */
const Header = ({ classes }) => {
  const { title, tagline } = useSiteMetadata();

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <Grid container direction='row' justify='center' alignItems='center'>
          {/* Could replace with logo */}
          <Link to='/' className={classes.titleLink}>
            <Typography className={classes.title} variant='h6' color='inherit' noWrap>
              {title}
            </Typography>
          </Link>
          <div>
            {/* TODO: add in toggle for light/dark theme */}
            <Typography className={classes.tagline} variant='body2' color='inherit'>
              {tagline}
            </Typography>
          </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default memo(withStyles(styles, { withTheme: true })(Header));
