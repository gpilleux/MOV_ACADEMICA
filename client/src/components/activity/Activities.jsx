import React, { Fragment } from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getActivities } from '../../actions/activity'

const dummyData = <Fragment>
  <tr>
  <td>
    <Link to='/activity-detail'>
      Seminario "Desafíos a partir de la crisis sanitaria en Osorno"
    </Link>
  </td>
  <td>22/08/2019</td>
  <td>23/08/2019</td>
  <td>Facultad de Arquitectura y Urbanismo</td>
  <td>16/07/2019</td>
  <td>10/08/2019</td>
  <td>Programada</td>
  <td>
    <Link to='/add-visitor'>Agregar Visitante</Link>
  </td>
</tr>
<tr>
  <td>
    <Link to='/activity-detail'>
      Quinto Encuentro Nacional de Teoría e Historia de la
      Arquitectura
    </Link>
  </td>
  <td>27/08/2019</td>
  <td>27/08/2019</td>
  <td>Facultad de Derecho</td>
  <td>20/07/2019</td>
  <td>23/08/2019</td>
  <td>Efectuada</td>
  <td>
    <Link to='/add-visitor'>Agregar Visitante</Link>
  </td>
</tr>

<tr>
  <td>
    <Link to='/activity-detail'>Seminario con Friedrich Hesse</Link>
  </td>
  <td>28/08/2019</td>
  <td>28/08/2019</td>
  <td>Facultad de Ciencias Sociales</td>
  <td>05/08/2019</td>
  <td>23/08/2019</td>
  <td>Cancelada</td>
  <td>
    <Link to='/add-visitor'>Agregar Visitante</Link>
  </td>
</tr>
</Fragment>

const Activities = (props) => {

  const {activity} = props;

  return (
    <Fragment>
      <div class='row'>
        <div class='col col-8'>
          <h1 className='large text-primary'>Actividades</h1>
          <p className='lead'>
            <i className='fas fa-users' /> Todas las actividades
          </p>
        </div>
        <div class='col col-4'>
          <Link to='/create-activity' className='btn btn-primary'>
            Agregar Nueva Actividad
          </Link>
        </div>
      </div>

      <div className='activities'>
        <Table responsive>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Inicio</th>
              <th>Término</th>
              <th>Unidad</th>
              <th>Creada</th>
              <th>Modificada</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {activity.activities.length > 0 ? activity.activities.map( el => 
              <tr>
                <td>
                  <Link to='/activity-detail/'>
                    {el.name}
                  </Link>
                </td>
                <td>{el.date_start}</td>
                <td>{el.date_end}</td>
                <td>{el.unit}</td>
                <td>{el.date_created}</td>
                <td>{el.date_modified}</td>
                <td>{el.state}</td>
                <td>
                  <Link to='/add-visitor'>Agregar Visitante</Link>
                </td>
            </tr> 
              ) : dummyData}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};

Activities.propTypes = {
  getActivities: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  activity: state.activity
})

export default connect(
  mapStateToProps,
  { getActivities }
)(Activities);
  