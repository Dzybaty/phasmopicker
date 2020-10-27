import { combineReducers } from 'redux';

import app from './app';
import picker from './picker';

export default combineReducers({
  app,
  picker,
});
