import React from 'react';
import { HourCards} from '../../components';
import '../hours/hours.css';
import { useEffect, useState } from "react";




const hoursContainer = () => {

    // REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
    // REACT_APP_API_KEY =  '5fc8377d78454f8c85519c6b179a755e'

    // REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'

    // const [lat, setLat] = useState([]);
    // const [long, setLong] = useState([]);

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //       setLat(position.coords.latitude);
    //       setLong(position.coords.longitude);
    //     });
    
    //     console.log("Latitude is:", lat)
    //     console.log("Longitude is:", long)

    //     await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    //     .then(res => res.json())
    //     .then(result => {
    //       setData(result)
    //       console.log(result);
    //     });
    //   fetchData();

    //   }, [lat, long]);
      

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