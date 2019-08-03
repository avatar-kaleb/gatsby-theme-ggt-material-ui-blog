// absolute
import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../layouts';
import { fadeInTransitionTime } from '../constants/transitions';
import PostListing from '../components/Blog/PostListing';
import SEO from '../components/Seo';
import useSiteMetadata from '../hooks/use-site-metadata';

import { Grid, Fade, Paper, withStyles } from '@material-ui/core';

const styles = theme => ({
  primaryText: {
    color: theme.palette.primary.dark
  },
  paper: {
    margin: `${theme.spacing(2)}px auto`,
    padding: theme.spacing(3),
    textAlign: 'center',
    wordWrap: 'break-word',
    [theme.breakpoints.up('lg')]: {
      width: '35%'
    },
    [theme.breakpoints.down('lg')]: {
      width: '50%'
    },
    [theme.breakpoints.down('md')]: {
      width: '65%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '75%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '95%'
    }
  }
});

/**
 * 404 page that has recent posts listed
 * @param {Array} postEdges - list of recent posts from GQL
 */
const FourOhFour = ({ classes }) => {
  const { seoKeywords, siteUrl, title } = useSiteMetadata();

  return (
    <Layout>
      <SEO title='404' keywords={seoKeywords} />
      <Fade in timeout={{ enter: fadeInTransitionTime }}>
        <>
          <Grid container direction='row' spacing={24}>
            <Helmet>
              <title>{`404 | ${title}`}</title>
              <link rel='canonical' href={`${siteUrl}/legal/`} />
            </Helmet>
            <Grid item justify='center' xs={12}>
              <Paper className={classes.paper} elevation={12}>
                <h3 className={classes.primaryText}>
                  Uh Oh! Couldn't Find What You're Looking For!
                </h3>
                <section>
                  <p>
                    We&#8217;re sorry about that, please check out the list of recent posts below to
                    get back to your reading!
                  </p>
                </section>
              </Paper>
            </Grid>
            <PostListing />
          </Grid>
        </>
      </Fade>
    </Layout>
  );
};

export default withStyles(styles)(FourOhFour);
