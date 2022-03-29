import './App.css';
import React, { useEffect, useState } from 'react';
import Weather from './components/Weather';

function App() {

  const [localLat, setLocalLat] = useState([]);
  const [localLong, setLocalLong] = useState([]);
  const [coordinatesArr, setCoordinatesArr] = useState([]);
  const [data, setData] = React.useState(null);

  useEffect(() => {
    fetch("/api").then((res) => res.json()).then((data) => {
      setData(data.message)
    }).catch(error => console.log(error.message));
  }, []);

  useEffect(() => {
     navigator.geolocation.getCurrentPosition(function(position) {
       setLocalLat(position.coords.latitude);
       setLocalLong(position.coords.longitude);
     })

     setCoordinatesArr([
       {
         name: 'local Weather',
         lat: localLat,
         long: localLong
       },
       {
         name: 'Snow Bird',
         lat: 40.5829,
         long: -111.6556
       },
       {
         name: 'Deer Valley',
         lat: 40.6374,
         long: -111.4783
       },
       {
         name: 'Brighton',
         lat: 40.6038,
         long: -111.5821
       },
       {
         name: 'Big Sky',
         lat: 45.2618,
         long: -111.3080
       }
     ])

   }, [localLat, localLong]);


  return (
    <div className="App">
      <p>{!data ? "Loading..." : data}</p>            
      {
        coordinatesArr.map((coordinates) => {
          return (
            <Weather coordinates={coordinates} key={coordinates.name} />
          )
        })
      }
    </div>
  );
}

export default App;
