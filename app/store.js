import { configureStore } from "@reduxjs/toolkit";
import { puppyBowlApi } from '../API/index';
import PlayersSlice from '../components/PlayersSlice'


const store = configureStore({
  reducer: {
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
    players: PlayersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});

export default store;