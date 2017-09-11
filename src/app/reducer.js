import flightData from '../flight_data.json';
// import { } from './constants';

const initalState = {
  flightData,
};

const reducer = function(state = initalState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
