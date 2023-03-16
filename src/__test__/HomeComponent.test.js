import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import Home from '../routes/Home';
import '@testing-library/jest-dom';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../redux/weather/weatherSlice', () => ({
  __esModule: true,
  fetchWeatherData: jest.fn(),
}));

describe('Home', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      weather: {
        isLoading: false,
        weatherData: [
          {
            id: 1,
            name: 'London',
            main: {
              temp: 15,
            },
          },
          {
            id: 2,
            name: 'New York',
            main: {
              temp: 20,
            },
          },
        ],
      },
    });
  });

  it('should render a list of cities with their temperature', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    expect(getByText('Different Cities Weather')).toBeInTheDocument();
    expect(getByText('WEATHER BY CITY')).toBeInTheDocument();
    expect(getByText('London')).toBeInTheDocument();
    expect(getByText('15°')).toBeInTheDocument();
    expect(getByText('New York')).toBeInTheDocument();
    expect(getByText('20°')).toBeInTheDocument();
  });
});
