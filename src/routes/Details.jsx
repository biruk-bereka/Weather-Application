import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { fetchDetailsWeather } from '../redux/details/detailsSlice';
import '../styles/Details.css';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detailsData } = useSelector((store) => store.details);

  useEffect(() => {
    dispatch(fetchDetailsWeather(id));
  }, []);
  return (
    <div className="container">
      <div className="header">
        <NavLink to="/" className="back">
          <span className="material-symbols-outlined">
            arrow_back_ios
          </span>
        </NavLink>
        <h3>Current Weather</h3>
      </div>

      {
        detailsData.length === 0
          ? null
          : (
            <>
              <div className="details">
                <h2>{detailsData.name}</h2>
                <h1>
                  {detailsData.main.temp}
                  &deg;
                </h1>
              </div>
              <div>
                <p>
                  Feels like
                  <span>
                    {detailsData.main.feels_like}
                    &deg;
                  </span>
                </p>
                <div style={{ display: 'flex' }}>
                  <p>
                    <span className="material-symbols-outlined">
                      arrow_upward
                    </span>
                    {detailsData.main.temp_max}
                    &deg;
                  </p>
                  <p>
                    <span className="material-symbols-outlined">
                      arrow_downward
                    </span>
                    {detailsData.main.temp_min}
                    &deg;
                  </p>
                </div>
                <p>
                  Humidity
                  <span>
                    {detailsData.main.humidity}
                    {' '}
                    %
                  </span>
                </p>
                <p>
                  Pressure
                  <span>
                    {detailsData.main.pressure}
                    hPa
                  </span>
                </p>
              </div>
            </>
          )

}
    </div>
  );
};

export default Details;
