import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const Authenticated = () => (
    <Nav className="mr-auto" navbar>
    <NavItem>
      <Link className="nav-link" to="/home">Home</Link>
    </NavItem>
    <NavItem>
      <Link className="nav-link" to="/stuff">My Stuff</Link>
    </NavItem>
    <NavItem>
      <Link className="nav-link" to="/stuff/new">New</Link>
    </NavItem>
  </Nav>
  );

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>Hoarder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        {
          user
          && <Authenticated />
        }
        <Collapse isOpen={isOpen} navbar>
          { user !== null
            && <div className='auth-btn-container'>
                {
                  user ? <Button color='danger' onClick={signOutUser}>SignOut?</Button>
                    : <Button color='info' onClick={signInUser}>SignIN!</Button>
                }
              </div>
            }
        </Collapse>
      </Navbar>
    </div>
  );
};
NavBar.propTypes = {
  user: PropTypes.any
};
export default NavBar;
