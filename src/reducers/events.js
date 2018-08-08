import initialState from './initialState';
import {RECEIVE_EVENTS} from '../actions/actionTypes';

export default function events(state = initialState.events, action) {
  let newStateEvents;
  switch (action.type) {
    case RECEIVE_EVENTS:
      const { payload } = action;
      const { _embedded: { events } } = payload;
      newStateEvents = events;
      return newStateEvents;
    default:
      return state;
  }
}