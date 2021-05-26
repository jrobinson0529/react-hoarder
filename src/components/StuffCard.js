import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import { deleteThing } from '../helpers/data/stuffData';

const StuffCard = ({ setStuff, ...object }) => {
  const history = useHistory();
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteThing(object.firebaseKey).then(setStuff);
        break;
      case 'edit':
        history.push(`/edit/${object.firebaseKey}`);
        break;
      case 'view':
        history.push(`/stuff/${object.firebaseKey}`);
        break;
      default:
    }
  };

  return (
    <div>
      <Card style={{
        width: '25em',
        color: 'black',
        height: 'auto'
      }}>
        <CardImg top width="100%" src={object.itemImage} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{object.itemName}</CardTitle>
          <CardText>{object.itemDescription}</CardText>
          <Button color='primary' onClick={() => handleClick('view')}>View</Button>
          <Button color='info' onClick={() => handleClick('edit')}>Edit</Button>
          <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
};
StuffCard.propTypes = {
  setStuff: PropTypes.func
};

export default StuffCard;
