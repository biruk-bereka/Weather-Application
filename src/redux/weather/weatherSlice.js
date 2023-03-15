import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  weatherData: [],
  isLoading: true,
};
const countryID = `5128581,2643743,2968815,1850147,1816670,524901, 2147714,3451190,3530597,6167865, 3169070,
 3117735,3369157,1275339,1642911,360630,1609350,292223,3435910,1835848`;

const url = `https://api.openweathermap.org/data/2.5/group?id=${countryID}&APPID=38b836cb0c6ad91ba1a8a3bd63d28423`;

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async () => {
    const res = await axios.get(url)
      .then((response) => response.data);
    return res;
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, () => (
        console.log('Pending')
      ))
      .addCase(fetchWeatherData.fulfilled, (state, action) => ({
        ...state,
        weatherData: action.payload.list,
      }))
      .addCase(fetchWeatherData.rejected, () => (
        console.log('rejected')
      ));
  },

});

export default weatherSlice.reducer;
