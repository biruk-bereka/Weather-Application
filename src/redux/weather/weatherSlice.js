import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weatherData: [],
  isLoading: true,
};
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {

  },
});

export default weatherSlice.reducer;
