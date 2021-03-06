import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
        <div className="col-6">
        <WeatherIcon code={props.data.icon} />
        <span className="temperature">{Math.round(props.data.temperature)}</span>
        <span className="units">
          <a href="/">℃</a> |<a href="/">℉</a>
        </span>
        
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