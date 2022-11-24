import React from 'react';
import './infohours.css'; //Calling for CSS file
import {BsWind} from 'react-icons/bs';
import {CiDroplet} from 'react-icons/ci';

const InfoHours = ({ temp1,feels_like1,humidity1,windspeed1 }) => {
    const mystyle = {
        margin:"5px 0px 5px 0px"
      };

    return (
        <div className="weather__infohours">
            <div className="weather__infohours-container">
                <div className="weather__infohours-text">

                    <p>{temp1}</p>
                    <p>{feels_like1}</p>
                    <p style={mystyle}>
                        <BsWind/>&nbsp;{windspeed1}                    
                    </p>
                    <p style={mystyle}><CiDroplet/>&nbsp;{humidity1}</p>


                </div>
            </div>

        </div>
    );
}

export default InfoHours;