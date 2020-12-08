import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Drawer, Divider, List, ListItem, Button, Link, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import GithubIcon from '@material-ui/icons/GitHub'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({}));

export default function AppBarComponent() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={handleDrawerOpen} color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Warcraft Timeline
          </Typography>
          <Button variant="contained" color="secondary" href="#EarlyAzeroth" style={{marginLeft: 'auto'}}>
            Contribute <GithubIcon/>
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <Button color="primary" href="#EarlyAzeroth">
              Early Azeroth
        </Button>
          </ListItem>

          <ListItem>
            <Button color="primary" href="#WarcraftI">
              Warcraft I
        </Button>
          </ListItem>

          <ListItem>
            <Button color="primary" href="#WarcraftII">
              Warcraft II
        </Button>
          </ListItem>


          <ListItem>
            <Button color="primary" href="#WarcraftIII">
              Warcraft III
        </Button>
          </ListItem>

          <ListItem>
            <Button color="primary" href="#WorldofWarcraft">
              World of Warcraft
        </Button>
          </ListItem>

          <ListItem>
            <Button color="primary" href="#TheBurningCrusade">
              The Burning Crusade
        </Button>
          </ListItem>

        </List>
        <Divider />
        <List>

        </List>
      </Drawer>
    </div>
  )
}
