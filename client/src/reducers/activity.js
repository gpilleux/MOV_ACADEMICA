import {
  GET_ACTIVITIES,
  ACTIVITY_ERROR,
  GET_ACTIVITY,
  ADD_ACTIVITY,
  UPDATE_ACTIVITY,
  DELETE_ACTIVITY
} from './types';

const initialState = {
  activites: [],
  activity: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activites: payload,
        loading: false
      };
    default:
      return state;
  }
}
