import './App.css';
import {useState} from 'react';
import useFetchData from './components/fetch-data.js'
import SearchBox from './components/search-box.js'
import CityWeatherDetails from './components/city-weather-details.js'

function App() {
    const [searchCity, setSearchCity] = useState("");
    const WEATHER_END_POINT = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`;
    const {data, isLoading, hasError} = useFetchData(WEATHER_END_POINT);

    return (
        <div className="container">
            <h1>Weather</h1>
            <SearchBox setSearchCity={setSearchCity} />
            <CityWeatherDetails data={data} isLoading={isLoading} hasError={hasError} />
        </div>
    );
}

export default App;
