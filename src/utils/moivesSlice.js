import { createSlice } from "@reduxjs/toolkit";

const moivesSlice = createSlice({
  name: "moives",
  initialState: {
    nowPlayingMoives: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMoives: (state, action) => {
      state.nowPlayingMoives = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMoives, addTrailerVideo } = moivesSlice.actions;
export default moivesSlice.reducer;
