import axios from "axios";
import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    const[loaded, setLoaded]= useState(false);
    const[forecast, setForecast]= useState(null);



    function handleForecastResponse(response){
        setForecast(response.data);
        setLoaded(true);
        console.log(response.data);
        
    }

    if (loaded && props.city === forecast.city.name){
        return <div className="WeatherForecast row">
            <WeatherForecastPreview data={forecast.list[0]}/>
            <WeatherForecastPreview data={forecast.list[1]}/>
            <WeatherForecastPreview data={forecast.list[2]}/>
            <WeatherForecastPreview data={forecast.list[3]}/>
            <WeatherForecastPreview data={forecast.list[4]}/>
            <WeatherForecastPreview data={forecast.list[5]}/>
        </div>;
    }else{

        let apiKey=`a995a1036d517aa4d70c6226c85fcce8`;
        let apiUrl= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleForecastResponse);
        
        return "null";
    }
}