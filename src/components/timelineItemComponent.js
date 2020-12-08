import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import {MenuBook, PlayArrow, LibraryBooks, Bathtub, SportsEsports, BurstMode} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 300,
  },
}));


function chooseIcon(mediaType) {
  switch(mediaType) {
    case 'Novel':
    case 'Illustrated Novel':
      return <MenuBook />
    case 'Short Story':
      return <LibraryBooks />
    case 'Game':
      return <SportsEsports />
    case 'Manga':
      return <BurstMode />
    case 'Video':
      return <PlayArrow />
    default:
      return <Bathtub />
  }
};

export default function TimelineItemComponent(props) {
  const classes = useStyles();


  return(
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2" color="textSecondary">
          Year {props.year}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary">
          {chooseIcon(props.type)}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.image}
              title= {props.title + " Cover"}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography gutterBottom variant="subtitle1" color="textSecondary">
                {props.type}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              A journey through an age of myth and legend, a time long before the Horde and the Alliance came to be.
              This definitive tome of Warcraft history reveals untold stories about the birth of the cosmos, the rise of
                ancient empires, and the forces that shaped the world of Azeroth and its people.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
            <Button size="small" color="primary" disabled>
              Amazon
            </Button>
          </CardActions>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};
