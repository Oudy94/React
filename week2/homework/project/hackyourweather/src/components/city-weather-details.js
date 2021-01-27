import loadingImage from '../images/loading.gif';

function CityWeatherDetails({data, isLoading, hasError}) {
    const {name, sys, weather, main, coord} = data;

    if (hasError) {
        return <h2>Something went wrong...</h2>
    }
    
    if (isLoading) {
        return <img src={loadingImage} alt="loading" className="loading-img" />
    }

    return (
        <div>
            {Object.keys(data).length > 0 ?
                <div className="city-card">
                    <div className="card-padding">
                        <h2>{name}, {sys.country}</h2>
                    </div>
                    <div className="card-padding">
                        <h3>{weather[0].main}</h3>
                        <h4>{weather[0].description}</h4>
                    </div>
                    <div className="card-padding">
                        <h4>{"Max temp: " + main.temp_max}</h4>
                        <h4>{"Min temp: " + main.temp_min}</h4>
                    </div>
                    <div className="card-padding">
                        <h4>{"Location: " + coord.lon + ", " + coord.lat}</h4>
                    </div>
                </div>
            : <h2>Enter a city name..</h2>}
        </div>
    );
}

export default CityWeatherDetails;
