import {
  ADD_VISITOR_TO_VISIT,
  DELETE_VISITOR_IN_VISIT,
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
    case ADD_VISITOR_TO_VISIT:
      return {
        ...state,
        visit: payload,
        loading: false
      };
    case DELETE_VISITOR_IN_VISIT:
      return {
        ...state,
        visit: payload,
        loading: false
      };
    case VISIT_ERROR:
      return {
        ...state,
        visit: payload,
        loading: false
      }
    }
  }