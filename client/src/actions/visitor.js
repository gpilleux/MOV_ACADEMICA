import axios from 'axios';
import setAlert from './alert';

import {
  VISITOR_ERROR,
  GET_VISITORS,
  GET_VISITOR,
  UPDATE_VISITOR,
  ADD_VISITOR,
  DELETE_VISITOR,
} from './types';

export const getVisitors = () => async dispatch => {
  try {
    const res = await axios.get('api/visitor');

    dispatch({
      type: GET_VISITORS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: VISITOR_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

export const getVisitor = (id) => async dispatch => {
  try {
    const res = await axios.get(`api/visitor/${id}`);

    dispatch({
      type: GET_VISITOR,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: VISITOR_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

export const addVisitor = (formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('api/visitor/', formData, config);

    dispatch({
      type: ADD_VISITOR,
      payload: res.data
    })
  } catch (err) {

    const errors = err.response.data.errors;

    if(error) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: VISITOR_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

export const updateVisitor = (formData,id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(`api/visitor/${id}`, formData, config);

    dispatch({
      type: UPDATE_VISITOR,
      payload: res.data
    })
  } catch (err) {

    const errors = err.response.data.errors;

    if(error) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: VISITOR_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

export const deleteVisitor = (id) => async dispatch => {
  try {
    const res = await axios.delete(`api/visitor/${id}`);

    dispatch({
      type: DELETE_VISITOR,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: VISITOR_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}