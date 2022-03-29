const path = require('path');
const express = require('express');
const axios = require('axios');
const PORT = process.env.PORT || 3001;
const app = express();
require('dotenv').config();

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    console.log(1234, 'Server hit!')
    res.json("hellos world!")
//   res.json({ message: "Hello from server!" });
});

// Get a location

const params = {
  access_key: process.env.GEOCODING_ACCESS_KEY,
  query: '1600 Pennsylvania Ave NW'
}

axios.get("http://api.positionstack.com/v1/forward", {params}).then(response => {
  console.log(response.data);
}).catch(error => {
  console.log(error);
});

// Add location to list

// Delete location from list

// query weather at all of your locations


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`ITS WORKING!!!! ITS WORKING!!!! ${PORT}`);
});