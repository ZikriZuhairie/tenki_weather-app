import React from 'react';
import { InfoDays } from './index';
import './daycards.css';
import '../daycards/info/infodays.css';

function DayCards({ icons, date, temp1, temp2, weatherdesc }) {
    return (
        <div className="weather__daycards-animation">
            <div className="weather__daycards-container_text">
                <p>{date}</p>
            </div>
            <div className="weather__daycards-desc">
                <p>{weatherdesc}</p>
            </div>
                <div className="weather__daycards-info">
                    <img src={`weather/${icons}.png`} alt="icon" />
                    <div className="weather__daycards-info-text">
                        <InfoDays temp_high={temp1} temp_low={temp2} />
                    </div>
                </div>
        </div>
    );
};
// }

export default DayCards;