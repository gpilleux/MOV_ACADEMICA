import {
  VISITOR_ERROR,
  GET_VISITORS,
  GET_VISITOR,
  UPDATE_VISITOR,
  ADD_VISITOR,
  DELETE_VISITOR,
} from './types';

const initialState = {
  visitors: [],
  visitor: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_VISITOR:
      return {
        ...state,
        visitors: [payload, ...state],
        loading: false
      };
    case GET_VISITOR:
      return {
        ...state,
        visitor: payload,
        loading: false
      };
    case GET_VISITORS:
        return {
          ...state,
          visitors: [...payload],
          loading: false
        };
    case UPDATE_VISITOR:
      return {
        ...state,
        visitors: state.visitors.map(visitor => visitor._id == payload.id ? payload : visitor),
        loading: false
      };
    case DELETE_VISITOR:
      return {
        ...state,
        visitors: state.visitors.filter(
          visitor => visitor._id !== payload
        ),
        loading: false
      };
    case VISITOR_ERROR:
      return { 
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
