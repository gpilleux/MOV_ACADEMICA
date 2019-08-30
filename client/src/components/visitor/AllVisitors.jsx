import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Table, Button } from 'reactstrap';
import SearchField from 'react-search-field';
import { Helmet } from 'react-helmet';

const AllVisitors = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Listado de Visitantes</title>
      </Helmet>
      <div class='row'>
        <div class='col col-8'>
          <h1 className='large text-primary'>Listado de Visitantes</h1>
          <p className='lead'>
            <i className='fas fa-users' /> Todos los visitantes que han
            participado en una actividad en la Universidad de Chile
          </p>
        </div>
        <div class='col col-4'>
          <Link to='/create-visitor' className='btn btn-primary'>
            Agregar Nuevo Visitante
          </Link>
        </div>
      </div>

      <SearchField
        placeholder='Buscar visitante por nombre...'
        onChange={e => e}
        classNames='test-class'
      />

      <div className='profile-grid my-1'>
        <Table>
          <thead>
            <td>Nombre</td>
            <td>Género</td>
            <td>Fecha de Nacimiento</td>
            <td>Contacto(correo)</td>
            <td>Nacionalidad</td>
            <td>Fecha Creado</td>
            <td>Última Modificación</td>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to='/visitor'>Jorge Pérez</Link>
              </td>
              <td>Masculino</td>
              <td>01/01/1980</td>
              <td>jperez@uchile.cl</td>
              <td>Chilena</td>
              <td>26/08/2019</td>
              <td>26/08/2019</td>
            </tr>

            <tr>
              <td>
                <Link to='/visitor'>Jorge Pérez</Link>
              </td>
              <td>Masculino</td>
              <td>01/01/1980</td>
              <td>jperez@uchile.cl</td>
              <td>Chilena</td>
              <td>26/08/2019</td>
              <td>26/08/2019</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};

export default AllVisitors;
