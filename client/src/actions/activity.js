import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_ACTIVITIES,
  ACTIVITY_ERROR,
  GET_ACTIVITY,
  ADD_ACTIVITY,
  UPDATE_ACTIVITY,
  DELETE_ACTIVITY,
  GET_VISITORS_IN_ACTIVITY
} from './types';

// Get Activities
export const getActivities = () => async dispatch => {
  try {
    const res = await axios.get('api/activites');

    dispatch({
      type: GET_ACTIVITIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ACTIVITY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get Activity
export const getActivity = activity_id => async dispatch => {
  try {
    const res = await axios.get(`/api/activity/${activity_id}`);

    dispatch({
      type: GET_ACTIVITY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ACTIVITY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Activity
export const addActivity = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/activity', formData, config);

    dispatch({
      type: ADD_ACTIVITY,
      payload: res.data
    });

    dispatch(setAlert('Actividad Creada', 'success'));
  } catch (err) {
    dispatch({
      type: ACTIVITY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Update Activity
export const updateActivity = (formData, activity_id) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.put(
      `/api/activity/${activity_id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_ACTIVITY,
      payload: res.data
    });

    dispatch(setAlert('Actividad Actualizada', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: ACTIVITY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Activity
export const deleteActivity = activity_id => async dispatch => {
  try {
    const res = await axios.delete(`/api/activity/${activity_id}`);

    dispatch({
      type: DELETE_ACTIVITY,
      payload: res.data
    });
    dispatch(setAlert('Actividad Eliminada', 'success'));
  } catch (err) {
    dispatch({
      type: ACTIVITY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all Visitors from Activity
export const getVisitors = activity_id => async dispatch => {
  try {
    const res = await axios.get(`api/visitors/${activity_id}`);
    dispatch({
      type: GET_VISITORS_IN_ACTIVITY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ACTIVITY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
