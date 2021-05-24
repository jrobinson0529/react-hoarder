import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Row, Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import createStuff from '../helpers/data/stuffData';

function NewStuffForm({ user }) {
  const [thing, setThing] = useState({
    firebaseKey: null,
    itemName: '',
    itemImage: '',
    itemDescription: '',
    uid: user?.uid,
  });
  const handleInputChange = (e) => {
    setThing((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (thing.firebaseKey) {
      console.warn('trying to edit?');
    } else {
      createStuff(thing);
    }
  };
  return (
    <div>
      <Form className="w-50 mx-auto my-5 border p-5" onSubmit={handleSubmit}>
        <h1>New Stuff Form</h1>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="itemName">Name</Label>
              <Input
                type="text"
                name="itemName"
                id="itemName"
                placeholder="Enter item name..."
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="itemImage">Image</Label>
              <Input
                type="url"
                name="itemImage"
                id="itemImage"
                placeholder="Enter item image..."
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="itemDescription">Description</Label>
          <Input
            type="textarea"
            name="itemDescription"
            id="itemDescription"
            placeholder="Enter item description..."
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}
NewStuffForm.propTypes = {
  user: PropTypes.any
};

export default NewStuffForm;
