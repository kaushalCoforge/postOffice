import AppBar from '@material-ui/core/AppBar';
import React, { useReducer, useEffect, useState } from 'react';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {reducer,initialState,OPEN_DRAWER,CLOSE_DRAWER} from '../../reducer/index'
import AppDrawer from './AppDrawer';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

const AppHeader=()=>{
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [state, dispatch] = useReducer(reducer,initialState); 
    const {isOpen}=state
    const handleDrawerOpen = () => {
      console.log()
        dispatch({type:OPEN_DRAWER})
        //setOpen(true)
        console.log(state)
      };

      
   
return (
  <>
  <AppBar
  position="fixed"
  className={clsx(classes.appBar, {
    [classes.appBarShift]: state.isOpen,
  })}
>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
       // className={clsx(classes.menuButton, state.isOpen && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        PostOffice
      </Typography>
      <div>
          Mr.Post Master
      <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
</div>
    </Toolbar>
  </AppBar>
   <AppDrawer isOpen={isOpen} dispatch={dispatch}/>
   </>
)
}
export default AppHeader;