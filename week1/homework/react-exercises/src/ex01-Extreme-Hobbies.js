
function HobbyList() {
    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

    return (
        <div>
            {hobbies.map(hobby => {
                return <Hobby hobby={hobby} />
            })}
        </div>
    );
}

const Hobby = ({hobby}) => <h1>{hobby}</h1>;

export default HobbyList;