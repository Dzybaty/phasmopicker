import { combineReducers } from 'redux';

import app from './app';
import picker from './picker';
import loader from './loader';

export default combineReducers({
  app,
  picker,
  loader,
});
