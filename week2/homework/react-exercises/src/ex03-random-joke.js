import {useState, useEffect } from 'react';
import loadingImage from './img/loading.gif';

function RandomJoke() {
    const END_POINT = 'https://official-joke-api.appspot.com/random_joke';
 
    const [joke , setJoke] = useState({});
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function getFriend(){
        try {
            setIsLoading(true);
            const response = await fetch(END_POINT);
            if (response.ok){
                const data = await response.json();
                setJoke(data);
            }
            else{
                throw Error("Error fetching!");
            };
        }
        catch (error) {
            setHasError(true);
        }
        finally{
            setIsLoading(false);
        }
    };

    useEffect(()=>{
        getFriend();
    }, []);

    return (
        <div>
            <Joke joke={joke} isLoading={isLoading} hasError={hasError}/>
        </div>
    );
}

function Joke({joke, isLoading, hasError}) {

    if (hasError) {
        return <h2>Something went wrong...</h2>
    }

    if (isLoading) {
        return <img src={loadingImage} alt="loading" className="loading-img"  />
    }

    return (
        <div>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
        </div>
    );
}

export default RandomJoke;
