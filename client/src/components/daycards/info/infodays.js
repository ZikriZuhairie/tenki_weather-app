import React from 'react';
import './infodays.css';

const infodays = ({ temp_high, temp_low }) => {
    return (
        <div className="weather__infodays">
            <div className="weather__infodays-container">
                <div className="weather__infodays-text">


                    <p>{temp_high}</p>
                    <p>{temp_low}</p>

                </div>
            </div>

        </div>
    );
}

export default infodays;