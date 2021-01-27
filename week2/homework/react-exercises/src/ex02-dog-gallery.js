import {useState} from 'react';
import loadingImage from './img/loading.gif';

function DogGallery() {
    const END_POINT = 'https://dog.ceo/api/breeds/image/random';

    const [dogPhotos, setDogPhotos] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    async function getDogPhoto(){
        try {
            setIsLoading(true);
            const response = await fetch(END_POINT);
            if (response.ok){
                const data = await response.json();
                //the setState in hooks will over-ride, hence we had to add all prevous photos and we also add the square brackets [] for the array.
                setDogPhotos((prevPhoto)=> [...prevPhoto, data.message]);
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

    return (
        <div>
            <Button getDogPhoto={getDogPhoto} />
            {<DogPhoto dogPhotos={dogPhotos} hasError={hasError} isLoading={isLoading}/>}
        </div>
    );
}

function DogPhoto({dogPhotos, hasError, isLoading}) {

    if (hasError) {
        return <h2>Something went wrong...</h2>
    }
    
    if (isLoading) {
        return <img src={loadingImage} alt="loading" className="loading-img" style={{marginTop:"60px"}} />
    }

    return (
        <div className="list-container">
            {Object.keys(dogPhotos).length > 0 ?
                /* pass the index to the photo key to ensure not duplicate the key */
                dogPhotos.map((photo, index) => <img src={photo} alt={index} key={index} />)
            :<h1>Get your first dog by clicking the button!</h1>}
        </div>
    );

}

function Button({getDogPhoto}) {
    return (
        <div className="topnav">
            <button onClick={getDogPhoto}>Get a dog!</button>
        </div>
    );
}

export default DogGallery;
