import * as types from './actionTypes';

const url = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&ID=47&apikey=B0Kd55aIGdvmzNiInGU2a4Cg2JMZJmAj';

export function receiveEvents(events) {
    return {
        type: types.RECEIVE_EVENTS,
        payload: events
    };
  }
export function fetchEvents() {
  return dispatch => {
    return fetch(url)
    .then(response => response.json())
    .then(events => dispatch(receiveEvents(events)));
  };
}

