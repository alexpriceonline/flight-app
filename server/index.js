const express = require('express');
const jsonfile = require('jsonfile');
const cors = require('cors');

const app = express();
app.use(cors());

// This map will hold the airports and the number of
// flights they appear in
let airportsByAppearance = new Map();
const flightDataFile = './flight_data.json';

// Read the JSON files
const flightData = jsonfile.readFileSync(flightDataFile);
const airports = jsonfile.readFileSync('./airports.json');

// Add the full airport data to the flight data
const enhancedFlightData = flightData.map(data => {

  // Find the airports full data from the airports JSON file
  const org = airports.find(airport => data.org === airport.iata) || {};
  const dest = airports.find(airport => data.dest === airport.iata) || {};

  // 
  if (airportsByAppearance.has(data.org)) {
    const num = airportsByAppearance.get(data.org);
    airportsByAppearance.set(data.org, num + 1);
  } else {
    airportsByAppearance.set(data.org, 1);
  }

  if (airportsByAppearance.has(data.dest)) {
    const num = airportsByAppearance.get(data.dest);
    airportsByAppearance.set(data.dest, num + 1);
  } else {
    airportsByAppearance.set(data.dest, 1);
  }

  // Extend the original flight data and add the names of the airports
  return Object.assign({}, data, { orgName: org.name, destName: dest.name });
});

// Convert to array
airportsByAppearance = [...airportsByAppearance.entries()];

// Sort (highest appearance first)
airportsByAppearance = airportsByAppearance.sort((a, b) => b[1] - a[1]);

app.get('/', function(req, res) {
  res.json({
    flights: enhancedFlightData,
    airports: airportsByAppearance
  });
});

// TODO
app.post('/flights', function(req, res) {
  var obj = {name: 'JP'};

  jsonfile.writeFile(flightDataFile, obj, function(error) {
    if (error) {
      console.error(error)
      res.json({ error });
    } else {
      res.json({ success: true });
    }
  })
});

const server = app.listen(3001, function() {
  console.log('Example app listening on port 3001!')
});

// On server close, also close DB
process.on('SIGINT', () => {
  server.close();
});
