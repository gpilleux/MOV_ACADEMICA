import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import activity from './activity';
import visitor from './visitor';
import visit from './visit';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  activity,
  visitor,
  visit
});
