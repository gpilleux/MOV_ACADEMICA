import axios from 'axios';
import {
  ADD_VISITOR_TO_VISIT,
  DELETE_VISITOR_IN_VISIT,
  GET_VISITORS_IN_VISIT,
  VISIT_ERROR
} from './types';

export const addVisit = (formData) => async dispatch => {
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
    })
  } catch (err) {
    dispatch({
      type: VISIT_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

// visitor id in formData
export const deleteVisit = (formData,id) => async dispatch => {
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
    })
  } catch (err) {
    dispatch({
      type: VISIT_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

export const getVisits = (id) => async dispatch => {
  try {
    const res = await axios.get(`api/visit/${id}`);
    dispatch({
      type: GET_VISITORS_IN_VISIT,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: VISIT_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}