import React from "react";
import FormatDate from "./FormatDate";
import WeatherFarenheit from "./WeatherFahrenheit";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
        <li>
            <FormatDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <div className="clearfix">
                <img src={props.data.iconUrl}
                alt={props.data.description}
                className="float-left"
                />
                <div className="float-left">
                    <WeatherFarenheit celsius={props.data.temp} />
                
                </div>
                </div>
            </div>
            <div className="col-6">
                <ul>
                    
                    <li>Humidity: {props.data.humidity}</li>
                    <li>Wind: {props.data.wind}</li>
                </ul>
            </div>
        </div>
        </div>
    );
}