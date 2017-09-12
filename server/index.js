const express = require('express');
const jsonfile = require('jsonfile');
const cors = require('cors');

const app = express();
app.use(cors());

const flightDataFile = './flight_data.json';
const flightData = jsonfile.readFileSync(flightDataFile);
const airports = jsonfile.readFileSync('./airports.json');

// Add the full airport data to the flight data
const enhancedFlightData = flightData.map(data => {

  // Find the airports full data from the airports JSON file
  const org = airports.find(airport => data.org === airport.iata) || {};
  const dest = airports.find(airport => data.dest === airport.iata) || {};

  // Extend the original flight data and add the names of the airports
  return Object.assign({}, data, { orgName: org.name, destName: dest.name });
});

app.get('/', function(req, res) {
  res.json(enhancedFlightData);
})

app.post('/', function(req, res) {
  var obj = {name: 'JP'};

  jsonfile.writeFile(flightDataFile, obj, function(error) {
    if (error) {
      console.error(error)
      res.json({ error });
    } else {
      res.json({ success: true });
    }
  })
})

const server = app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})

// On server close, also close DB
process.on('SIGINT', () => {
  server.close();
});
