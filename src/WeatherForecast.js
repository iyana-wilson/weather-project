import axios from "axios";
import React, {useState, useEffect} from "react";
import ForecastDay from "./ForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleRequest(response){
    setForecast(response.data.daily);
    setLoaded(true);
}


if(loaded){
    return(
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index) {
                    if (index < 5) {
                        return (
                            <div className="col" key={index}>
                            <ForecastDay data = {dailyForecast}/>
                         </div>
                        );
                    } else {
                        return null;
                    }
                })}
               
            </div>
        </div>
    );
} else {
    let apiKey= "361e0aa61c613a70c483b8ca214c4ec2";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleRequest);

    return null;
}



    
}