import React, {useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './LoginForm';
import './ui/scss/styles.scss';
import store from 'store';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthenticated } from "./store/actions/config";


export default function App() {
  const isAuthenticated = useSelector(state => state.config.isAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    if(store.get('loggedIn')){
      dispatch(isAuthenticated => (true));
    } else {
      dispatch(isAuthenticated =>(false));
    }
    /*
    if(store.get('loggedIn')){
      // props.isAuthenticated(true);
      isAuthenticated: store.get('loggedIn');
      //dispatch(isAuthenticated);
    }*/

  }, []);
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
