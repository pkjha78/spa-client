import React, { Component } from 'react';
import { Alert, Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card, CardHeader, CardBody } from 'reactstrap';
import './Login.css';
import Logo from '../../assets/images/logo.png';
import { Switch, Route, Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state= {
      username:'',
      password:'',
      error: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;

    this.setState({ error: false });

    if (!(username === 'admin@admin.com' && password === '123456')) {
      return this.setState({ error: true });
    }

    console.log("you're logged in. yay!");
    //store.set('loggedIn', true);
    this.props.history.push('/home');

  }

  handleChange = (event) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value, event: event })
  }

  render(){
    const { error } = this.state;
    const name = undefined;
    return(
      <div className="login-container">
        <Form className="form-signin" onSubmit={this.onSubmit}>
        {error && <Alert variant="info">"That username/password is incorrect. Try again!"</Alert>
        }
        <img className="mb-4" src={Logo} alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <FormGroup>
          <label className="sr-only">Email address</label>
          <Input type="email" label="Username" name="username" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <label className="sr-only">Password</label>
          <Input type="password" name="password" className="form-control" placeholder="Password" required onChange={this.handleChange}/>
        </FormGroup>
        <div className="checkbox mb-3">
          <label>
            <Input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <Button color="success" type="submit">Sign in</Button>
        <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
        </Form>
      </div>
    )
  }
}
export default Login;
