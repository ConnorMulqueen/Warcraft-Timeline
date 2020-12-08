import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import Typography from '@material-ui/core/Typography';
import TimelineItemComponent from '../components/timelineItemComponent';
import AppBarComponent from '../components/appbarComponent';
import BackgroundVideo from './intro';
import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  media: {
    height: 300,
  },
  background: {
    background: 'black'
  }
}));

export default function CustomizedTimeline() {
  const classes = useStyles();
  return (
    <div color="secondary">
      <AppBarComponent/>
      <BackgroundVideo/>
      <Typography variant="h3" color="Primary" align="center" id="EarlyAzeroth">
        Early Azeroth History
      </Typography>
        <Timeline align="alternate">
          <TimelineItemComponent
            year="-150,000"
            title="World of Warcraft: Chronicle Volume 1"
            image="/../../static/World_of_Warcraft_Chronicle_Volume_1.jpg"
            type="Illustrated Novel"
            link="somethingsomething">
          </TimelineItemComponent>
          <TimelineItemComponent
            year="-125,000"
            title="War of the Ancients Trilogy"
            image="/../../static/War_of_the_ancients_Trilogy_book_1.jpg"
            type="Novel"
            link="somethingsomething">
          </TimelineItemComponent>
          <TimelineItemComponent
            year="-110,000"
            title="World of Warcraft: Chronicle Volume 2"
            image="/../../static/World_of_Warcraft_Chronicle_Volume_2.jpg"
            type="Illustrated Novel"
            link="somethingsomething">
          </TimelineItemComponent>
          <TimelineItemComponent
            year="-125,000"
            title="A Warrior Made"
            image="/../../static/Warcraft_Legends_Volume_4.jpg"
            type="Manga"
            link="somethingsomething">
          </TimelineItemComponent>
          <TimelineItemComponent
            year="-125,000"
            title="Rise of the Horde"
            image="/../../static/rise_of_the_horde.jpg"
            type="Novel"
            link="somethingsomething">
          </TimelineItemComponent>
          <TimelineItemComponent
            year="-125,000"
            title="Family Values"
            image="/../../static/Warcraft_Legends_Volume_2.jpg"
            type="Manga"
            link="somethingsomething">
          </TimelineItemComponent>
          <TimelineItemComponent
            year="-125,000"
            title="Unbroken"
            image="/../../static/unbroken.jpg"
            type="Short Story"
            link="somethingsomething">
          </TimelineItemComponent>
          <TimelineItemComponent
            year="-125,000"
            title="The First Guardian"
            image="/../../static/Warcraft_Legends_Volume_5.jpg"
            type="Manga"
            link="somethingsomething">
          </TimelineItemComponent>
          <TimelineItemComponent
            year="-125,000"
            title="The Last Guardian"
            image="/../../static/The_Last_Guardian.jpg"
            type="Novel"
            link="somethingsomething">
          </TimelineItemComponent>
        </Timeline>

      <Typography variant="h3" align="center">
          Warcraft: Orcs and Humans
      </Typography>
        <Timeline align="alternate">
          <TimelineItemComponent
            year="-150,000"
            title="Warcraft: Orcs and Humans"
            image="/../../static/Warcraft_Orcs_and_Humans.jpg"
            type="Game"
            link="somethingsomething">
          </TimelineItemComponent>
        </Timeline>

      <Typography variant="h3" align="center">
        Warcraft II: Tides of Darkness
      </Typography>
        <Timeline align="alternate">
          <TimelineItemComponent
              year="-150,000"
              title="Warcraft II: Tides of Darkness"
              image="/../../static/"
              type="Game"
              link="somethingsomething">
            </TimelineItemComponent>
            <TimelineItemComponent
              year="-150,000"
              title="Tides of Darkness"
              image="/../../static/"
              type="Novel"
              link="somethingsomething">
            </TimelineItemComponent>
        </Timeline>


      <Typography variant="h3" align="center">
        Warcraft II: Beyond the Dark Portal
      </Typography>
        <Timeline align="alternate">
          <TimelineItemComponent
              year="-150,000"
              title="Warcraft II: Beyond the Dark Portal"
              image="/../../static/"
              type="Game"
              link="somethingsomething">
            </TimelineItemComponent>
            <TimelineItemComponent
              year="-150,000"
              title="Beyond the Dark Portal"
              image="/../../static/"
              type="Novel"
              link="somethingsomething">
            </TimelineItemComponent>
            <TimelineItemComponent
              year="-150,000"
              title="Day of the Dragon"
              image="/../../static/"
              type="Novel"
              link="somethingsomething">
            </TimelineItemComponent>
            <TimelineItemComponent
              year="-150,000"
              title="Road to Damnation"
              image="/../../static/"
              type="Short Story"
              link="somethingsomething">
            </TimelineItemComponent>
            <TimelineItemComponent
              year="-150,000"
              title="Lord of the Clans"
              image="/../../static/"
              type="Novel"
              link="somethingsomething">
            </TimelineItemComponent>
            <TimelineItemComponent
              year="-150,000"
              title="Of Blood and Honor"
              image="/../../static/"
              type="Novel"
              link="somethingsomething">
            </TimelineItemComponent>
        </Timeline>

      <Typography variant="h3" align="center">
        Warcraft III: Reign of Chaos
      </Typography>
        <Timeline align="alternate">
        <TimelineItemComponent
              year="-150,000"
              title="Warcraft III: Reign of Chaos"
              image="/../../static/"
              type="Game"
              link="somethingsomething">
            </TimelineItemComponent>
        </Timeline>

      <Typography variant="h3" align="center">
       Warcraft III: The Frozen Throne
      </Typography>
        <Timeline align="alternate">
        <TimelineItemComponent
              year="-150,000"
              title="Warcraft III: The Frozen Throne"
              image="/../../static/"
              type="Game"
              link="somethingsomething">
            </TimelineItemComponent>
            <TimelineItemComponent
              year="-150,000"
              title="Arthas: Rise of the Lich King"
              image="/../../static/"
              type="Novel"
              link="somethingsomething">
            </TimelineItemComponent>
        </Timeline>

      <Typography variant="h3" align="center">
       Pre-WoW todo
      </Typography>
      <Typography variant="h3" align="center" id="WorldofWarcraft">
       World of Warcraft
      </Typography>
      <Typography variant="h3" align="center">
        The Burning Crusade
      </Typography>
      <Typography variant="h3" align="center">
        Wrath of the Lich King
      </Typography>
      <Typography variant="h3" align="center">
        Cataclysm
      </Typography>
      <Typography variant="h3" align="center">
        Mists of Pandaria
      </Typography>
      <Typography variant="h3" align="center">
        Warlords of Draenor
      </Typography>
      <Typography variant="h3" align="center">
        Legion
      </Typography>
      <Typography variant="h3" align="center">
        Battle for Azeroth
      </Typography>
      <Typography variant="h3" align="center">
        Shadowlands
      </Typography>
    </div>
  );
}
