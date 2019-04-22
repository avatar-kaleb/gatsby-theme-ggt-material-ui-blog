import React, { memo } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import useSiteMetadata from '../../hooks/use-site-metadata';

/**
 * Disclaimer Page Component
 *
 * @returns {Component}
 */
const Disclaimer = () => {
  const { copyright } = useSiteMetadata();

  return (
    <Grid container justify='center'>
      <Grid item xs={12} md={10} lg={8}>
        <Card>
          <CardContent>
            <div>
              The information contained in this website is for general information purposes only.
              The information is provided by&nbsp;
              <i>{copyright}</i>
              &nbsp; and while we endeavour to keep the information up to date and correct, we make
              no representations or warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, suitability or availability with respect to the
              website or the information, products, services, or related graphics contained on the
              website for any purpose. Any reliance you place on such information is therefore
              strictly at your own risk. In no event will we be liable for any loss or damage
              including without limitation, indirect or consequential loss or damage, or any loss or
              damage whatsoever arising from loss of data or profits arising out of, or in
              connection with, the use of this website. Through this website you are able to link to
              other websites which are not under the control of &nbsp;
              <i>{copyright}</i>. We have no control over the nature, content and availability of
              those sites. The inclusion of any links does not necessarily imply a recommendation or
              endorse the views expressed within them. Every effort is made to keep the website up
              and running smoothly. However,&nbsp;
              <i>{copyright}</i>
              &nbsp; takes no responsibility for, and will not be liable for, the website being
              temporarily unavailable due to technical issues beyond our control.
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default memo(Disclaimer);
