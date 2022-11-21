import React from 'react';
import { DayCards, Location } from '../../components';

import './days.css';

const daysContainer = () => {
    return (
        <div className="weather__days">
            <Location location="Kuala Lumpur" />
            <div className="weather__days-container">
                <DayCards date="Today" temp1="32°C" temp2="28°C" />
                <DayCards date="Tue, 22 Nov" temp1="32°C" temp2="28°C" />
                <DayCards date="Wed, 23 Nov" temp1="32°C" temp2="28°C" />
                <DayCards date="Thu, 24 Nov" temp1="32°C" temp2="28°C" />
                <DayCards date="Fri, 25 Nov" temp1="32°C" temp2="28°C" />
            </div>
        </div>
    );
}

export default daysContainer;