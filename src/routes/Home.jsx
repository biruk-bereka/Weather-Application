import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchWeatherData } from '../redux/weather/weatherSlice';
import '../styles/Home.css';

const Home = () => {
  const { isLoading, weatherData } = useSelector((store) => store.weather);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [filteredData, setFilteredData] = useState(weatherData);

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, []);

  useEffect(() => {
    setFilteredData(weatherData
      .filter((weather) => {
        if (weather.name.toLowerCase().startsWith(input.toLowerCase())) {
          return weather;
        }
        return null;
      }));
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="category-container">
      <div>
        <h2 className="header">Different Cities Weather</h2>
        <form>
          <input type="text" id="search" name="search" placeholder="Search for city" onChange={(e) => handleChange(e)} />
        </form>
      </div>
      <div className="categories">
        <h4 className="category">WEATHER BY CITY</h4>
        <ul>
          {
            isLoading ? <p className="message">Loading...</p> : null
          }
          {
             filteredData.length === 0 && input === ''
               ? weatherData.map((weather) => (
                 <li key={weather.id} className="list">
                   <NavLink to={`/details/${weather.id}`} className="arrow-right">
                     <span className="material-symbols-outlined">
                       arrow_circle_right
                     </span>
                   </NavLink>

                   <h2>{weather.name}</h2>
                   <h3>
                     {weather.main.temp}
                     &deg;
                   </h3>
                 </li>
               ))
               : filteredData.map((weather) => (
                 <li key={weather.id} className="list">
                   <NavLink to={`/details/${weather.id}`} className="arrow-right">
                     <span className="material-symbols-outlined">
                       arrow_circle_right
                     </span>
                   </NavLink>

                   <h2>{weather.name}</h2>
                   <h3>
                     {weather.main.temp}
                     &deg;
                   </h3>
                 </li>
               ))
        }
          {
           filteredData.length === 0 && input !== ''
             ? <p className="message">There is no city with this name</p> : null
        }
        </ul>

      </div>
    </div>
  );
};

export default Home;
