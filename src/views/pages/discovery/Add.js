import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button, Card, CardHeader, CardBody  } from 'reactstrap';

class AddDiscovery extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      id: '',
      name: ''
    }
    if(props.discovery){
      this.state = props.discovery
    } else {
      this.state = this.initialState;
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }
  render(){
    let pageTitle;
    if(this.state.id) {
      pageTitle = <h2>Edit Discovery Section</h2>
    } else {
      pageTitle = <h2>Add Discovery Section</h2>
    }
    return(
      <>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <Card>
            <CardHeader>
              {pageTitle}
            </CardHeader>
            <CardBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup controlId="name">
                  <Label>Discovery Section Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Discovery Section Name"/>
                </FormGroup>
                <FormGroup>
                  <Input type="hidden" name="id" value={this.state.id} />
                  <Button color="success" type="submit">Save</Button>
                </FormGroup>
              </Form>
              </CardBody>
            </Card>
          </Col>
      </Row>
      </>
    )
  }
}

export default AddDiscovery;
