import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
    
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        console.log(response.data);

        setWeatherData({
            ready: true,
            coords: response.data.coord,
            temp: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            humidity: response.data.main.humidity,
            iconUrl:`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description,
        });
    }

function search(){
    const apiKey = "361e0aa61c613a70c483b8ca214c4ec2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function cityUpdate(event){
setCity(event.target.value);
    }
    
if (weatherData.ready){
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input
                        type="search"
                        placeholder="Enter city..."
                        className="form-control"
                        autoFocus="on"
                        onChange={cityUpdate}
                        />
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
          <WeatherForecast data={weatherData} coords={weatherData.coords}/>
        </div>
    );
} else{
search();
return "Loading...";
}

  
}