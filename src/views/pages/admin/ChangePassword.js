import React, {Component} from 'react';
import { Button, Form, FormGroup, Input, Col, Row, Card, CardBody } from 'reactstrap';

export default class ChangePassword extends Component {
  constructor() {
    super();
    this.state = { }
  }
  render(){
    return(
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Input type="password" name="oldPassword" id="oldPassword" placeholder="Old Password" />
                </FormGroup>
                <FormGroup>
                  <Input type="password" name="newPassword" id="newPassword" placeholder="New Password" />
                </FormGroup>
                <FormGroup>
                  <Input type="password" name="retypeNewPassword" id="retypeNewPassword" placeholder="Re-Type New Password" />
                </FormGroup>
                <Button color="success"><i className="fa fa-check"></i>&nbsp;Update Password</Button>{' '}
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
