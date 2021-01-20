import React from 'react';
import './App.css';
import cities from "./city-weather"; 

function App() {
    return (
        <div className="container">
            <h1>{"Weather"}</h1>

            {cities.map(cityInfo => {
                return <CityList
                        cityName={cityInfo.name }
                        countryName={cityInfo.sys.country}
                        weatherMain={cityInfo.weather[0].main}
                        weatherDescription={cityInfo.weather[0].description}
                        maxTemperature={cityInfo.main.temp_max}
                        minTemperature={cityInfo.main.temp_min}
                        locationLongitude={cityInfo.coord.lon}
                        locationLattitude={cityInfo.coord.lat}
                    />
            })}
        </div>
    );
}

function CityList({cityName, countryName, weatherMain, weatherDescription, maxTemperature, minTemperature, locationLongitude, locationLattitude}) {
    return (
        <div className="city-card">
            <div className="card-padding">
                <h2>{cityName + ", "} {countryName}</h2>
            </div>
            <div className="card-padding">
                <h3>{weatherMain}</h3>
                <h4>{weatherDescription}</h4>
            </div>
            <div className="card-padding">
                <h4>{"Max temp: " + maxTemperature}</h4>
                <h4>{"Min temp: " + minTemperature}</h4>
            </div>
            <div className="card-padding">
                <h4>{"Location: " + locationLongitude + ", " + locationLattitude}</h4>
            </div>
        </div>
    );
}

export default App;
