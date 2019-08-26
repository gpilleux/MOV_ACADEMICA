import React, { Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import {Navbar as BNavbar} from 'reactstrap';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [toggle, setToggle] = useState(0);

  const authLinks = (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink to="/activities/" tag={Link}><i class='fas fa-tasks' />
        Actividades</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/dashboard/" tag={Link}><i className='fas fa-user' />{' '}
        Visitantes</NavLink>
      </NavItem>
      <NavItem>
        <NavLink onClick={logout}><i className='fas fa-sign-out-alt' />{' '}
          Salir</NavLink>
      </NavItem>
    </Nav>
  );

  const guestLinks = (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink to="/activities/" tag={Link}>
          <i class='fas fa-tasks' />
          Actividades</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/dashboard/" tag={Link}>
          <i className='fas fa-user' />{' '}
          Visitantes</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/register" tag={Link}>Registro</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/login" tag={Link}>Ingresar</NavLink>
      </NavItem>
    </Nav>
  );

  return (
    <BNavbar color="dark" dark expand="md" fixed>
    <NavbarBrand href="/">
      <img src="/logo-universidad-de-chile.svg" alt="logo universidad de chile" />
      <span style={{display: "block", margin: "1em 0"}}>
      <i className='fas fa-book' />
      Movilidad Académica
      </span>
    </NavbarBrand>
    <NavbarToggler onClick={() => setToggle(!toggle)} />
    <Collapse isOpen={toggle} navbar>
        {!loading && (
          isAuthenticated ? authLinks : guestLinks
        )}
    </Collapse>
  </BNavbar>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProp = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProp,
  { logout }
)(Navbar);
