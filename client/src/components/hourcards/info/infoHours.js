import React from 'react';
import './infohours.css'; //Calling for CSS file
import {BsWind} from 'react-icons/bs';
import {CiDroplet} from 'react-icons/ci';


const InfoHours = ({ feels_like1,desc1,humidity1,windspeed1 }) => {
    const mystyle = {
        margin:"5px 0px 5px 0px"
      };

      const mystyle2 = {
        padding:"0px 5px 0px 5px"
      };

    return (
        <div className="weather__infohours">
            <div className="weather__infohours-container">
                <div className="weather__infohours-text">

                    
                    <p>{feels_like1}&deg;C</p>
                    <p style={mystyle2}>{desc1}</p>
                    <p style={mystyle}>
                        <BsWind/>&nbsp;{windspeed1} Km/H                   
                    </p>
                    <p style={mystyle}><CiDroplet/>&nbsp;{humidity1}%</p>


                </div>
            </div>

        </div>
    );
}

export default InfoHours;