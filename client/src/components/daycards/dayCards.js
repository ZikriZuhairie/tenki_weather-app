import React from 'react';
import { InfoDays } from './index';
import './daycards.css';
import cloudy from '../../assets/cloudy.png';

const dayCards = ({date, temp1, temp2}) => {
    return (
        <div className="weather__daycards">
            <div className="weather__daycards-container">
                <div className="weather__daycards-container_text">
                    <p>{date}</p>
                </div>
                <div className="weather__daycards-info">
                    <img src={cloudy} alt="cloudy icon" />
                    <div className="weather__daycards-info-text">
                        <InfoDays temp_high={temp1} temp_low={temp2} />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default dayCards;