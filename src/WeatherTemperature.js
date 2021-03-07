import React, { useState } from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit]= useState("celsius");



    function displayFahrenheit(event){
        event.preventDefault();
        setUnit ("fahrenheit");
    }
    
    function displayCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    function fahrenheit(){
        return(props.celsius * 9)/5 +32;
    }
    
    if (unit === "celsius") {
    return(
        <span>
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit"> ℃ |<a href="/" onClick={displayFahrenheit}>℉</a>
            </span>
        </span>
    );
    } else {
        return (
        <span>
            <span className="temperature">{Math.round(fahrenheit())}</span>
            <span className="unit">
            <a href="/" onClick={displayCelsius}> ℃</a> |℉
            </span>
        </span>
        );
    }
}