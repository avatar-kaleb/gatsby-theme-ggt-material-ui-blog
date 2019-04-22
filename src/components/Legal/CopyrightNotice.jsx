import React, { memo } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import useSiteMetadata from '../../hooks/use-site-metadata';

/**
 * Copyright Notice Page Component
 *
 * @returns {Component}
 */
const CopyrightNotice = () => {
  const { copyright } = useSiteMetadata();

  return (
    <Grid container justify='center'>
      <Grid item xs={12} md={10} lg={8}>
        <Card>
          <CardContent>
            <div>
              This website and its content is copyright of &nbsp;<i>{copyright}</i>© &nbsp;2017 ©.
              All rights reserved. Any redistribution or reproduction of part or all of the contents
              in any form is prohibited other than the following:
              <ul>
                <li>
                  you may print or download to a local hard disk extracts for your personal and
                  non-commercial use only
                </li>
                <li>
                  you may copy the content to individual third parties for their personal use, but
                  only if you acknowledge the website as the source of the material
                </li>
              </ul>
              You may not, except with our express written permission, distribute or commercially
              exploit the content. Nor may you transmit it or store it in any other website or other
              form of electronic retrieval system.
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default memo(CopyrightNotice);
