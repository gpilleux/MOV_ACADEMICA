import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

const CreateVisitor = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    birthday: '',
    email: '',
    nationality: ''
  });

  const { name, gender, birthday, email, nationality } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    //createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Crear Visitante</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Ingresa los datos para identificar al
        visitante
      </p>
      <small>* = campo obligatorio</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Nombre'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>* Nombre o raz&oacute;n social</small>
        </div>
        <div className='form-group'>
          <select name='gender' value={gender} onChange={e => onChange(e)}>
            <option value='0'>* Selecciona g&eacute;nero</option>
            <option value='Developer'>Masculino</option>
            <option value='Junior Developer'>Femenino</option>
            <option value='Senior Developer'>Otro</option>
          </select>
        </div>
        <div className='form-group'>
          <input
            type='date'
            placeholder='Fecha de nacimiento'
            name='birthday'
            value={birthday}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>* Fecha de nacimiento</small>
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='contacto@institucion.com'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            * Una forma de contactar al invitado
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Nacionalidad'
            name='nationality'
            value={nationality}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>* Nacionalidad principal</small>
        </div>

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/all-visitors'>
          Volver
        </Link>
      </form>
    </Fragment>
  );
};

/*
CreateVisitor.propTypes = {
  CreateVisitor: PropTypes.func.isRequired
};
*/

export default withRouter(CreateVisitor);
