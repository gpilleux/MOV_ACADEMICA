import React, { Fragment } from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const ActivityDetail = () => {
  const nombre = 'Desafíos a partir de la crisis sanitaria en Osorno';
  const inicio = '22/08/2019';
  const termino = '23/08/2019';
  const unidad = 'Facultad de Arquitectura y Urbanismo';
  const creada = '16/07/2019';
  const modificada = '10/08/2019';
  const estado = 'Programada';

  return (
    <Fragment>
      <div class='row'>
        <div class='col col-8'>
          <h1 className='large text-primary'>{nombre}</h1>
          <p className='lead'>
            <i className='fas fa-map-marker' /> Unidad: {unidad}
          </p>
        </div>
        <div class='col col-4'>
          <Link to='/add-visitor' className='btn btn-primary'>
            Agregar Visitante a esta Actividad
          </Link>
        </div>
      </div>

      <div className='profile-grid my-1'>
        <div>
          <p>
            <strong>Fecha de Inicio: </strong> {inicio}
          </p>
          <p>
            <strong>Fecha de Término: </strong> {termino}
          </p>
          <p>
            <strong>Fecha de Creación: </strong> {creada}
          </p>
          <p>
            <strong>Fecha de Última Modificación: </strong> {modificada}
          </p>
          <p>
            <strong>Estado: </strong> {estado}
          </p>
        </div>
      </div>

      <Link to='/activities' className='btn btn-light'>
        Volver a Actividades
      </Link>
      <Link to='/edit-activity' className='btn btn-light'>
        Editar Activitdad
      </Link>
    </Fragment>
  );
};

export default ActivityDetail;
