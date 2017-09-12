export default flightData => {

  // Create a set to hold the airports in use
  const availableOrgs = new Set();
  flightData.map(flight => availableOrgs.add(flight.org));

  // Convert to array and sort
  return [...availableOrgs].sort();
};
