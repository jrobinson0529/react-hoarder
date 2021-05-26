import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewStuffForm from '../components/NewStuffForm';
import { getThing } from '../helpers/data/stuffData';

function Edit() {
  const [args, setArgs] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getThing(id).then(setArgs);
  }, []);
  return (
    <div style={{
      padding: '50px',
      margin: '100px',
    }} className='mx-auto'>
      <NewStuffForm formTitle='Edit Form' {...args}/>
    </div>
  );
}

export default Edit;
