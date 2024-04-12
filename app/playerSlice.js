import { createSlice } from '@reduxjs/toolkit';
import { puppyBowlApi } from '../API/index';

const playerSlice = createSlice({
  name: 'player',
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      puppyBowlApi.endpoints.getPlayers.matchFulfilled,
      (state, { payload }) => {
        return payload.data.players;
      }
    );
  },
});

export default playerSlice.reducer;