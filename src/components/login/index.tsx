import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
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
  return (
    <form className={classes.container} noValidate autoComplete="off">
    <Card className={classes.card}>
      <CardHeader className={classes.header} title="Login" />
      <CardContent>
        <div>
          <TextField
            fullWidth
            id="username"
            type="email"
            label="Username"
            placeholder="Username"
            margin="normal"
          />
          <TextField
            fullWidth
            id="password"
            type="password"
            label="Password"
            placeholder="Password"
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
          Login
        </Button>
      </CardActions>
    </Card>
  </form>
  );
}