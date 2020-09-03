import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row, Card, CardHeader, CardBody } from 'reactstrap';


const AddSection = (props) => {
  const initSection =  {id: null, name: ''};
  const [section, setSection] = useState(initSection);

  const handleChange = e => {
        const {name, value} = e.target;
        setSection({...section, [name]: value});
    }

  const handleSubmit = e => {
    e.preventDefault();
    if (section.name) {
        handleChange(e, props.addSection(section));
    }
  }

  return(
    <Row>
      <Col md={{ size: 8, offset: 2 }}>
        <Card>
          <CardHeader>
            <h2>Add Sound Section</h2>
          </CardHeader>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" placeholder="Section Name" />
              </FormGroup>
              <Button color="success"><i className="fa fa-check"></i>&nbsp;Add Sound Section</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
};
export default AddSection;
