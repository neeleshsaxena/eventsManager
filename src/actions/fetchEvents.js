import * as types from './actionTypes';

// const url = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&ID=47&apikey=B0Kd55aIGdvmzNiInGU2a4Cg2JMZJmAj';
const URL = 'https://app.ticketmaster.com/discovery/v2/events.json?';
const key = 'apikey=B0Kd55aIGdvmzNiInGU2a4Cg2JMZJmAj';
const classification = 'classificationName=music';

function formURL(city) {
  // encode city
  const cityParam = encodeURI(city);
  return `${URL}${key}&${classification}&city=${cityParam}`;
}

export function receiveEvents(events) {
    return {
        type: types.RECEIVE_EVENTS,
        payload: events
    };
  }
export function fetchEvents(city) {
  return dispatch => {
    const url = formURL(city);
    return fetch(url)
    .then(response => response.json())
    .then(events => dispatch(receiveEvents(events)));
  };
}

