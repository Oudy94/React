import React from 'react';

function HobbyList() {
    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

    return (
        <div>
            {hobbies.map(hobby => {
                return <Hobbies hobby={hobby} />
            })}
        </div>
    );
}

function Hobbies({hobby}) {
    return (
        <div>
            <h1>{hobby}</h1>
        </div>
    );
}

export default HobbyList;