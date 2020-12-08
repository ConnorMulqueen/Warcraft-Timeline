import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import classes from '../styles/BackgroundVideo.module.css';


const useStyles = makeStyles((theme) => ({
  video: {
    height: '100vh',
    width: '100vw',
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
  },
  overlay: {
    height: '100vh',
    width: '100vw',
    objectFit: "cover",
    position: "static",
    top: 0,
    left: 0,
    opacity: 0.75,
  },
  centerText: {
    position: 'absolute',
    top: '50%',
    width: '50%',
    paddingLeft: '25%',
    paddingRight: '25%',
    textAlign: 'center',
  },
  button: {
    padding: '50px',
  },
  textBox: {
    borderRadius: 25,
    background: theme.palette.secondary.main,
    opacity: 1,
  },
  text: {
    opacity: 1,
    zIndex:1,
  }
}));

const BackgroundVideo = () => {
  const classes = useStyles();
    const videoSource = "../../static/crossroads.mp4"
    return (
        <div className={classes.overlay}>
            <video autoPlay="autoplay" loop="loop" muted className={classes.video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.centerText}>
              <div className={classes.textBox}>
                <div className={classes.text}>

              <Typography variant="h1" color="primary" className={classes.text}>
                Warcraft Timeline
              </Typography>
              <Typography variant="h6">
                A chronological ordering of events in warcraft history. Made by the community, for the community.
              </Typography>
              <Typography variant="h6">
                Jump to an era in Warcraft with the nav menu on the top left.
              </Typography>

              {/* <Button variant="contained" color="primary" className={classes.button}>
                Early Azeroth
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                Warcraft I
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                Warcraft II
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                Warcraft III
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                World of Warcraft
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                The Burning Crusade
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                Wrath of the Lich King
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                Cataclysm
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                Mists of Pandaria
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                Warlords of Draenor
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                Legion
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                Battle for Azeroth
              </Button>
              <Button variant="contained" color="primary" className={classes.button}>
                Shadowlands
              </Button> */}
                </div>
              </div>

            </div>


        </div>
    )
}

export default BackgroundVideo
