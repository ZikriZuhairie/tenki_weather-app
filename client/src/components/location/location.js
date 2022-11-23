import React from 'react';
import './location.css';

const location = ({location}) => {
    return ( 
        <div className="weather__location-text">
            <h1>{location.city_name}</h1>
        </div>
     );
}
 
export default location;