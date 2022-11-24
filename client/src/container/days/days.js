import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { DayCards, Location } from '../../components';

import './days.css';
import '../../components/daycards/daycards.css';
// import { BiMapPin } from 'react-icons/bi';

const DaysContainer = () => {
    const [index, setIndex] = useState(0);
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    // const [data, setData] = useState([]);
    const [forecast, setForecast] = useState([]);
    // const API_URL = "https://api.openweathermap.org/data/2.5";
    const API_URL1 = "https://api.weatherbit.io/v2.0/forecast";
    // const API_KEY = "802ccda5808aceebf0996ceef3adeb1e";
    const API_KEY1 = "5fc8377d78454f8c85519c6b179a755e";

    useEffect(() => {
        const getLocation = () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);

            });
            };
        const fetchData = async () => {
            getLocation();

            // await fetch(`${API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`)
            //     .then(res => res.json())
            //     .then(result => {
            //         setData(result);
            //         console.log(result);
            //     });
            await fetch(`${API_URL1}/daily?lat=${lat}&lon=${long}&key=${API_KEY1}`)
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
        <div className="weather__days">
            <Location location={forecast} />
            <div className="weather__days-container">
                <div className="day1">
                    <div className="weather__daycards">
                        <div className={`weather__daycards-container${index === 0 ? ' active' : ''}`} onClick={() => { setIndex(0) }}>
                        {(typeof forecast.data != 'undefined') ? (
                                <DayCards icons={forecast.data[0].weather.icon} date={moment().format('ddd, Do MMM')} weatherdesc={forecast.data[0].weather.description} temp1={forecast.data[0].max_temp} temp2={forecast.data[0].min_temp} />
                            ) : (<div></div>)}
                        </div>
                    </div >
                </div>

                <div className="day2">
                    <div className="weather__daycards">
                        <div className={`weather__daycards-container${index === 1 ? ' active' : ''}`} onClick={() => { setIndex(1) }}>
                            {(typeof forecast.data != 'undefined') ? (
                                <DayCards icons={forecast.data[1].weather.icon} date={moment().add(1, 'days').format('ddd, Do MMM')} weatherdesc={forecast.data[1].weather.description} temp1={forecast.data[1].max_temp} temp2={forecast.data[1].min_temp} />
                            ) : (<div></div>)}
                        </div>
                    </div >
                </div>

                <div className="day3">
                    <div className="weather__daycards">
                        <div className={`weather__daycards-container${index === 2 ? ' active' : ''}`} onClick={() => { setIndex(2) }}>
                            {(typeof forecast.data != 'undefined') ? (
                                <DayCards icons={forecast.data[2].weather.icon} date={moment().add(2, 'days').format('ddd, Do MMM')} weatherdesc={forecast.data[2].weather.description} temp1={forecast.data[2].max_temp} temp2={forecast.data[2].min_temp} />
                            ) : (<div></div>)}
                        </div>
                    </div >
                </div>

                <div className="day4">
                    <div className="weather__daycards">
                        <div className={`weather__daycards-container${index === 3 ? ' active' : ''}`} onClick={() => { setIndex(3) }}>
                            {(typeof forecast.data != 'undefined') ? (
                                <DayCards icons={forecast.data[3].weather.icon} date={moment().add(3, 'days').format('ddd, Do MMM')} weatherdesc={forecast.data[3].weather.description} temp1={forecast.data[3].max_temp} temp2={forecast.data[3].min_temp} />
                            ) : (<div></div>)}
                        </div>
                    </div >
                </div>

                <div className="day5">
                    <div className="weather__daycards">
                        <div className={`weather__daycards-container${index === 4 ? ' active' : ''}`} onClick={() => { setIndex(4) }}>
                            {(typeof forecast.data != 'undefined') ? (
                                <DayCards icons={forecast.data[4].weather.icon} date={moment().add(4, 'days').format('ddd, Do MMM')} weatherdesc={forecast.data[4].weather.description} temp1={forecast.data[4].max_temp} temp2={forecast.data[4].min_temp} />
                            ) : (<div></div>)}
                        </div>
                    </div >
                </div>
            </div>
        </div>
    );
}

export default DaysContainer;