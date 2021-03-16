import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';
import { Link } from 'react-router-dom';
import { Path } from '../constants/path';
import Home from './Home/Home';
import Language from './Language/Language';

function PrimaryNav() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <div style={{ marginTop: 65, height: 48 }}>
        <AppBar position="static">
          <Paper>
            <Tabs
              indicatorColor="primary"
              TabIndicatorProps={{ style: { background: '#1776D2' } }}
              textColor="primary"
              value={selectedTab}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Home" style={{ marginLeft: 240 }} component={Link} to={Path.Home} />

              <Tab label="Language" style={{ marginLeft: 0 }} component={Link} to={Path.Language} />
            </Tabs>
          </Paper>
        </AppBar>
        {selectedTab === 0 && <Home />}
        {selectedTab === 1 && <Language />}
      </div>
    </>
  );
}

export default PrimaryNav;
