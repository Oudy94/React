import {useState} from 'react';

function SearchBox({setSearchCity}) {

    const [cityName, setCityName] = useState("")

    function handleSubmit(event){
        event.preventDefault();
        setSearchCity(cityName);
    }

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search city..." name="search" value={cityName} onChange={event => setCityName(event.target.value)} />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    );
}

export default SearchBox;
