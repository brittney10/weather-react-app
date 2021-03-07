import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
        <div>
            <div className="row">
        <div className="col-6">
        <h1>{props.data.city}</h1>
        <ul className="current-weather">
          <li className="current-date"><FormattedDate date={props.data.date} /></li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-6" >
        <WeatherIcon code={props.data.icon} />
        <WeatherTemperature celsius={props.data.temperature} />
      </div>

      <div className="col-6">
      <ul className="air-quality">
        <li className="humidity">Humidity: {Math.round(props.data.humidity)}%</li>
        <li className="wind">Wind: {Math.round(props.data.wind)}mph</li>
      </ul>
      </div>
      </div>
        </div>
    );
}