import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {DateRangePicker} from 'react-dates';
import moment from 'moment';
import esLocale from 'moment/locale/es'
import 'react-dates/lib/css/_datepicker.css';
import { Helmet } from 'react-helmet';
import { addActivity } from '../../actions/activity';

moment.locale('es', esLocale)

class AddActivity extends Component {

  constructor(props){
    super(props)
    this.state = {
      activity_type: '',
      description: '',
      date_created: moment(),
      last_modified: moment(),
      name: '',
      state: 'Programada',
      unit: '',
      date_start: null,
      date_end: null,
    }
    this.changeFocus = this.changeFocus.bind(this);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    // addActivity(formData)
    this.props.addActivity(this.state);
  }

  changeDates = ({ startDate, endDate }) => {
    this.setState({ date_start: startDate, date_end: endDate })
  }

  changeFocus(focusedInput){
    this.setState({focusedInput})
  }

  render(){
    return (
    <Fragment>
      <Helmet>
        <title>Agregar Actividad</title>
      </Helmet>
      <h1 className='large text-primary'>Crea una Actividad</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Formulario para crear una actividad.
      </p>
      <small>* = Campos Obligatorios</small>
      <form className='form' onSubmit={e => this.onSubmit(e)}>
        <div className='form-group'>
          <select
            name='activity_type'
            value={this.state.tipo_actividad}
            onChange={e => this.onChange(e)}
          >
            <option value='0'>* Seleccione el Tipo de la Actividad</option>
            <option value='Conferencia'>Conferencia</option>
            <option value='Congreso'>Congreso</option>
            <option value='Seminario'>Seminario</option>
            <option value='Charla'>Charla</option>
            <option value='Taller'>Taller</option>
            <option value='Visita Protocolar'>Visita Protocolar</option>
            <option value='Investigación'>Investigación</option>
            <option value='Curso'>Curso</option>
            <option value='Distinción'>Premiación</option>
            <option value='Inauguración'>Inauguración</option>
            <option value='Encuentro'>Encuentro</option>
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
            name='name'
            value={this.state.nombre_actividad}
            onChange={e => this.onChange(e)}
          />
          <small className='form-text'>
            * Escriba un nombre representativo de la actividad.
          </small>
        </div>
        <div className='form-group'>
          <select
            name='unit'
            value={this.state.facultad}
            onChange={e => this.onChange(e)}
          >
            <option value='0'>* Seleccione el Lugar</option>
            <option value='Facultad de Arquitectura y Urbanismo'>Facultad de Arquitectura y Urbanismo</option>
            <option value='Facultad de Artes'>Facultad de Artes</option>
            <option value='Facultad de Ciencias Agronomicas'>Facultad de Ciencias Agron&oacute;micas</option>
            <option value='Facultad de Ciencias'>Facultad de Ciencias</option>
            <option value='Facultad de Ciencias Fisicas y Matematicas'>Facultad de Ciencias F&iacute;sicas y Matem&aacute;ticas</option>
            <option value='Facultad de Ciencias Forestales y de la Conservacion de la Naturaleza'>Facultad de Ciencias Forestales y de la Conservaci&oacute;n de la Naturaleza</option>
            <option value='Facultad de Ciencias Quimicas y Farmaceuticas'>Facultad de Ciencias Qu&iacute;micas y Farmac&eacute;uticas</option>
            <option value='Facultad de Ciencias Sociales'>Facultad de Ciencias Sociales</option>
            <option value='Facultad de Ciencias Veterinarias y Pecuarias'>Facultad de Ciencias Veterinarias y Pecuarias</option>
            <option value='Facultad de Derecho'>Facultad de Derecho</option>
            <option value='Facultad de Economia y Negocios'>Facultad de Econom&iacute;a y Negocios</option>
            <option value='Facultad de Filosofia y Humanidades'>Facultad de Filosof&iacute;a y Humanidades</option>
            <option value='Facultad de Medicina'>Facultad de Medicina</option>
            <option value='Facultad de Odontologia'>Facultad de Odontolog&iacute;a</option>
            <option value='Instituto de Asuntos Publicos'>Instituto de Asuntos P&uacute;blicos</option>
            <option value='Instituto de Comunicación e Imagen'>Instituto de Comunicaci&oacute;n e Imagen</option>
            <option value='Instituto de Estudios Internacionales'>Instituto de Estudios Internacionales</option>
            <option value='Instituto de Nutricion y Tecnologia de los Alimentos'>Instituto de Nutrici&oacute;n y Tecnolog&iacute;a de los Alimentos</option>
            <option value="Hospital Clinico Universidad de Chile">Hospital Cl&iacute;nico Universidad de Chile</option>
            <option value="Servicios Centrales">Servicios Centrales</option>
            <option value="Federación de Estudiantes de la Universidad de Chile">Federaci&oacute;n de Estudiantes de la Universidad de Chile</option>
            <option value="Centro de Investigación Avanzada en Educacion">Centro de Investigaci&oacute;n Avanzada en Educaci&oacute;n</option>
            <option value="Teatro Universidad de Chile">Teatro Universidad de Chile</option>
            <option value="otro">Otro</option>
          </select>
          <small className='form-text'>
            * Seleccione el lugar en donde se realizará la actividad.
          </small>
        </div>

        <div className='form-group'>
          <DateRangePicker
            startDate={this.state.date_start} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.date_end} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={this.changeDates} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={this.changeFocus} // PropTypes.func.isRequired,
            displayFormat="DD/MM/YYYY"
            startDatePlaceholderText='Desde'
            endDatePlaceholderText='Hasta'
            openDirection={"up"}
            showDefaultInputIcon
            hideKeyboardShortcutsPanel
            block
          />
          <small className='form-text'>
            * Fecha de <b>inicio</b> y <b>t&eacute;rmino</b> de la actividad.
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Descripción de la Actividad'
            name='description'
            value={this.state.descripcion}
            onChange={e => this.onChange(e)}
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
    </Fragment>)
  }
}

AddActivity.propTypes = {
  addActivity: PropTypes.func.isRequired
}

export default connect(
  null,
  { addActivity }
)(AddActivity);
