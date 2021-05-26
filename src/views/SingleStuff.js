import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getThing } from '../helpers/data/stuffData';

function SingleStuff() {
  const [thing, setThing] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getThing(id).then(setThing);
  }, []);
  return (
    <div style={{
      padding: '50px',
      margin: '100px',
      width: '50%',
      border: '1px solid white'
    }} className='mx-auto'>
      <h1>{thing.itemName}</h1>
      <img src={thing.itemImage} alt='' />
      <hr/>
      <p className='w-50 mx-auto'>{thing.itemDescription}</p>
    </div>
  );
}

export default SingleStuff;
