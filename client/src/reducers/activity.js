import {
  GET_ACTIVITIES,
  ACTIVITY_ERROR,
  GET_ACTIVITY,
  ADD_ACTIVITY,
  UPDATE_ACTIVITY,
  DELETE_ACTIVITY,
  GET_VISITORS_IN_ACTIVITY
} from './types';

const initialState = {
  activites: [],
  activity: null,
  visitors: [],
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
    case GET_ACTIVITY:
      return {
        ...state,
        activity: payload,
        loading: false
      };
    case ADD_ACTIVITY:
      return {
        ...state,
        activites: [payload, ...state.activities],
        loading: false
      };
    // funciona??? TODO Probar
    case UPDATE_ACTIVITY:
      return {
        ...state,
        activites: state.activites.map(activity =>
          activity._id === payload.id ? payload.activity : activity
        ),
        loading: false
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          activity => activity._id !== payload
        ),
        loading: false
      };
    case GET_VISITORS_IN_ACTIVITY:
      return {
        ...state,
        visitors: payload,
        loading: false
      };
    case ACTIVITY_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
}
