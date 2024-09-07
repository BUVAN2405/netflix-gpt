import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moivesReducers from "./moivesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    moives: moivesReducers,
  },
});

export default appStore;
