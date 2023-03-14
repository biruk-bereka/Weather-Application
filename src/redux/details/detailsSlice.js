import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  detailsData: [],
  isLoading: true,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {

  },
});

export default detailsSlice.reducer;
