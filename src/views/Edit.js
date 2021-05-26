import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewStuffForm from '../components/NewStuffForm';
import { getThing } from '../helpers/data/stuffData';

function Edit() {
  const [thingObject, setThingObject] = useState({});
  const [editing, setEditing] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    getThing(id).then(setThingObject).then(() => {
      setEditing((prevState) => !prevState);
    });
  }, []);
  return (
    <div style={{
      padding: '50px',
      margin: '100px',
    }} className='mx-auto'>
      { editing && <NewStuffForm formTitle='Edit Form' {...thingObject}/> }
    </div>
  );
}

export default Edit;
