import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
function handleRequest(response){
    console.log(response.data);
}

let apiKey= "361e0aa61c613a70c483b8ca214c4ec2";
let longitude= props.coordinates.lon;
let latitude= props.coordinates.lat;
let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat${latitude}&lon=${longitude}&appid=${apiKey}&units="metric`;

axios.get(apiUrl).then(handleRequest);

    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="Weather-day">Thu</div>
                    <img src={props.data.iconUrl} />
                    <div className="Weather-temperatures">
                        <span className="Weather-max">25°</span>
                        <span className="Weather-min">15°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}