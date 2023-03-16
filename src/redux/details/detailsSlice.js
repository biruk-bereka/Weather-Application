import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  detailsData: [],
  isLoading: true,
};

export const fetchDetailsWeather = createAsyncThunk(
  'details/fetchDetailsWeather',
  async (id) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=38b836cb0c6ad91ba1a8a3bd63d28423`;
    const res = await axios.get(url)
      .then((response) => response.data);
    return res;
  },
);

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailsWeather.pending, () => (
        console.log('Pending')
      ))
      .addCase(fetchDetailsWeather.fulfilled, (state, action) => ({
        ...state,
        detailsData: action.payload,
      }))
      .addCase(fetchDetailsWeather.rejected, () => (
        console.log('rejected')
      ));
  },
});

export default detailsSlice.reducer;
