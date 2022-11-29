import React from 'react';
import { InfoHours } from './index';
import './hourcards.css'; 
import '../hourcards/info/infohours.css';


const HourCards = ({ icons,feels_like, desc,windspeed,humidity}) => {
    return (
        <div className="weather_hourcards">
        <div className="weather__hourcards-container">

            <div className="weather__hourcards-info">
                <img src={`weather/${icons}.png`} alt="icon" />
                <div className="weather__hourcards-info-text">
                    <InfoHours feels_like1={feels_like} desc1={desc} windspeed1={windspeed} humidity1={humidity}/>
                </div>
            </div>
        </div>
    </div >
    );
}

export default HourCards;