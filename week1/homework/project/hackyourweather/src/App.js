import React from 'react';
import './App.css';
import citiesWeather from "./city-weather";

import Cities from "./Cities"; 

function App() {
    return (
        <Cities citiesWeather={citiesWeather}/>
    );
}

export default App;
