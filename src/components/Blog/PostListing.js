import React, { memo } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import useModeData from '../../hooks/use-post-data';
import useSiteMetadata from '../../hooks/use-site-metadata';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit / 2
  },
  gradient: {
    background: `linear-gradient(180deg, ${theme.palette.secondary.light} 0%, ${
      theme.palette.primary.dark
    } 50%, ${theme.palette.secondary.light} 100%)`,
    height: '100vh',
    padding: theme.spacing.unit * 2
  },
  link: {
    color: theme.palette.secondary.contrastText,
    textDecoration: 'none'
  }
});

const PostListing = ({ classes }) => {
  const { postCardReadBtnText } = useSiteMetadata();
  const {
    allMarkdownRemark: { edges: postEdges }
  } = useModeData();

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
