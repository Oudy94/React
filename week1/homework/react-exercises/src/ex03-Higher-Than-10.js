import React, { useState } from 'react';

function Counter() {
    // we pass the state value in useState hook as a function to not get called every time we run the function (Performance).
    // ;because the function passed in the useState will only get run once the component renders.
    const [count, setCount] = useState(()=> {
        return 0;
    });

    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

    return (
        <div>
            <Button setCount={setCount} />
            <Count count={count} />
            <h1>{feedback}</h1>
        </div>
    );
}

function Count({count}) {
    return (
        <div>
            <br />
            {count}
        </div>
    );
}

function Button({setCount}) {

    function increament(){
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <button onClick={increament}>Add 1!</button>
        </div>
    );
}

export default Counter;