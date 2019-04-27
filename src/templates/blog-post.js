import React, { memo } from 'react';
import { graphql } from 'gatsby';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Helmet from 'react-helmet';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Moment from 'react-moment';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { fadeInTransitionTime } from '../constants/transitions';
import Layout from '../layouts';
import useSiteMetadata from '../hooks/use-site-metadata';
import SEO from '../components/Seo';

const styles = theme => ({
  articleHeading: {
    color: theme.palette.primary.contrastText,
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing.unit * 3,
    margin: theme.spacing.unit
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit / 2
  },
  wrapper: {
    padding: theme.spacing.unit,
    margin: theme.spacing.unit * 2
  }
});

/**
 * The re-usable component for all blog posts on the site
 *
 * @param {Object} props
 * @returns {Component}
 */
const BlogPost = ({ classes, data }) => {
  const { postDateFormat, postDefaultCategoryID, siteUrl, title } = useSiteMetadata();
  const { mdx: postNode } = data;
  const {
    fields: { slug }
  } = postNode;
  const post = postNode.frontmatter;

  if (!post.id) {
    post.id = slug;
  }
  if (!post.category_id) {
    post.category_id = postDefaultCategoryID;
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${title}`}</title>
        <link rel='canonical' href={`${siteUrl}${post.id}`} />
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO title={post.title} />
      <Fade in timeout={{ enter: fadeInTransitionTime }}>
        <div className={classes.wrapper}>
          <Grid className={classes.articleHeading} container justify='center'>
            <Grid item>
              <h1 className={classes.title}>{post.title}</h1>
              <p>
                <Moment format={postDateFormat}>{post.date}</Moment> ~ 🍵 {post.timeToRead} min read
              </p>
            </Grid>
          </Grid>
          <Grid container justify='center'>
            <Grid item xs={12} sm={11} md={8} lg={6} xl={4}>
              <Paper className={classes.paper} component='article'>
                {' '}
                <MDXRenderer>{postNode.code.body}</MDXRenderer>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </Layout>
  );
};

export default memo(withStyles(styles)(BlogPost));

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
        title
        category
        tags
      }
      fields {
        slug
      }
      code {
        body
      }
      timeToRead
    }
  }
`;
