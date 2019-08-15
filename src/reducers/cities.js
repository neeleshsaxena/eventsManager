import initialState from './initialState';
import {SELECT_CITY, POPULATE_CITIES} from '../actions/actionTypes';

function extractNames(action) {
  const { payload: { _embedded: { venues } }} = action;
  return venues.map((v) => v.city).map((c) => c.name);
}

export default function selectCity(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SELECT_CITY:
      const { payload } = action;
      newState = {
        ...state,
        selectedCity: payload
      };
      return newState;
    case POPULATE_CITIES:
      const list = extractNames(action)
      newState = {
          ...state,
          cityList: list
      };
      return newState;
    default:
      return state;
  }
}