import { configureStore } from "@reduxjs/toolkit";
import { puppyBowlApi } from '../API/index';
import playerSlice from './playerSlice';


const store = configureStore({
  reducer: {
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
    players: playerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});

export default store;