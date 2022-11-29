import React from 'react';
import './footer.css';

const footer = () => {
    return ( 
        <div className='weather__footer-text'>
            <p>Data Provided By: <a href='https://openweathermap.org/api'>OpenWeatherMap</a> & <a href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi6gcuyi9L7AhWAgtgFHStuBrkQFnoECA4QAQ&url=https%3A%2F%2Fwww.weatherbit.io%2F&usg=AOvVaw1wNdS4J4x0xN9pIIcTaI4x'>Weatherbit</a></p>
        </div>
     );
}
 
export default footer;