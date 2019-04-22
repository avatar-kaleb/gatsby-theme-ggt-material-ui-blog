import React, { useState } from 'react';
import Appbar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import CopyrightNotice from './CopyrightNotice';
import Disclaimer from './Disclaimer';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';

function TabContainer(props) {
  return <div style={{ padding: 8 * 3 }}>{props.children}</div>;
}

const Legal = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, value) => {
    setTabValue(value);
  };

  return (
    <>
      <Appbar position='static'>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          indicatorColor='secondary'
          variant='scrollable'
          scrollButtons='auto'
        >
          <Tab label='Copyright Notice' />
          <Tab label='Disclaimer' />
          <Tab label='Privacy Policy' />
          <Tab label='Terms & Conditions' />
        </Tabs>
      </Appbar>
      {tabValue === 0 && (
        <TabContainer>
          <CopyrightNotice />
        </TabContainer>
      )}
      {tabValue === 1 && (
        <TabContainer>
          <Disclaimer />
        </TabContainer>
      )}
      {tabValue === 2 && (
        <TabContainer>
          <PrivacyPolicy />
        </TabContainer>
      )}
      {tabValue === 3 && (
        <TabContainer>
          <TermsAndConditions />
        </TabContainer>
      )}
    </>
  );
};

export default Legal;
