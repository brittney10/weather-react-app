import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props){
  const [weatherData, setWeatherData]= useState({loaded : false});
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      loaded:true,
      date: new Date(response.data.dt*1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      wind:  response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon:response.data.weather[0].icon
    });

  }
  function search(){
  const apiKey =`a995a1036d517aa4d70c6226c85fcce8`;
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  }
  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function handleChangeCity(event){
    setCity(event.target.value);
  }

  
  if (weatherData.loaded){

  return (
      <div className="Weather">
    
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city..."
              autoFocus="on"
              autoComplete="off"
              id="city-input"
              className="form-control shadow-sm w-100"
              onChange={handleChangeCity}
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
      <WeatherInfo data={weatherData}/> 
      <WeatherForecast city={weatherData.city} />     
    </div>
    );
  }else{
    search();

  return "Loading...";
  
  }
}