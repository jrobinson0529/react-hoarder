import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Stuff from '../views/Stuff';
import Edit from '../views/Edit';
import SingleStuff from '../views/SingleStuff';
import NewStuff from '../views/NewStuff';

function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={() => <Home user={user}/>} />
        <Route exact path="/stuff" component={() => <Stuff/>} />
        <Route exact path="/stuff/new" component={() => <NewStuff user={user}/>} />
        <Route exact path="/edit/:id" component={() => <Edit />} />
        <Route exact path="/stuff/:id" component={() => <SingleStuff />} />
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  user: PropTypes.any,
};
export default Routes;
