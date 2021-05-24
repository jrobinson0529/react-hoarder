import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';

function Stuff() {
  const history = useHistory();
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

  return (
    <>
      <h1>My Stuff</h1>
      <ButtonGroup>
        <Button color='info' onClick={() => handleButtonClick('edit')}>Edit</Button>
        <Button color='primary' onClick={() => handleButtonClick('single')}>Single</Button>
      </ButtonGroup>
    </>
  );
}

export default Stuff;
