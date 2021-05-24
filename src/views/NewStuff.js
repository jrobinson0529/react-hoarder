import React from 'react';
import PropTypes from 'prop-types';
import NewStuffForm from '../components/NewStuffForm';

function NewStuff({ user }) {
  return (
    <div>
      <NewStuffForm user={user}/>
    </div>
  );
}
NewStuff.propTypes = {
  user: PropTypes.any,
};
export default NewStuff;
