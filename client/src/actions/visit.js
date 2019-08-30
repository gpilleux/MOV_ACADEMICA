import axios from 'axios';
import setAlert from './alert';

import {
  ADD_VISITOR_TO_VISIT,
  DELETE_VISITOR_IN_VISIT,
  GET_VISITORS_IN_VISIT,
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
      type: ADD_VISITOR_TO_VISIT,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: VISIT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// visitor id in formData
export const deleteVisit = (formData, id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.delete(`api/visit/${id}`, formData, config);
    dispatch({
      type: DELETE_VISITOR_IN_VISIT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: VISIT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
