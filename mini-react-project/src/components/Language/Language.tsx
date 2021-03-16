import React from 'react';
import { Typography } from '@material-ui/core';
import Lancard from './Lancard';
import Lantable from './Lantable';
import Space from './Space';

function Language() {
  return (
    <div style={{ backgroundColor: '#F2F2F2' }}>
      <div style={{ marginLeft: 240, marginRight: 240 }}>
        <br></br>
        <br></br>
        <Typography style={{ height: 32, width: 188, fontFamily: 'Roboto', fontSize: 40, fontWeight: 'normal' }}>
          Javascript
        </Typography>
        <br></br>
        <br></br>
        <Typography style={{ height: 28, width: 960, fontFamily: 'Roboto', fontSize: 16, fontWeight: 'normal' }}>
          Javascript is a programming language initially designed to interact with elements of web pages.
        </Typography>
        <br></br>
        <br></br>
        <Lantable />
        <br></br>
        <br></br>
        <div style={{ backgroundColor: '#F2F2F2' }}>
          <Lancard />
        </div>
        <div style={{ backgroundColor: '#F2F2F2' }}>
          <Space />
        </div>
      </div>
    </div>
  );
}

export default Language;
