import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Search from '../components/Search';
import { fetchWeatherData } from '../redux/weather/weatherSlice';
import '../styles/Home.css';

const Home = () => {
  const { weatherData } = useSelector((store) => store.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, []);

  return (
    <div className="category-container">
      <div>
        <h2 className="header">Different Cities Weather</h2>
        <Search />
      </div>
      <div className="categories">
        <h4 className="category">WEATHER BY CITY</h4>
        <ul>
          {
        weatherData.map((weather) => (
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
        </ul>

      </div>
    </div>
  );
};

export default Home;
