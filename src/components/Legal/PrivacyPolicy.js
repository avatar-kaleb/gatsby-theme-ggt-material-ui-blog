import React, { memo } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import useSiteMetadata from '../../hooks/use-site-metadata';

/**
 * Privacy Policy Page Component
 */
const PrivacyPolicy = () => {
  const { copyright } = useSiteMetadata();

  return (
    <Grid container justify='center'>
      <Grid item xs={12} md={10} lg={8}>
        <Card>
          <CardContent>
            <div>
              At &nbsp;
              <i>{copyright}</i>, the privacy of our visitors is of extreme importance to us. This
              privacy policy document outlines the types of personal information is received and
              collected by &nbsp;
              <i>{copyright}</i>
              &nbsp; and how it is used.&nbsp;
              <b>Log Files</b>&nbsp; Like many other Web sites, &nbsp;
              <i>{copyright}</i>
              &nbsp; makes use of log files. The information inside the log files includes internet
              protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time
              stamp, referring/exit pages, and number of clicks to analyze trends, administer the
              site, track user&apos;s movement around the site, and gather demographic information.
              IP addresses, and other such information are not linked to any information that is
              personally identifiable. &nbsp;<b>Cookies and Web Beacons</b>&nbsp;
              <i>{copyright}</i>
              &nbsp; does use cookies to store information about visitors preferences, record
              user-specific information on which pages the user access or visit, customize Web page
              content based on visitors browser type or other information that the visitor sends via
              their browser. &nbsp;<b>DoubleClick DART Cookie</b>
              <br />
              <br />
              <ul>
                <li>
                  Google, as a third party vendor, uses cookies to serve ads on &nbsp;
                  <i>{copyright}</i>.
                </li>
                <li>
                  Google&apos;s use of the DART cookie enables it to serve ads to users based on
                  their visit to &nbsp;
                  <i>{copyright}</i>
                  &nbsp; and other sites on the Internet.
                </li>
                <li>
                  Users may opt out of the use of the DART cookie by visiting the Google ad and
                  content network privacy policy at the following URL - &nbsp;
                  <a href='\"https://www.google.com/policies/privacy/\"' rel='\"nofollow\"'>
                    https://www.google.com/policies/privacy/
                  </a>
                  .
                </li>
              </ul>
              These third-party ad servers or ad networks use technology to the advertisements and
              links that appear on &nbsp;
              <i>{copyright}</i>
              &nbsp; send directly to your browsers. They automatically receive your IP address when
              this occurs. Other technologies ( such as cookies, JavaScript, or Web Beacons ) may
              also be used by the third-party ad networks to measure the effectiveness of their
              advertisements and / or to personalize the advertising content that you see.&nbsp;
              <i>{copyright}</i>
              &nbsp; has no access to or control over these cookies that are used by third-party
              advertisers. You should consult the respective privacy policies of these third-party
              ad servers for more detailed information on their practices as well as for
              instructions about how to opt-out of certain practices.
              <i>{copyright}</i>
              &apos;s privacy policy does not apply to, and we cannot control the activities of,
              such other advertisers or web sites. If you wish to disable cookies, you may do so
              through your individual browser options. More detailed information about cookie
              management with specific web browsers can be found at the browser&apos;s respective
              websites.
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default memo(PrivacyPolicy);
