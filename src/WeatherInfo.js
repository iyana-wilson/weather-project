import React from "react";
import FormatDate from "./FormatDate";
import WeatherFarenheit from "./WeatherFahrenheit";
import WeatherIcon from "./WeatherIcon";

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
                <div className="float-left">
                    <WeatherIcon code={props.data.icon} size={52}/>
                </div>
                
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