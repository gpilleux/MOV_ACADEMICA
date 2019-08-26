<<<<<<< Updated upstream
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
=======
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
>>>>>>> Stashed changes
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
<<<<<<< Updated upstream
} from 'reactstrap';
import { Navbar as BNavbar } from 'reactstrap';
=======
} from "reactstrap";
import { Navbar as BNavbar } from "reactstrap";
>>>>>>> Stashed changes

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [toggle, setToggle] = useState(0);

  const authLinks = (
    <Nav className='ml-auto' navbar>
      <NavItem>
<<<<<<< Updated upstream
        <NavLink to='/activities/' tag={Link}>
          <i class='fas fa-tasks' />
=======
        <NavLink to="/activities/" tag={Link}>
          <i class="fas fa-tasks" />
>>>>>>> Stashed changes
          Actividades
        </NavLink>
      </NavItem>
      <NavItem>
<<<<<<< Updated upstream
        <NavLink to='/all-visitors' tag={Link}>
          <i className='fas fa-user' />
=======
        <NavLink to="/dashboard/" tag={Link}>
          <i className="fas fa-user" />
>>>>>>> Stashed changes
          Visitantes
        </NavLink>
      </NavItem>
      <NavItem>
<<<<<<< Updated upstream
        <NavLink to='/activities/' tag={Link}>
          <i class='fa fa-bar-chart' />
          Estadísticas
=======
        <NavLink to="/map/" tag={Link}>
          <i className="fas fa-chart-bar" />
          Visualizaciones
>>>>>>> Stashed changes
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink onClick={logout}>
<<<<<<< Updated upstream
          <i className='fas fa-sign-out-alt' />
=======
          <i className="fas fa-sign-out-alt" />
>>>>>>> Stashed changes
          Salir
        </NavLink>
      </NavItem>
    </Nav>
  );

  const guestLinks = (
    <Nav className='ml-auto' navbar>
      <NavItem>
<<<<<<< Updated upstream
        <NavLink to='/activities/' tag={Link}>
          <i class='fas fa-tasks' />
=======
        <NavLink to="/activities/" tag={Link}>
          <i class="fas fa-tasks" />
>>>>>>> Stashed changes
          Actividades
        </NavLink>
      </NavItem>
      <NavItem>
<<<<<<< Updated upstream
        <NavLink to='/dashboard/' tag={Link}>
          <i className='fas fa-user' />
          Visitantes
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/register' tag={Link}>
=======
        <NavLink to="/dashboard/" tag={Link}>
          <i className="fas fa-user" />
          Visitantes
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/map/" tag={Link}>
          <i className="fas fa-chart-bar" />
          Visualizaciones
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/register" tag={Link}>
>>>>>>> Stashed changes
          Registro
        </NavLink>
      </NavItem>
      <NavItem>
<<<<<<< Updated upstream
        <NavLink to='/login' tag={Link}>
=======
        <NavLink to="/login" tag={Link}>
>>>>>>> Stashed changes
          Ingresar
        </NavLink>
      </NavItem>
    </Nav>
  );

  return (
<<<<<<< Updated upstream
    <BNavbar color='dark' dark expand='md' fixed>
      <NavbarBrand href='/'>
        <img
          src='/logo-universidad-de-chile.svg'
          alt='logo universidad de chile'
        />
        <span style={{ display: 'block', margin: '1em 0' }}>
          <i className='fas fa-book' />
=======
    <BNavbar color="dark" dark expand="md" fixed>
      <NavbarBrand href="/">
        <img
          src="/logo-universidad-de-chile.svg"
          alt="logo universidad de chile"
        />
        <span style={{ display: "block", margin: "1em 0" }}>
          <i className="fas fa-book" />
>>>>>>> Stashed changes
          Movilidad Académica
        </span>
      </NavbarBrand>
      <NavbarToggler onClick={() => setToggle(!toggle)} />
      <Collapse isOpen={toggle} navbar>
        {!loading && (isAuthenticated ? authLinks : guestLinks)}
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
