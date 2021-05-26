import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

const StuffCard = ({ ...object }) => {
  const history = useHistory();
  const viewCard = () => {
    history.push(`/stuff/${object.firebaseKey}`);
  };
  const editCard = () => {
    history.push(`/edit/${object.firebaseKey}`);
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
          <Button color='primary' onClick={viewCard}>View</Button>
          <Button color='info' onClick={editCard}>Edit</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default StuffCard;
