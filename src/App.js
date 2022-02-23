import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  console.log('its kinda working');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    })
    console.log('its working')
    console.log("latitude is: ", lat);
    console.log("longitude is: ", long);
  }, [lat, long]);

  return (
    <div className="App">
      hello world!
    </div>
  );
}

export default App;
