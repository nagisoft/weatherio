import React, { useState, useEffect } from "react";
function WeatherDetails({
  temp,
  humidity,
  pressure,
  weatherType,
  name,
  speed,
  country,
  sunset,
}) {
  const [weatherState, setWeatherState] = useState("");
  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          

          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherType]);

  //conveting the seconds in time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
    <div className="container">
  <div className="weather-side" id="weather-side">
    <div className="weather-gradient"></div>
    <div className="date-container">
      <h2 className="date-dayname">{new Date().toLocaleDateString("en-US", { weekday: 'long'})}</h2>
      <span className="date-day">{new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span><i className="location-icon" data-feather="map-pin"></i>
      <span className="location">{name}, {country}</span>
    </div>
    <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
      <h1 className="weather-temp">{~~temp} &deg;</h1>
      <h3 className="weather-desc">{weatherType}</h3>
    </div>
    <div className="weather-container-right"><i className="weather-icon" data-feather="sun"></i>
      <i className={`wi ${weatherState}`}></i>
    </div>
  </div>
  <div className="info-side">
    <div className="today-info-container">
      <div className="today-info">
        <div className="precipitation"> <span className="title">SUNSET  &nbsp;</span><span className="value">{timeStr} PM</span>
          <div className="clear"></div>
        </div>
        <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{humidity} %</span>
          <div className="clear"></div>
        </div>
        <div className="wind"> <span className="title">WIND</span><span className="value">{speed}</span>
          <div className="clear"></div>
        </div>
      </div>
    </div>
    
    
  </div>
</div>
   
    </>
  );
}

export default WeatherDetails;
