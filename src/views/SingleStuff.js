import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import { deleteThing, getThing } from '../helpers/data/stuffData';

function SingleStuff() {
  const [thing, setThing] = useState({});
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    getThing(id).then(setThing);
  }, []);
  const handleClick = () => {
    deleteThing(id).then(() => history.push('/stuff'));
  };

  return (
    <div style={{
      padding: '50px',
      margin: '100px',
      width: '50%',
      border: '1px solid white'
    }} className='mx-auto'>
      <h1>{thing.itemName}</h1>
      <img src={thing.itemImage} alt='' className='w-100'/>
      <hr/>
      <p className='w-50 mx-auto'>{thing.itemDescription}</p>
      <Button color='danger' onClick={handleClick}>DELETE</Button>
    </div>
  );
}

export default SingleStuff;
