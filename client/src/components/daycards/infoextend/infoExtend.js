import React from 'react';
import './infoextend.css';
import {FiWind} from 'react-icons/fi';
import {BiDroplet} from 'react-icons/bi';

const infoextend = ({ humidity, wind }) => {
    return (
        <div className="weather__infoextend">
            <div className="weather__infoextend-container">
                <div className="weather__infoextend-text">
                    <p>&nbsp;&nbsp;<BiDroplet/>{humidity}</p>
                    <p>&nbsp;&nbsp;<FiWind/>{wind}</p>
                </div>
            </div>

        </div>
    );
}

export default infoextend;