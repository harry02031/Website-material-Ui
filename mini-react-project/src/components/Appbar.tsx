import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PeopleIcon from '@material-ui/icons/People';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

function MyAppbar() {
  return (
    <div>
      <AppBar style={{ backgroundColor: '#1776D2', height: 64 }}>
        <Toolbar>
          <Grid container spacing={1} style={{ marginLeft: 208 }}>
            <Grid item style={{ marginLeft: 8, marginTop: 2 }}>
              <PeopleIcon></PeopleIcon>
            </Grid>
            <Grid item>
              <Typography style={{ position: 'absolute', marginLeft: 18, fontSize: 20, fontWeight: 500 }}>
                Game of Apps Summer Intern
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default MyAppbar;
