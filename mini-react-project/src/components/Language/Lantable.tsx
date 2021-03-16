import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createDataType(type: string, choice: string, example: string) {
  return {
    type,
    choice,
    example,
  };
}

const rows = [
  createDataType('string', 'primitive', 'a,A,abc,@, æ, ∆'),
  createDataType('number', 'primitive', '1,-10,3,2'),
  createDataType('boolean', 'primitive', 'true,false'),
  createDataType('object', 'reference', '{a:1,b:2,c:3}'),
  createDataType('function', 'reference', "function () {console.log('hello');}"),
  createDataType('undefined', 'primitive', 'undefined'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Lantable() {
  return (
    <div>
      <Typography
        style={{
          height: 28,
          width: 400,
          fontFamily: 'Roboto',
          fontSize: 24,
          fontWeight: 'normal',
          fontStyle: 'normal',
        }}
      >
        JavaScript basic data types
      </Typography>
      <br></br>
      <br></br>
      <TableContainer style={{ backgroundColor: 'white', width: 960, height: 400 }}>
        <Table aria-label="a dense table">
          <TableHead>
            <TableRow style={{ height: 57 }}>
              <TableCell style={{ paddingLeft: 25 }}>
                <Typography style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 16 }}>Type</Typography>
              </TableCell>
              <TableCell style={{ paddingLeft: 23 }}>
                <Typography style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 16 }}>
                  Primitive or Reference
                </Typography>
              </TableCell>
              <TableCell style={{ paddingLeft: 23 }}>
                <Typography style={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 16 }}>Examples</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.type} style={{ height: 57 }} hover={true}>
                <TableCell align="left" style={{ marginLeft: 40 }}>
                  <Typography style={{ fontFamily: 'Roboto', fontWeight: 'normal', fontSize: 16 }}>
                    {row.type}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography style={{ fontFamily: 'Roboto', fontWeight: 'normal', fontSize: 16 }}>
                    {row.choice}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography style={{ fontFamily: 'Roboto', fontWeight: 'normal', fontSize: 16 }}>
                    {row.example}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
