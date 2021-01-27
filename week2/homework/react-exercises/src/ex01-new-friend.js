import {useEffect, useState} from 'react';
import loadingImage from './img/loading.gif';

function Friend() {
    const END_POINT = 'https://www.randomuser.me/api?results=1';
 
    const [friend, setFriend] = useState({});
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function getFriend(){
        try {
            setIsLoading(true);
            const response = await fetch(END_POINT);
            if (response.ok){
                const data = await response.json();
                setFriend(data.results[0]);
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
            <Button getFriend={getFriend} />
            {Object.keys(friend).length > 0 && <FriendProfile friend={friend} hasError={hasError} isLoading={isLoading} />}
        </div>
    );
}

function FriendProfile({friend, hasError, isLoading}) {

    if (hasError) {
        return <h2>Something went wrong...</h2>
    }
    
    if (isLoading) {
        return <img src={loadingImage} alt="loading" className="loading-img" style={{marginTop:"60px"}} />
    }

    return (
        <div className="list-container middle">
            <ul>
                <li>Name: {friend.name.first} {friend.name.last}</li>
                <li>Address: {friend.location.street.number} {friend.location.street.name}, {friend.location.city}, {friend.location.state} {friend.location.postcode}</li>
                <li>Country: {friend.location.country}</li>
                <li>Email: {friend.email}</li>
                <li>phone number: {friend.phone}</li>
            </ul>
        </div>
    );
}

function Button({getFriend}) {
    return (
        <div className="topnav">
            <button onClick={getFriend}>Get a friend!</button>
        </div>
    );
}

export default Friend;
