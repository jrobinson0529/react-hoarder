import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Col, Row, Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import { createStuff, updateThing } from '../helpers/data/stuffData';

function NewStuffForm({ user, formTitle, ...args }) {
  const [thing, setThing] = useState({
    firebaseKey: args.firebaseKey || null,
    itemName: args?.itemName || '',
    itemImage: args?.itemImage || '',
    itemDescription: args?.itemDescription || '',
    uid: user?.uid,
  });
  const handleInputChange = (e) => {
    setThing((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (args.firebaseKey) {
      updateThing(args.firebaseKey, thing).then(() => history.push('/stuff'));
    } else {
      createStuff(thing).then(() => history.push('/stuff'));
    }
  };
  return (
    <div>
      <Form className="w-50 mx-auto my-5 border p-5" onSubmit={handleSubmit}>
        <h1>{formTitle}</h1>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="itemName">Name</Label>
              <Input
                type="text"
                name="itemName"
                id="itemName"
                value={thing.itemName}
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
                value={thing.itemImage}
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
            value={thing.itemDescription}
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
  user: PropTypes.any,
  formTitle: PropTypes.string,
  args: PropTypes.object,
};

export default NewStuffForm;
