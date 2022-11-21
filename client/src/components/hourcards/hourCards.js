import React from 'react';
import { InfoHours } from './index';
import '.././daycards/daycards.css'; 
import cloudy from '../../assets/cloudy.png';
import {BiDroplet} from 'react-icons';

 //adding on space
const divStyle = {
    margin: '25px'
  };
 

const HourCards = ({ temp, feels_like, windspeed,humidity}) => {
    return (
        <div className="weather__daycards">
            <div className="weather__daycards-container">
                    <div className="weather__daycards-info">
                    <img style={divStyle} src={cloudy} alt="cloudy icon" />
                    
                         <div className="weather__daycards-info-text">
                         <li><InfoHours temp1={temp} feels_like1={feels_like} windspeed1={windspeed} humidity1={humidity}/></li>
                         </div>
                    </div>
            </div>
        </div >
    );
}

export default HourCards;