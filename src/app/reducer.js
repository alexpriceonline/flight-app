import flightData from '../flight_data.json';
import airports from '../airports.json';
// import { } from './constants';

// Create a set to hold the airports in use
const availableOrgs = new Set();

// Add the full airport data to the flight data
const enhancedFlightData = flightData.map(data => {

  // Find the full airport data
  const org = airports.find(
    airport => data.org === airport.iata
  ) || { iata: data.org, name: '' };
  const dest = airports.find(
    airport => data.dest === airport.iata
  ) || { iata: data.dest, name: '' };

  // Add the org to the set
  availableOrgs.add(data.org);

  return { org, dest };
});

const initalState = {
  flightData: enhancedFlightData,
  availableOrgs: [...availableOrgs].sort(), // to array and sort
};

const reducer = function(state = initalState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
