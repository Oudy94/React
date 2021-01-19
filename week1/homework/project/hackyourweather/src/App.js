import React from 'react';
import './App.css';
import cities from "./city-weather"; 

function App() {
    return (
        <div className="container">
            <h1>{"Weather"}</h1>
            {cities.map(cityInfo => {
                return [
                    <div key={cityInfo.name} className="city-card">
                        <h2><CityList cityName={cityInfo.name} /></h2>
                        <CityList countryName={cityInfo.sys.country} />
                        <CityList weatherMain={cityInfo.weather[0].main} />
                        <CityList weatherDescription={cityInfo.weather[0].description} />
                        <CityList maxTemperature={cityInfo.main.temp_max} />
                        <CityList minTemperature={cityInfo.main.temp_min} />
                        <CityList locationLongitude={cityInfo.coord.lon} />
                        <CityList locationLattitude={cityInfo.coord.lat} />
                    </div>
                ]
            })}
        </div>
    );
}

function CityList({cityName, countryName, weatherMain, weatherDescription, maxTemperature, minTemperature, locationLongitude, locationLattitude}) {
    return (
        <div>
            {cityName}
            {countryName}
            {weatherMain}
            {weatherDescription}
            {maxTemperature}
            {minTemperature}
            {locationLongitude}
            {locationLattitude}
        </div>
    );
}

export default App;
