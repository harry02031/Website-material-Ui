import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { styled } from '@material-ui/styles';
import React from 'react';
import { docsImageMap } from '../../constants/image';
const DocumentData = [
  {
    name: 'React',
    description: 'A javascript library for building user interfaces',
    img: docsImageMap.react,
    link: 'https://reactjs.org/',
  },
  {
    name: 'Material - UI',
    description:
      'React components for faster and easier web development. Build your own design system, or start with Material Design.',
    img: docsImageMap.mui,
    link: 'https://material-ui.com',
  },
];

const MyButton = styled(Button)({
  backgroundColor: '#1776D2',
  color: 'white',
});
interface Props {
  name: string;
}
function ConditionalButtonLocation(props: Props) {
  const isReact = props.name;
  if (isReact === 'React') {
    return (
      <MyButton variant="contained" size="small" color="primary" style={{ marginTop: 0, width: 115, height: 36 }}>
        <Typography
          style={{ position: 'absolute', fontWeight: 500, fontFamily: 'Roboto', fontSize: 15, fontStyle: 'normal' }}
        >
          Read More
        </Typography>
      </MyButton>
    );
  }
  return (
    <MyButton variant="contained" size="small" color="primary" style={{ marginTop: 2, width: 115, height: 36 }}>
      <Typography
        style={{ position: 'absolute', fontWeight: 500, fontFamily: 'Roboto', fontSize: 15, fontStyle: 'normal' }}
      >
        Read More
      </Typography>
    </MyButton>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: 960,
      height: 231,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
  }),
);

function Documentations() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: '#F2F2F2' }}>
      <div style={{ marginRight: 100, marginBottom: 100 }}>
        <Grid container spacing={2} xs={12}>
          <Grid item>
            <Typography style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: 40 }}>
              Documentations
            </Typography>
          </Grid>
          {DocumentData.map((document) => (
            <Grid item xs={12} key={document.name}>
              <Card className={classes.root}>
                <Grid xs={6}>
                  <CardContent>
                    <div style={{ marginLeft: 10 }}>
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="h2"
                        style={{ fontWeight: 'normal', fontFamily: 'Roboto', fontSize: 24, height: 28 }}
                      >
                        {document.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ fontWeight: 500, fontFamily: 'Roboto', fontSize: 16, height: 28 }}
                      >
                        {document.link}
                      </Typography>
                      <br></br>
                      <Typography
                        gutterBottom
                        variant="body1"
                        component="h2"
                        style={{ fontWeight: 'normal', fontFamily: 'Roboto', fontSize: 16, height: 59 }}
                      >
                        {document.description}
                      </Typography>
                    </div>
                    <CardActions>
                      <a href={document.link} target="_blank">
                        <ConditionalButtonLocation name={document.name} />
                      </a>
                    </CardActions>
                  </CardContent>
                </Grid>
                <Grid xs={6}>
                  <img src={document.img} alt="" style={{ height: '100%', width: '100%' }}></img>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
export default Documentations;
