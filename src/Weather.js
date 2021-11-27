import React from "react";
import "./Weather.css";

export default function Weather(){
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
            <h1>Baton Rouge</h1>
            <ul>
                <li>Thursday 12:30</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="clearfix">
                    <img src="https://ssl.getstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="Mostly cloudy"
                    className="float-left"
                    />
                    <div className="float-left">
                    <span className="temp">8</span>
                    <span className="unit">°C</span>
                    </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 25%</li>
                        <li>Humidity: 80%</li>
                        <li>Wind: 10 mph</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}