import React, { memo } from 'react';
import { Link } from 'gatsby';

import usePostData from '../../hooks/use-post-data';
import useSiteMetadata from '../../hooks/use-site-metadata';

import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Typography,
  withStyles
} from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing(0.5)
  },
  gradient: {
    background: `linear-gradient(180deg, ${theme.palette.secondary.light} 0%, ${
      theme.palette.primary.dark
    } 50%, ${theme.palette.secondary.light} 100%)`,
    height: '100vh',
    padding: theme.spacing(2)
  },
  link: {
    color: theme.palette.secondary.contrastText,
    textDecoration: 'none'
  }
});

const PostListing = ({ classes }) => {
  const { postCardReadBtnText } = useSiteMetadata();
  const {
    allMdx: { edges: postEdges }
  } = usePostData();

  return postEdges.map(postEdge => (
    <Grid key={postEdge.node.frontmatter.title} item xs={12} sm={6} md={6} lg={4}>
      <Card>
        <CardHeader
          title={postEdge.node.frontmatter.title}
          subheader={`${postEdge.node.timeToRead} min read`}
        />
        <CardContent>
          <Typography component='p'>{postEdge.node.excerpt}</Typography>
        </CardContent>
        <Divider />
        <CardActions disableActionSpacing>
          <Link className={classes.link} to={postEdge.node.fields.slug}>
            <Button className={classes.button} variant='contained' color='secondary'>
              {postCardReadBtnText}
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  ));
};

export default memo(withStyles(styles)(PostListing));
