import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import weatherReducer from './weather/weatherSlice';
import detailsReducer from './details/detailsSlice';

const logger = createLogger({
  collapsed: true,
});

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    details: detailsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

});

export default store;
