import React, { Fragment } from 'react';
import { Table } from 'reactstrap';

const Activities = () => {
  return (
    <Fragment>
      <h1 className='large text-primary'>Actividades</h1>
      <p className='lead'>
        <i className='fab fa-connectdevelop'>Todas las actividades.</i>
      </p>
      <div className='activities'>
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Inicio</th>
              <th>Término</th>
              <th>Unidad</th>
              <th>Creada</th>
              <th>Modificada</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Seminario "Desafíos a partir de la crisis sanitaria en Osorno"
              </td>
              <td>22/08/2019</td>
              <td>23/08/2019</td>
              <td>Facultad de Arquitectura y Urbanismo</td>
              <td>16/07/2019</td>
              <td>10/08/2019</td>
              <td>Programada</td>
              <td>Agregar Visitante</td>
            </tr>
            <tr>
              <td>
                Quinto Encuentro Nacional de Teoría e Historia de la
                Arquitectura
              </td>
              <td>27/08/2019</td>
              <td>27/08/2019</td>
              <td>Facultad de Derecho</td>
              <td>20/07/2019</td>
              <td>23/08/2019</td>
              <td>Efectuada</td>
              <td />
            </tr>

            <tr>
              <td>Seminario con Friedrich Hesse</td>
              <td>28/08/2019</td>
              <td>28/08/2019</td>
              <td>Facultad de Ciencias Sociales</td>
              <td>05/08/2019</td>
              <td>23/08/2019</td>
              <td>Cancelada</td>
              <td />
            </tr>
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};

export default Activities;
