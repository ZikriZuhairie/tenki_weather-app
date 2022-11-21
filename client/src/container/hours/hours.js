import React from 'react';
import { DayCards } from '../../components';
import '../days/days.css';


const hoursContainer = () => {
    return (
        <div className="weather__days">
            <div className="weather__days-container">
                <DayCards temp1="32°C" feels_like1="Mostly Cloudy" windspeed1="10 km/h" humidity1="54%"/>
                <p>9 AM</p>
                <DayCards temp1="32°C" feels_like1="Mostly Cloudy" windspeed1="10 km/h" humidity1="54%"/>
                <p>10 AM</p> 
                <DayCards temp1="32°C" feels_like1="Mostly Cloudy" windspeed1="10 km/h" humidity1="54%"/>
                <p>11 AM</p> 
                <DayCards temp1="32°C" feels_like1="Mostly Cloudy" windspeed1="10 km/h" humidity1="54%"/>
                <p>12 AM</p>
            </div>
        </div>
    );
}


export default hoursContainer;