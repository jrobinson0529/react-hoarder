import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';
import StuffCard from '../components/StuffCard';
import { getStuff } from '../helpers/data/stuffData';

function Stuff() {
  const history = useHistory();
  const [stuff, setStuff] = useState([]);
  const handleButtonClick = (type) => {
    switch (type) {
      case 'edit':
        history.push('/edit/12345');
        break;
      case 'single':
        history.push('/stuff/12345');
        break;
      default:
    }
  };
  useEffect(() => {
    getStuff().then(setStuff);
  }, []);
  return (
    <>
      <h1>My Stuff</h1>
      <ButtonGroup>
        <Button color='info' onClick={() => handleButtonClick('edit')}>Edit</Button>
        <Button color='primary' onClick={() => handleButtonClick('single')}>Single</Button>
      </ButtonGroup>
      <div className='stuff-card-container d-flex flex-wrap justify-content-center m-5 p-5'>
        { stuff.map((object) => <StuffCard
        key={object.firebaseKey}
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
