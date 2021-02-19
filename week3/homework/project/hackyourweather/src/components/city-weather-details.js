import loadingImage from '../images/loading.gif';
import {useState, useEffect} from 'react';

function CityWeatherDetails({data, isLoading, hasError, setSearchCityName}) {
    const [citiesData, setCitiesData] = useState([]);

    const removeCity = name => {
        setCitiesData(prevData => prevData.filter(data => data.name !== name));
        setSearchCityName("");
    }

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            setCitiesData(prevData => [data, ...prevData]);
        }
    }, [data]);

    if (hasError) {
        return <h2>Something went wrong...</h2>
    }

    return (
        <div>
        {isLoading && <img src={loadingImage} alt="loading" className="loading-img" />}
        {citiesData.length > 0 ?
            citiesData.map((cityData,index) => {
                return(
                    <div className="city-card" key={index}>
                        <button className="close-container" onClick={() => removeCity(cityData.name)}>
                            <div className="leftright"></div>
                            <div className="rightleft"></div>
                        </button>
                        <div className="card-section">
                            <h2>{cityData.name}, {cityData.sys.country}</h2>
                        </div>
                        <div className="card-section">
                            <h3>{cityData.weather[0].main}</h3>
                            <h4>{cityData.weather[0].description}</h4>
                        </div>
                        <div className="card-section">
                            <h4>Max temp: {cityData.main.temp_max}</h4>
                            <h4>Min temp: {cityData.main.temp_min}</h4>
                        </div>
                        <div className="card-section">
                            <h4>Location: {cityData.coord.lon}, {cityData.coord.lat}</h4>
                        </div>
                    </div>
                )
            })
            : !isLoading && <h2>Enter a city name..</h2>
        }
        </div>
    );
}

export default CityWeatherDetails;
