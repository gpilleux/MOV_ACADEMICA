import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Table, Button } from 'reactstrap';

const Visitor = () => {
  const name = 'Jorge Pérez';
  const genero = 'Masculino';
  const nacimiento = '01/01/1980';
  const nacionalidad = 'Chilena';
  const contacto = 'jperez@uchile.cl';
  const fecha_creada = '26/08/2019';
  const fecha_mod = '26/08/2019';

  return (
    <Fragment>
      <Link to='/all-visitors' className='btn btn-light'>
        Volver a Visitantes
      </Link>
      <Link to='/edit-profile' className='btn btn-dark'>
        Editar Visitante
      </Link>

      <div className='profile-grid my-1'>
        <div>
          <h3 className='text-dark'>{name}</h3>
          <p>
            <strong>Género: </strong> {genero}
          </p>
          <p>
            <strong>Fecha de Nacimiento: </strong> {nacimiento}
          </p>
          <p>
            <strong>Nacionalidad: </strong> {nacionalidad}
          </p>
          <p>
            <strong>Contacto: </strong> {contacto}
          </p>
          <p>
            <strong>Fecha Creada: </strong> {fecha_creada}
          </p>
          <p>
            <strong>Fecha Modificación: </strong> {fecha_mod}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Visitor;
