import {
  ADD_VISIT,
  GET_VISIT,
  UPDATE_VISIT,
  DELETE_VISIT,
  VISIT_ERROR
} from '../actions/types';

const initialState = {
  visits: [],
  visit: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_VISIT:
      return {
        ...state,
        visits: [payload, ...state.visits],
        loading: false
      };
    case GET_VISIT:
      return {
        ...state,
        visit: payload,
        loading: false
      };
    case UPDATE_VISIT:
      return {
        ...state,
        visits: state.visits.map(visit => visit._id == payload.id ? payload : visit),
        loading: false
      };
    case DELETE_VISIT:
      return {
        ...state,
        visits: state.visits.filter(visit => visit._id !== payload),
        loading: false
      };
    case VISIT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state;
    }
  }