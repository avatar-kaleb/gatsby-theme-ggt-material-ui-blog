import React from 'react';
import Fade from '@material-ui/core/Fade';

import Blog from '../components/Blog';
import SEO from '../components/seo';
import Layout from '../layouts';
import { fadeInTransitionTime } from '../constants/transitions';
import useSiteMetadata from '../hooks/use-site-metadata';

/**
 * Main home page of the site
 *
 * @param {Object} props
 * @returns {Component}
 */
const IndexPage = ({ classes }) => {
  const { seoKeywords } = useSiteMetadata();

  return (
    <Layout>
      <SEO title='Home' keywords={seoKeywords} />
      <Fade in timeout={{ enter: fadeInTransitionTime }}>
        <div>
          <Blog />
        </div>
      </Fade>
    </Layout>
  );
};

export default IndexPage;