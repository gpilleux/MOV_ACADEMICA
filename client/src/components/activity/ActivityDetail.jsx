import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { getActivity } from '../../actions/activity'
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import moment from 'moment';
import { Table } from 'reactstrap';

const ActivityDetail = ({
  getActivity,
  activityProp: { loading, activity },
  match
}) => {
  useEffect(() => {
    getActivity(match.params.id);
  }, [getActivity]);

  const nombre = 'Desafíos a partir de la crisis sanitaria en Osorno';
  const inicio = '22/08/2019';
  const termino = '23/08/2019';
  const unidad = 'Facultad de Arquitectura y Urbanismo';
  const creada = '16/07/2019';
  const modificada = '10/08/2019';
  const estado = 'Programada';

  return (
    <Fragment>
      <Helmet>
        <title>Actividad</title>
      </Helmet>
      { activity === null || loading ? <Spinner /> : <Fragment>
        <Helmet>
        <title>{activity.name}</title>
      </Helmet>
      <div class='row'>
      <div class='col col-8'>
        <h1 className='large text-primary'>{activity.name}</h1>
        <p className='lead'>
          <i className='fas fa-map-marker' /> Unidad: {activity.unit}
        </p>
      </div>
      <div class='col col-4'>
        <Link to='/add-visitor' className='btn btn-primary'>
          Agregar Visitante a esta Actividad
        </Link>
      </div>
    </div>

    <Table>
        <thead>
          <tr>
            <th>Campo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Fecha de Inicio:</th>
            <td>{moment(activity.date_start).format("DD/MM/YYYY")}</td>
          </tr>
          <tr>
            <th scope="row">Fecha de Término:</th>
            <td>{moment(activity.date_end).format("DD/MM/YYYY")}</td>
          </tr>
          <tr>
            <th scope="row">Fecha de Creación:</th>
            <td>{moment(activity.date_created).format("DD/MM/YYYY")}</td>
          </tr>
          <tr>
            <th scope="row">Fecha de Última Modificación: </th>
            <td>{moment(activity.date_modified).format("DD/MM/YYYY")}</td>
          </tr>
          <tr>
            <th scope="row">Estado</th>
            <td>{activity.state}</td>
          </tr>
          <tr>
            <th scope="row">Descripcion</th>
            <td>{activity.description}</td>
          </tr>
        </tbody>
      </Table>

    <Link to='/activities' className='btn btn-light'>
      Volver a Actividades
    </Link>
    <Link to='/edit-activity' className='btn btn-light'>
      Editar Activitdad
    </Link> </Fragment>
    }
    </Fragment>
  );
};

const mapStateToProps = state => ({
  activityProp: state.activity
})

export default connect(
  mapStateToProps,
  { getActivity }
)(ActivityDetail);
