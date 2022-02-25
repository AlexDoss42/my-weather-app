import './App.css';
import React from 'react';
import Weather from './components/Weather';


function App() {

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
       </div>
     )}
 </div>
  );
}

export default App;
