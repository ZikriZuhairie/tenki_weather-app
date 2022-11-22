import React from 'react';
import './infohours.css'; //Calling for CSS file

const InfoHours = ({ temp1,feels_like1,humidity1,windspeed1 }) => {
    return (
        <div className="weather__infohours">
            <div className="weather__infohours-container">
                <div className="weather__infohours-text">

                    <p>{temp1}</p>
                    <p>{feels_like1}</p>
                    <p>{windspeed1}</p>
                    <p>{humidity1}</p>


                </div>
            </div>

        </div>
    );
}

export default InfoHours;