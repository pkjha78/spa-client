import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './LoginForm';
import './ui/scss/styles.scss';
import store from 'store';

export default function App() {
  let routes = (
    <>{
      store.get('loggedIn') ? (<Route component={DashboardLayout} />):
      (<Route component={Login} />)
      }
    </>
  );
  return (
    <BrowserRouter>
      <Switch>
        {routes}
      </Switch>
    </BrowserRouter>
  );
}
