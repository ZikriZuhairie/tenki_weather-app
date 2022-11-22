import React from 'react';
import { HourCards} from '../../components';
import '../hours/hours.css';


const hoursContainer = () => {
    return (
    
        <div className="weather__hours">
            <div className="weather__hours-container">
                <HourCards temp="32°C" feels_like="Mostly Cloudy" windspeed="10 km/h" humidity="54%"/>
                <HourCards temp="32°C" feels_like="Mostly Cloudy" windspeed="10 km/h" humidity="54%"/>
                <HourCards temp="32°C" feels_like="Mostly Cloudy" windspeed="10 km/h" humidity="54%"/>
                <HourCards temp="32°C" feels_like="Mostly Cloudy" windspeed="10 km/h" humidity="54%"/>
                <HourCards temp="32°C" feels_like="Mostly Cloudy" windspeed="10 km/h" humidity="54%"/>
                <HourCards temp="32°C" feels_like="Mostly Cloudy" windspeed="10 km/h" humidity="54%"/>
                </div>
            <div className="box_under">
                <div className="text_undercontainer">9 AM</div>
                <div className="text_undercontainer">10 AM</div>
                <div className="text_undercontainer">11 AM</div>
                <div className="text_undercontainer">12 PM</div>
                <div className="text_undercontainer">1 PM</div>
                <div className="text_undercontainer">2 PM</div>
            </div>
        </div>
    );
}


export default hoursContainer;