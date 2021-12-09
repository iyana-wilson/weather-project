import React from "react";

export default function ForecastDay(props){
function maxTemp() {
    let temperatures = Math.round(props.data.temp.max);
    return `${temperatures}`;
}

function minTemp() {
    let temperatures = Math.round(props.data.temp.min);
    return `${temperatures}`;
}

function day(){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
}


    return(
        <div>
        <div className="Weather-day">{day()}</div>
        <img src={props.data.weather[0].icon} alt="weather" />
        <div className="Weather-temperatures">
            <span className="Weather-max">{maxTemp()}°</span>
            <span className="Weather-min">{minTemp()}°</span>
        </div>
        </div>
    );
    
}