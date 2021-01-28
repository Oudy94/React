function Cities({citiesWeather}) {
    return (
        <div className="container">
            <h1>{"Weather"}</h1>

            {citiesWeather.map(cityInfo => {
                return <CityList cityInfo={cityInfo } />
            })}
        </div>
    );
}

function CityList({ cityInfo }) {
    const {name, sys, weather, main, coord} = cityInfo;

    return (
        <div className="city-card">
            <div className="card-padding">
                <h2>{name}, {sys.country}</h2>
            </div>
            <div className="card-padding">
                <h3>{weather[0].main}</h3>
                <h4>{weather[0].description}</h4>
            </div>
            <div className="card-padding">
                <h4>Max temp: {main.temp_max}</h4>
                <h4>Min temp: {main.temp_min}</h4>
            </div>
            <div className="card-padding">
                <h4>Location: {coord.lon}, {coord.lat}</h4>
            </div>
        </div>
    );
}

export default Cities;