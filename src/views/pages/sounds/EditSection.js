import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row, Card, CardHeader, CardBody } from 'reactstrap';


const EditSection = props => {

return(
  <Row>
    <Col md={{ size: 8, offset: 2 }}>
      <Card>
        <CardHeader>
          <h2>Edit Sound Section</h2>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Section name" />
            </FormGroup>
            <Button color="success"><i className="fa fa-check"></i>&nbsp;Update Sound Section</Button>
          </Form>
        </CardBody>
      </Card>
    </Col>
  </Row>
)
};
export default EditSection;
