import React from 'react';
import moment from 'moment';
import './weather.css';

function Weather ({ weatherData }) {

    return (
        <div className="main">
        <p className="header">{weatherData.name}</p>
        <div>
          <p className="day">Day: {moment().format('dddd')}</p>
        </div>
  
        <div>
          <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
        </div>
        
    </div>
    )
}

export default Weather;