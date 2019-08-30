import axios from 'axios';
import setAlert from './alert';

import {
  ADD_VISIT,
  GET_VISIT,
  UPDATE_VISIT,
  DELETE_VISIT,
  VISIT_ERROR
} from './types';

// Add Visitor to Activity
export const addVisit = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('api/visit/', formData, config);

    dispatch({
      type: ADD_VISIT,
      payload: res.data
    });
  } catch (err) {

    const errors = err.response.data.errors;

    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: VISIT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getVisit = (visit_id) => async dispatch => {
  try {
    const res = await axios.get(`api/visit/${visit_id}`);
    dispatch({
      type: GET_VISIT,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: VISIT_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

export const updateVisit = (formData,visit_id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(`api/visit/${visit_id}`, formData, config);

    dispatch({
      type: UPDATE_VISIT,
      payload: res.data
    });
  } catch (err) {

    const errors = err.response.data.errors;

    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: VISIT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const deleteVisit = (formData, visit_id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.delete(`api/visit/${visit_id}`, formData, config);
    dispatch({
      type: DELETE_VISIT,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: VISIT_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}