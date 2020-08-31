import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card, CardHeader, CardBody } from 'reactstrap';
import './Login.css';
import Logo from './assets/images/logo.png';

class Login extends Component {
  constructor(props){
    super(props);
    this.state= {
      username:'',
      password:''
    }
  }
  render(){
    return(
      <>
      <Form className="form-signin">
      <img class="mb-4" src={Logo} alt="" width="72" height="72" />
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <FormGroup>
        <label for="inputEmail" class="sr-only">Email address</label>
        <Input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
      </FormGroup>
      <FormGroup>
        <label for="inputPassword" class="sr-only">Password</label>
        <Input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
      </FormGroup>
      <div class="checkbox mb-3">
        <label>
          <Input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <Button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</Button>
      <p class="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
      </Form>
      </>
    )
  }
}
export default Login;
