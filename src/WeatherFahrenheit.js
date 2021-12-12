import React from "react";

export default function WeatherFahrenheit(props){
    return(
            <div className="WeatherFahrenheit">
                <span className="temp">{Math.round(props.celsius)}</span>
                    <span className="unit">
                        °C 
                        
                    </span>
            </div>
        );
}