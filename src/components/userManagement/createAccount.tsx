import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { ROUTE_CONFIG } from '../../globalConstants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(10)
    }
  })
);

export default function Variants() {
    const classes = useStyles();
    const history = useHistory();
    const handleLogin = () => {
            console.log('erijre')
            history.push(`/${ROUTE_CONFIG.HOME}`)

      };
     const handleChange=()=>{
       console.log("fsdfsdf")
     } 
  return (
    <form className={classes.container} noValidate autoComplete="off">
    <Card className={classes.card}>
      <CardHeader className={classes.header} title="Create Account" />
      <CardContent>
        <div>
        <InputLabel id="demo-simple-select-label">Title</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
          <TextField
            fullWidth
            id="name1"
            type="name"
            label="First Name"
            placeholder="First Name"
            margin="normal"
          />
           <TextField
            fullWidth
            id="username1"
            type="Name"
            label="Middle Name"
            placeholder="Middle Name"
            margin="normal"
          />
           <TextField
            fullWidth
            id="username2"
            type="Name"
            label="Last Name"
            placeholder="Last Name"
            margin="normal"
          />
             <TextField
            fullWidth
            id="username3"
            type="email"
            label="Email"
            placeholder="Email"
            margin="normal"
          />
           <TextField
            fullWidth
            id="username4"
            type="Phone"
            label="Phone"
            placeholder="Phone"
            margin="normal"
          />
        </div>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          className={classes.loginBtn}
          onClick={handleLogin}>
          Create
        </Button>
      </CardActions>
    </Card>
  </form>
  );
}