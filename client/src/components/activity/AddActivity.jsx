import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
//import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import DateRangePicker from 'react-dates';

const AddActivity = ({ history }) => {
  const [formData, setFormData] = useState({
    fecha_inicio: '',
    fecha_termino: '',
    unidad: '',
    tipo_actividad: '',
    descripcion: '',
    fecha_creada: '',
    fecha_ultima_modificacion: '',
    nombre_actividad: '',
    estado: ''
  });

  //const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    fecha_inicio,
    fecha_termino,
    unidad,
    tipo_actividad,
    descripcion,
    fecha_creada,
    fecha_ultima_modificacion,
    nombre_actividad,
    estado
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    //createProfile(formData, history);
  };

  const focusedInput = () => {};
  const setDates = () => {};

  return (
    <Fragment>
      <h1 className='large text-primary'>Crea una Actividad</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Formulario para crear una actividad.
      </p>
      <small>* = Campos Obligatorios</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <select
            name='tipo_actividad'
            value={tipo_actividad}
            onChange={e => onChange(e)}
          >
            <option value='0'>* Seleccione el Tipo de la Actividad</option>
            <option value='Conferencia'>Conferencia</option>
            <option value='Congreso'>Congreso</option>
            <option value='Seminario'>Seminario</option>
            <option value='Charla'>Charla</option>
            <option value='Taller'>Taller</option>
            <option value='Visita Protocolar'>Visita Protocolar</option>
            <option value='Investigación'>Investigación</option>
            <option value='Otro'>Otro</option>
          </select>
          <small className='form-text'>
            * Seleccione el tipo de actividad que más se asocia a la actividadad
            a realizar.
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Nombre de la Actividad'
            name='nombre_actividad'
            value={nombre_actividad}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            * Escriba un nombre representativo de la actividad.
          </small>
        </div>

        <div className='form-group'>
          <select
            name='tipo_actividad'
            value={tipo_actividad}
            onChange={e => onChange(e)}
          >
            <option value='0'>* Seleccione la Unidad</option>
            <option value='Congreso'>Campus Andrés Bello</option>
            <option value='Conferencia'>Campus Beauchef</option>
            <option value='Conferencia'>Campus JGM</option>
            <option value='Otro'>Otro</option>
          </select>
          <small className='form-text'>
            * Seleccione la Unidad en donde se realizará la actividad.
          </small>
        </div>

        <div className='form-group'>
          <input
            type='date'
            name='fecha_inicio'
            value={fecha_inicio}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            * Fecha de <b>inicio</b> de la actividad.
          </small>
        </div>

        <div className='form-group'>
          <input
            type='date'
            name='fecha_termino'
            value={fecha_termino}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            * Fecha de <b>término</b> de la actividad.
          </small>
        </div>

        <div className='form-group'>
          <textarea
            placeholder='Descripción de la Actividad'
            name='descripcion'
            value={descripcion}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Escriba una breve descripción de la actividad a realizar.
          </small>
        </div>

        <input
          type='submit'
          className='btn btn-primary my-1'
          value='Crear Actividad'
        />
        <Link className='btn my-1' to='/dashboard'>
          Atrás
        </Link>
      </form>
    </Fragment>
  );
};

export default AddActivity;
