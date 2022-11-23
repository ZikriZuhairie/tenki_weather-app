import React from 'react';
import { InfoDays, InfoExtend } from './index';
import './daycards.css';
import '../daycards/info/infodays.css';
import cloudy from '../../assets/cloudy.png';
// import {
//     Thunderstorm,
//     DrizzleThunderstorm,
//     Drizzle,
//     Rain,
//     HeavyRain,
//     ShowerRain,
//     Sleet,
//     Haze,
//     ClearSky,
//     Cloudy,
//     BrokenCloud,
//     OvercastCloud
// } from '../../assets/index';

function DayCards({ desc, date, temp1, temp2, humid, wind1 }) {

    // const [icon, setIcon] = useState([]);
    // const results = () => {

    //     let weatherIcon = null;
    //     let description = {desc}
    //     if (description === 'Thunderstorm with light rain' || 'Thunderstorm with rain' || 'Thunderstorm with heavy rain') {
    //         weatherIcon = "Thunderstorm"
    //     } else if (description === 'Thunderstorm with light drizzle' || 'Thunderstorm with drizzle' || 'Thunderstorm with heavy drizzle' || 'Thunderstorm with Hail') {
    //         weatherIcon = "DrizzleThunderstorm"
    //     } else if (description === 'Light Drizzle' || 'Drizzle' || 'Heavy Drizzle') {
    //         weatherIcon = "Drizzle"
    //     } else if (description === 'Light Rain' || 'Moderate Rain' || 'Light shower rain' || 'Heavy shower rain' || 'Unknown Precipitation') {
    //         weatherIcon = "Rain"
    //     } else if (description === 'Heavy Rain') {
    //         weatherIcon = "HeavyRain"
    //     } else if (description === 'Shower rain') {
    //         weatherIcon = "ShowerRain"
    //     } else if (description === 'Sleet' || 'Heavy sleet') {
    //         weatherIcon = "Sleet"
    //     } else if (description === 'Mist' || 'Haze') {
    //         weatherIcon = "Haze"
    //     } else if (description === 'Clear sky') {
    //         weatherIcon = "ClearSky"
    //     } else if (description === 'Few clouds' || 'Scattered clouds') {
    //         weatherIcon = "Cloudy"
    //     } else if (description === 'Broken clouds') {
    //         weatherIcon = "BrokenCloud"
    //     } else if (description === 'Overcast clouds') {
    //         weatherIcon = "OvercastCloud"
    //     }
   

    return (
        <div>
            <div className="weather__daycards-container_text">
                <p>{date}</p>
            </div>
            <div className="weather__daycards-info">
                <img src={cloudy} alt="cloudy icon" />
                <div className="weather__daycards-info-text">
                    <InfoDays temp_high={temp1} temp_low={temp2} />
                </div>
            </div>
            <div className="weather__daycards-info">
                <div className="weather__daycards-info-extend">
                    <InfoExtend humidity={humid} wind={wind1} />
                </div>
            </div>
        </div>
    );
};
// }

export default DayCards;