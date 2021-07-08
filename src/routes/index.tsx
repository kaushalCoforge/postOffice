import React from 'react';
import { Route, Switch } from 'react-router-dom';
import login from '../components/login';
import home from '../components/layout/index';
import createAccount from '../components/userManagement/createAccount';
import deleteAccount from '../components/userManagement/deleteAccount';
import messages from '../components/userManagement/messages';
import profile from '../components/userManagement/profile';

import { ROUTE_CONFIG } from '../globalConstants';
const {
  HOME,
    CREATE_ACCOUNT,
    DELETE_ACCOUNT,
    MESSAGES,
    PROFILE,
} = ROUTE_CONFIG;
const routes = [
    {
      path:`/${HOME}`,
      component: home,
    },
    {
        path: `/${CREATE_ACCOUNT}`,
        component: createAccount,
      },
      {
        path: `/${DELETE_ACCOUNT}`,
        component: deleteAccount,
      },
      {
        path: `/${MESSAGES}`,
        component: messages,
      },
      {
        path: `/${PROFILE}`,
        component: profile,
      },
  
  {
    path: '/',
    component: login,
  },
];

const RouteWithSubRoutes = (route: any) => {
  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

const Routers = () => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
};

export default Routers;
