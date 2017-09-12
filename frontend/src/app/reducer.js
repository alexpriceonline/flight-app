import {
  APP_LOADING,
  SET_FLIGHT_DATA,
  SET_AIRPORT_DATA,
  SET_AVAILABLE_ORGS,
} from './constants';

const initalState = {
  loading: true,
  flightData: [],
  airportData: [],
  availableOrgs: [],
};

const reducer = function(state = initalState, action = {}) {
  switch (action.type) {

    case APP_LOADING:
      return { ...state, loading: action.state };

    case SET_FLIGHT_DATA:
      return { ...state, flightData: action.data };

    case SET_AIRPORT_DATA:
      return { ...state, airportData: action.data };

    case SET_AVAILABLE_ORGS:
      return { ...state, availableOrgs: action.data };

    default:
      return state;
  }
};

export default reducer;
