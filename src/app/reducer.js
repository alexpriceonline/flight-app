import flightData from '../flight_data.json';
import airports from '../airports.json';
// import { } from './constants';

// Add the full airport data to the flight data
const enhancedFlightData = flightData.map(data => {
  const org = airports.find(
    airport => data.org === airport.iata
  ) || { iata: data.org, name: '' };
  const dest = airports.find(
    airport => data.dest === airport.iata
  ) || { iata: data.dest, name: '' };
  return { org, dest };
});

const initalState = {
  flightData: enhancedFlightData,
};

const reducer = function(state = initalState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
