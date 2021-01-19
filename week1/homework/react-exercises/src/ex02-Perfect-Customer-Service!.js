import React from 'react';
import './App.css';

function Guarantee({img, title, description}) {
    return (
        <div className="guarantee-item">
            <img src={img} alt={title} height="60px"></img>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default Guarantee;