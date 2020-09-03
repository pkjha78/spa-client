import React, { useState, useEffect } from 'react';
import Logo from './assets/images/login.png';
import './LoginForm.css';
import store from 'store';
import { Switch, Redirect } from 'react-router-dom';

const LoginForm = props => {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if(store.get('loggedIn')){
      setLogin(true);
    }
  }, []);

  const handleLoginOnSubmit = (e) => {
    e.preventDefault();
    if(!(username.value === 'admin@admin.com' && password.value === '123456')) {
      return setError({ error: true });
    }
    setLogin(true);
    console.log("You're logged in. yay!");
    store.set('loggedIn', true);
    console.log(store.get('loggedIn'));
    props.history.push('/home');
  }

  return(
    <>
    <Switch>
      { login && (
        <Redirect from="/" to="/home" />
      )}
    </Switch>
    <div className="cover cover__login">
      <div className="container-login">
          <div className="panel panel__login">
              <div className="panel-body">
                  <div className="row">
                      <div className="col-md-2"></div>
                      <div className="col-md-8 text-center">
                          <img src={Logo} />
                      </div>
                      <div className="col-md-2"></div>
                  </div>
                  <h1 className="text-center">Administrator Login</h1>

                <form name="form" onSubmit={handleLoginOnSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="email" {...username} autoComplete="new-password" size="10" maxLength="32" className="form-control" placeholder="Enter a valid email address" required  />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" {...password} autoComplete="new-password" size="10" maxLength="40" className="form-control" placeholder="Enter a password"required />
                        <div className="clearfix">&nbsp;</div>
                        <div className="checkbox mb-3">
                            <label>
                              <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                    </div>
                    {error && <><small sytle={{color: 'red'}}>That username/password is incorrect. Try again!</small><br /></>}
                    <button type="submit" className="btn btn-primary btn-log btn-lg btn-login center-block">Log In</button>
                    <div className="clearfix"></div>
                </form>
                  <p className="text-center panel__login__footer">91.866.663.2228 or <a href="mailto:Support@example.com">Support@example.com</a></p>
              </div>
            </div>
            <p className="copyright text-center">Copyright © 2020 Admin Dashboard. All Rights Reserved.</p>
          </div>
      </div>
      </>
  )
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e){
    setValue(e.target.value);
  }
  return{
    value,
    onChange: handleChange
  }
}
export default LoginForm;
