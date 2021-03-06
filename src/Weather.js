import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(){
  const [weatherData, setWeatherData]= useState({loaded:false});
  
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      loaded:true,
      date:"Last updated: Monday 10:00",
      city: response.data.name,
      temperature: response.data.main.temp,
      wind:  response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl:"https://ssl.gstatic.com/onebox/weather/64/sunny.png"
    });

  }

  
  if (weatherData.loaded){

  return (
      <div className="Weather">
    
      <form className="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city..."
              autoFocus="on"
              autoComplete="off"
              id="city-input"
              className="form-control shadow-sm w-100"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-info shadow-sm w-100"
            />
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-light w-100" >
              Exact location
            </button>
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col-6">
        <h1>{weatherData.city}</h1>
        <ul className="current-weather">
          <li className="current-date">{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
        
        <img src={weatherData.iconUrl} alt={weatherData.description} className="icon" />
        <span className="temperature">{Math.round(weatherData.temperature)}</span>
        <span className="units">
          <a href="/">℃</a> |<a href="/">℉</a>
        </span>
        
      </div>

      <div className="col-6">
      <ul className="air-quality">
        <li className="humidity">Humidity: {Math.round(weatherData.humidity)}%</li>
        <li className="wind">Wind: {Math.round(weatherData.wind)}mph</li>
      </ul>
      </div>
      </div>
      
    </div>
    );
  }else{
    const apiKey =`a995a1036d517aa4d70c6226c85fcce8`;
  let city ="Los Angeles";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
  
  }
}