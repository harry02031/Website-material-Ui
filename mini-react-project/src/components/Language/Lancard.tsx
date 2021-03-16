import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { arrayImageMap } from '../../constants/image';
const ArrayData = [
  {
    name: 'map',
    purpose: 'Returns a new array',
    description:
      'The map() method creates a new array popylated with the results of calling a provided function on every element in the calling array.',
    img: arrayImageMap.map,
    link:
      'https://www.w3schools.com/jsref/jsref_map.asp#:~:text=The%20map()%20method%20creates,for%20array%20elements%20without%20values.',
  },
  {
    name: 'filter',
    purpose: 'Returns a new array',
    description:
      'The filter() method creates a new array with all elements that pass the test implemented by the provided function.',
    img: arrayImageMap.filter,
    link: 'https://www.w3schools.com/jsref/jsref_filter.asp',
  },
  {
    name: 'slice',
    purpose: 'Returns a new array',
    description: 'The slice() method returns a shallow copy of a portion of an array into a new array object selected.',
    img: arrayImageMap.slice,
    link: 'https://www.w3schools.com/jsref/jsref_slice_array.asp',
  },
];
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 420,
    width: 309,
  },
  media: {
    height: 140,
  },
});

interface Props {
  name: string;
}
function ConditionButtonLoc(props: Props) {
  const isCondition = props.name;
  if (isCondition === 'slice') {
    return (
      <Typography
        style={{ fontFamily: 'Roboto', fontSize: 16, fontWeight: 500, marginLeft: 0, marginTop: 28, color: '#1776D2' }}
        variant="body2"
      >
        Read More
      </Typography>
    );
  } else if (isCondition === 'filter') {
    return (
      <Typography
        style={{ fontFamily: 'Roboto', fontSize: 16, fontWeight: 500, marginLeft: 0, marginTop: 4, color: '#1776D2' }}
        variant="body2"
      >
        Read More
      </Typography>
    );
  } else {
    return (
      <Typography
        style={{
          fontFamily: 'Roboto',
          fontSize: 16,
          fontWeight: 500,
          marginLeft: 0,
          marginTop: 4,
          color: '#1776D2',
        }}
        variant="body2"
      >
        Read More
      </Typography>
    );
  }
}

export default function Lancard() {
  const classes = useStyles();
  return (
    <div>
      <Typography
        variant="body1"
        style={{ width: 345, fontFamily: 'Roboto', height: 28, fontSize: 24, fontWeight: 'normal' }}
      >
        Frequently used array functions
      </Typography>
      <br></br>
      <Grid container item direction="row" spacing={4}>
        {ArrayData.map((data) => (
          <Grid item xs={4} key={data.name}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={data.img} title="Contemplative Reptile" />
                <CardContent style={{ marginLeft: 5 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ fontFamily: 'Roboto', fontWeight: 'normal', fontSize: 24, width: 261, height: 32 }}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    style={{ fontFamily: 'Roboto', fontSize: 16, fontWeight: 500 }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {data.purpose}
                  </Typography>
                  <br></br>
                  <Typography
                    variant="body1"
                    component="p"
                    style={{ fontFamily: 'Roboto', fontWeight: 'normal', fontSize: 16 }}
                  >
                    {data.description}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions style={{ marginLeft: 8 }}>
                <a href={data.link} target="_blank">
                  <Button size="small" color="primary">
                    <ConditionButtonLoc name={data.name} />
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
