import { Typography } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import React from 'react';
import { videoImageMap } from '../../constants/image';
import Documentations from './Documentations';
import SpaceHome from './SpaceHome';

const tileData = [
  {
    name: 'TypeScript Course for Beginners 2020 - Youtube',
    img: videoImageMap.typescript,
    link: 'https://www.youtube.com/watch?v=BwuLxPH8IDs',
  },
  {
    name: "The Beginner's Guide to React - Egghead",
    img: videoImageMap.react,
    link: 'https://egghead.io/courses/the-beginner-s-guide-to-react',
  },
  {
    name: 'Figma Tutorial: Developer Handoff - Youtube',
    img: videoImageMap.figma,
    link: 'https://www.youtube.com/watch?v=B242nuM3y2s',
  },
];
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      height: 450,
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    title: {
      color: 'primary',
      fontSize: 20,
    },
    titleBar: {
      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }),
);
const WhiteTextTypography = withStyles({
  root: {
    color: '#FFFFFF',
  },
})(Typography);

function Home() {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: '#F2F2F2' }}>
      <div style={{ marginLeft: 240 }}>
        <br></br>
        <br></br>
        <Typography style={{ fontSize: 40, fontFamily: 'Roboto', fontWeight: 'normal', height: 32, width: 123 }}>
          Videos
        </Typography>
        <br></br>
        <br></br>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={1.5} cellHeight={450} spacing={15}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img} style={{ height: 450, width: 800 }}>
                <div style={{ position: 'relative' }}>
                  <a href={tile.link} target="_blank">
                    <WhiteTextTypography
                      variant="h3"
                      style={{
                        position: 'absolute',
                        fontFamily: 'Roboto',
                        fontSize: 56,
                        marginTop: 290,
                        marginLeft: 35,
                        height: 117,
                        width: 720,
                        fontWeight: 'normal',
                      }}
                    >
                      {tile.name}
                    </WhiteTextTypography>
                  </a>
                  <a href={tile.link} target="_blank">
                    <img src={tile.img} alt="" height="100%" width="100%" />
                  </a>
                </div>
              </GridListTile>
            ))}
          </GridList>
        </div>
        <br></br>
        <br></br>
        <Documentations />
      </div>
      <div style={{ backgroundColor: '#F2F2F2' }}>
        <SpaceHome />
      </div>
    </div>
  );
}

export default Home;
