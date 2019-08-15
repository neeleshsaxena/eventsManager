import * as types from './actionTypes';
import * as eventsActions from './fetchEvents';

const URL = 'https://app.ticketmaster.com/discovery/v2/venues.json?countryCode=US&apikey=B0Kd55aIGdvmzNiInGU2a4Cg2JMZJmAj';

export function selectCity({ option }) {
  return dispatch => {
    dispatch({
      type: types.SELECT_CITY,
      payload: option  
    });
    // If city is found, fetch events
    if (option) {
      dispatch(eventsActions.fetchEvents(option));
    }
  }

}

export function fetchCityList() {
  return dispatch => {
    return fetch(URL)
      .then(response => response.json())
      .then(parsedJson => dispatch({
          type: types.POPULATE_CITIES,
          payload: parsedJson
      }));
    };
}