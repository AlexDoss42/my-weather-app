import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './weather.css';
import { Button, Dimmer, Loader } from 'semantic-ui-react';

function Weather ({ coordinates }) {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
         await navigator.geolocation.getCurrentPosition(function(position) {
           setLat(position.coords.latitude);
           setLong(position.coords.longitude);
         })
     
         await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
           .then(res => res.json())
           .then(result => {
             setData(result)
             console.log(result);
           });
         }
     
         fetchData();
       }, [lat, long]);


    const refresh = () => {
        window.location.refresh();
    }

    return (
      <>
        {(typeof data.main != 'undefined') ? (
        <div className="main">

            <div className='top'>
                <p className="header">{data.name}</p>
                <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
            </div>

            <div className="flex">
                <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                <p className="description">{data.weather[0].main}</p>
            </div>

            <div className="flex">
                <p className="temp">Temprature: {data.main.temp} &deg;C</p>
                <p className="temp">Humidity: {data.main.humidity} %</p>
            </div>

            <div className="flex">
                <p className="sunrise-sunset">Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p className="sunrise-sunset">Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </div>

        </div>) : (
            <div>
              <Dimmer active>
                <Loader>Loading..</Loader>
              </Dimmer>
           </div>
         )}

    </>
    )
}

export default Weather;