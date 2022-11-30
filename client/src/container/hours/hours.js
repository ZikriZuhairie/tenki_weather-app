import React from 'react';
import { HourCards } from '../../components';
import '../hours/hours.css';
import { useEffect, useState } from "react";

function formatTime(timeString) {
    const [hourString, minute] = timeString.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
}


const HoursContainer = () => {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [forecast, setForecast] = useState([]);
    const API_URL = "https://api.openweathermap.org/data/2.5";
    
    
    
    
    useEffect(() => {
        const getLocation = () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
                
            });
        };
        const fetchData = async () => {
            const API_KEY = process.env.REACT_APP_API_KEY_OPENWEATHERMAP;
            getLocation();

            await fetch(`${API_URL}/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
                .then(response => response.json())
                .then(response => {
                    setForecast(response);
                    console.log(response);
                });
        }
        fetchData();
    }, [lat, long]);
    console.log(lat, long);

    return (


        <div className="weather__hours">
            <div className="weather__hours-container">


                <div className="weather__hourcards-container">

                    {/* 9am */}
                    {(typeof forecast.list != 'undefined') ? (
                        <HourCards icons={forecast.list[0].weather[0].icon} feels_like={forecast.list[0].main.feels_like} desc={forecast.list[0].weather[0].description} windspeed={forecast.list[0].wind.speed} humidity={forecast.list[0].main.humidity} />
                    ) : (<div></div>)}
                </div>



                <div className="10am">
                    {(typeof forecast.list != 'undefined') ? (
                        <HourCards icons={forecast.list[1].weather[0].icon} feels_like={forecast.list[1].main.feels_like} desc={forecast.list[1].weather[0].description} windspeed={forecast.list[1].wind.speed} humidity={forecast.list[1].main.humidity} />
                    ) : (<div></div>)}
                </div>

                <div className="11am">
                    {(typeof forecast.list != 'undefined') ? (
                        <HourCards icons={forecast.list[2].weather[0].icon} feels_like={forecast.list[2].main.feels_like} desc={forecast.list[2].weather[0].description} windspeed={forecast.list[2].wind.speed} humidity={forecast.list[2].main.humidity} />
                    ) : (<div></div>)}
                </div>

                <div className="12pm">
                    {(typeof forecast.list != 'undefined') ? (
                        <HourCards icons={forecast.list[3].weather[0].icon} feels_like={forecast.list[3].main.feels_like} desc={forecast.list[3].weather[0].description} windspeed={forecast.list[3].wind.speed} humidity={forecast.list[3].main.humidity} />
                    ) : (<div></div>)}
                </div>

                <div className="1pm">
                    {(typeof forecast.list != 'undefined') ? (
                        <HourCards icons={forecast.list[4].weather[0].icon} feels_like={forecast.list[4].main.feels_like} desc={forecast.list[4].weather[0].description} windspeed={forecast.list[4].wind.speed} humidity={forecast.list[4].main.humidity} />
                    ) : (<div></div>)}
                </div>


                <div className="2pm">
                    {(typeof forecast.list != 'undefined') ? (
                        <HourCards icons={forecast.list[5].weather[0].icon} feels_like={forecast.list[5].main.feels_like} desc={forecast.list[5].weather[0].description} windspeed={forecast.list[5].wind.speed} humidity={forecast.list[5].main.humidity} />
                    ) : (<div></div>)}
                </div>

            </div>
            <div className="box_under">

                {(typeof forecast.list != 'undefined') ? (
                    <div className="text_undercontainer">

                        {formatTime(forecast.list[0].dt_txt.slice(11, 19))}
                    </div>
                ) : (<div></div>)}

                {(typeof forecast.list != 'undefined') ? (
                    <div className="text_undercontainer">
                        {formatTime(forecast.list[1].dt_txt.slice(11, 19))}

                    </div>
                ) : (<div></div>)}
                {(typeof forecast.list != 'undefined') ? (
                    <div className="text_undercontainer">
                        {formatTime(forecast.list[2].dt_txt.slice(11, 19))}

                    </div>
                ) : (<div></div>)}
                {(typeof forecast.list != 'undefined') ? (
                    <div className="text_undercontainer">
                        {formatTime(forecast.list[3].dt_txt.slice(11, 19))}

                    </div>
                ) : (<div></div>)}
                {(typeof forecast.list != 'undefined') ? (
                    <div className="text_undercontainer">
                        {formatTime(forecast.list[4].dt_txt.slice(11, 19))}

                    </div>
                ) : (<div></div>)}
                {(typeof forecast.list != 'undefined') ? (
                    <div className="text_undercontainer">
                        {formatTime(forecast.list[5].dt_txt.slice(11, 19))}

                    </div>
                ) : (<div></div>)}
            </div>
        </div>
    );
}


export default HoursContainer;