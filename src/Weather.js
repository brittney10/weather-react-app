import React from "react";
import "./Weather.css";

export default function Weather(){
    let weatherData = {
    city: "Los Angeles",
    date: "Last updated: Wednesday, 10:00",
    description: "Clear",
    temperature: 19,
    humidity: 80,
    wind: 3
  };

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
          <li>Description:{weatherData.description}</li>
        </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
        
        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="" className="icon" />
        <span className="temperature">{weatherData.temperature}</span>
        <span className="units">
          <a href="/">℃</a> |<a href="/">℉</a>
        </span>
        
      </div>

      <div className="col-6">
      <ul className="air-quality">
        <li className="humidity">Humidity: {weatherData.humidity}%</li>
        <li className="wind">Wind: {weatherData.wind}mph</li>
      </ul>
      </div>
      </div>
      
    </div>
    );
}