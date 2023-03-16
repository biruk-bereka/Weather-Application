import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Details from '../routes/Details';
import '@testing-library/jest-dom';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../redux/details/detailsSlice', () => ({
  __esModule: true,
  fetchDetailsWeather: jest.fn(),
}));

describe('Details component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      details: {
        detailsData: {
          name: 'London',
          main: {
            temp: 15,
            feels_like: 10,
            temp_max: 20,
            temp_min: 10,
            humidity: 70,
            pressure: 1000,
          },
        },
      },
    });
  });

  it('should render the details of the weather for a city', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>

      </Provider>,
    );

    expect(getByText('Current Weather')).toBeInTheDocument();
    expect(getByText('London')).toBeInTheDocument();
    expect(getByText('15°')).toBeInTheDocument();
    expect(getByText('Feels like')).toBeInTheDocument();
    expect(getByText('20°')).toBeInTheDocument();
    expect(getByText('Humidity')).toBeInTheDocument();
    expect(getByText('70 %')).toBeInTheDocument();
    expect(getByText('Pressure')).toBeInTheDocument();
  });
});
