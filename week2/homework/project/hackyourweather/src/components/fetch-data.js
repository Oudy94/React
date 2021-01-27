import {useEffect, useState, useRef} from 'react';

function useFetchData(url) {

    const [data, setData] = useState({});
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current){
            async function fetchData() {
                setIsLoading(true);
                setHasError(false);
                try {
                    const response = await fetch(url);
                    if (response.ok){
                        const data = await response.json();
                        setData(data);
                    }
                    else{
                        throw Error("Error fetching posts!");
                    }
                }
                catch (error) {
                    setHasError(true);
                }
                finally{
                    setIsLoading(false);
                }
            }
            fetchData();
        }
        else{
            didMount.current = true;
        }
    }, [url]);

    return {data, isLoading, hasError}
}

export default useFetchData;
