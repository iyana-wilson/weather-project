import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
    
    const {weatherData, setWeatherData} = useState({ready: false});

    function handleResponse(response){
        console.log(response.data);

        setWeatherData({
            ready: true,
            temp: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: "Thursday 12:30",
            humidity: response.data.main.humidity,
            iconUrl:"https://ssl.getstatic.com/onebox/weather/64/partly_cloudy.png",
            description: response.data.weather[0].description,
        })

        
    }
    
if(weatherData.ready){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input
                        type="search"
                        placeholder="Enter city..."
                        className="form-control"
                        autoFocus="on"
                        />
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
        
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="clearfix">
                    <img src={weatherData.iconUrl}
                    alt={weatherData.description}
                    className="float-left"
                    />
                    <div className="float-left">
                    <span className="temp">{Math.round(weatherData.temp)}</span>
                    <span className="unit">°C</span>
                    </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        
                        <li>Humidity: {weatherData.humidity}</li>
                        <li>Wind: {weatherData.wind}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
} else{
    const apiKey = "361e0aa61c613a70c483b8ca214c4ec2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metirc`;
axios.get(apiUrl).then(handleResponse);

return "Loading...";
}

  
}