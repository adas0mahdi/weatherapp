import React, { useState } from 'react'
import './WeatherApp.css'
import SearchIcon from "../Assets/search.png";
import ClearIcon from "../Assets/clear.png";
import CloudIcon from "../Assets/cloud.png";
import DrizzleIcon from "../Assets/drizzle.png";
import RainIcon from "../Assets/rain.png";
import SnowIcon from "../Assets/snow.png";
import WindIcon from "../Assets/wind.png";
import HumidityhIcon from "../Assets/humidity.png";

export const WeatherApp = () => {
    let ApiKey = "efdfbf19e2f5c6f3583f9db7067d9c29";
    const [wicon, setWicon]= useState(CloudIcon)


    const search = async () =>{
            const element = document.getElementsByClassName("cityInput")
            if(element[0].value===""){
                return 0;
            }
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${ApiKey}`
            let response = await fetch(url);
            let data = await response.json();
            const humidity = document.getElementsByClassName("humidity-percent");
            const wind = document.getElementsByClassName("wind-rate");
            const temprature = document.getElementsByClassName("weather-temp");
            const location = document.getElementsByClassName("weather-location");

            humidity[0].innerHTML = data.main.humidity+" %";
            wind[0].innerHTML = Math.floor(data.wind.speed)+" Km/h";
            temprature[0].innerHTML = Math.floor(data.main.temp)+ " °C";
            location[0].innerHTML = data.name;
            
            if (data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
                setWicon(ClearIcon)
            }
            else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
                setWicon(CloudIcon)
            }
            else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
                setWicon(DrizzleIcon)
            }
            else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
                setWicon(DrizzleIcon)
            }
            else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
                setWicon(RainIcon)
            }
            else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
                setWicon(RainIcon)
            }
            else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
                setWicon(SnowIcon)
            }
            else {
                setWicon(ClearIcon)
            }
    }
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className='cityInput' placeholder='search' />
            <div className='search-icon' onClick={()=>{search()}}>
                <img src={SearchIcon} alt="" />
            </div>
        </div>
        <div className='wather-image'>
            <img src={wicon} alt="" />
        </div>
        <div className='weather-temp'>24°C</div>
        <div className='weather-location'>London</div>
        <div className='data-container'>
            <div className='element'>
                <img src={HumidityhIcon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className='element'>
                <img src={WindIcon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
