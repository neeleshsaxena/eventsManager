import {combineReducers} from 'redux';
import events from './events';
import cities from './cities';

const rootReducer = combineReducers({
  events,
  cities
});

export default rootReducer;