import initialState from './initialState';
import {RECEIVE_EVENTS} from '../actions/actionTypes';
import _ from 'lodash';

function duplicates(event, currIndex, list) {
  const index = list.findIndex((ev) => ev.name === event.name);
        if (index === currIndex){
          return true;
        }
        return false;
}

export default function events(state = initialState.events, action) {
  let newStateEvents;
  switch (action.type) {
    case RECEIVE_EVENTS:
      const { payload } = action;
      const { _embedded: { events } } = payload;
      const filteredList = events.filter(duplicates);
      const parsedList = filteredList.map((e) => {
        return {
          name: e.name,
          date: e.dates.start.localDate,
          link: e.url
        }
      });
      // get latest concerts
      const sortedList = _.sortBy(parsedList, 'date');
      newStateEvents = sortedList;
      return newStateEvents;
    default:
      return state;
  }
}