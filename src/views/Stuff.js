import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StuffCard from '../components/StuffCard';
import { getStuff } from '../helpers/data/stuffData';

function Stuff() {
  const [stuff, setStuff] = useState([]);
  useEffect(() => {
    getStuff().then(setStuff);
  }, []);
  return (
    <>
      <h1>My Stuff</h1>
      <div className='stuff-card-container d-flex flex-wrap justify-content-center m-5 p-5'>
        { stuff.map((object) => <StuffCard
        key={object.firebaseKey}
        setStuff={setStuff}
        {...object}
        />)}
      </div>
    </>
  );
}
Stuff.propTypes = {
  stuff: PropTypes.array
};

export default Stuff;
