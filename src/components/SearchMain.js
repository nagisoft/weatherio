import React , {useState , useEffect} from 'react'
// import  './style.css';
import  './stylec.css';
import WeatherDetails from './WeatherDetails';

export default function SearchMain() {
    const [searchTerm, setSearchTerm] = useState('marrakesh');
    const [tempInfo, setTempInfo] = useState({});
   
    const getWeatherInfo = async ()=>{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=64968eb65f1823ec7f3abe18fce5573b`;
            let res = await fetch(url);
            let data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const { main: weatherType } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            
            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherType,
                name,
                speed,
                country,
                sunset,
            };

            setTempInfo(myNewWeatherInfo);
                }catch(error){
                    console.log(error);
                }
    };

    useEffect(()=>{
        getWeatherInfo();
        
    }, [])


    
    return (
        <>
      


    <div className="search">
          <input className='search__input'
            type="search"
            placeholder="Search city.."
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)
            }
          />
          <div className="location-container">
            <button className="location-button" onClick={getWeatherInfo}> <i data-feather="map-pin"></i><span>Change location</span></button>
          </div>
        </div>
  <WeatherDetails {...tempInfo} />
    </>
    )
}
