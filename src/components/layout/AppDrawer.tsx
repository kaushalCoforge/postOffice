import React, { useReducer, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import MessageIcon from '@material-ui/icons/Message';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {reducer,initialState,OPEN_DRAWER,CLOSE_DRAWER} from '../../reducer/index'

import { ROUTE_CONFIG } from '../../globalConstants';
const drawerWidth = 240;

interface AppDrawerProps{
    isOpen: boolean,
    dispatch:any,
}
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
const AppDrawer=({isOpen,dispatch}:AppDrawerProps)=>{
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    //const [state, dispatch] = useReducer(reducer,initialState);
      const handleDrawerClose = () => {
        dispatch({type:CLOSE_DRAWER})
      };

    //   useEffect(()=>{
    //       if(isOpen){
    //           console.log(isOpen)
    //           setOpen(true)
    //       }
    //   },[isOpen])
      return(
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button >
              <ListItemIcon><HomeIcon/></ListItemIcon>
              <ListItemText primary={'Home'}/>
            </ListItem>
             <ListItem button onClick={()=>{console.log("fdsfdsfdgf");history.push(`/${ROUTE_CONFIG.CREATE_ACCOUNT}`)}}>
             <ListItemIcon><PersonAddIcon/></ListItemIcon>
             <ListItemText primary={'Create Account'} />
           </ListItem>
            <ListItem button onClick={()=>{console.log("fdsfdsfdgf");history.push(`/${ROUTE_CONFIG.DELETE_ACCOUNT}`)}}>
            <ListItemIcon><DeleteIcon/></ListItemIcon>
            <ListItemText primary={'Delete Account'} />
          </ListItem>
           <ListItem button onClick={()=>{console.log("fdsfdsfdgf");history.push(`/${ROUTE_CONFIG.MESSAGES}`)}}>
           <ListItemIcon><MessageIcon/></ListItemIcon>
           <ListItemText primary={'Messages'} />
         </ListItem>
          <ListItem button onClick={()=>{console.log("fdsfdsfdgf");history.push(`/${ROUTE_CONFIG.PROFILE}`)}} >
          <ListItemIcon><PersonIcon/></ListItemIcon>
          <ListItemText primary={'Profile'} />
        </ListItem>
        </List>
      </Drawer>
      )

}
export default AppDrawer;