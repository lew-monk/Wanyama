import { configureStore } from "@reduxjs/toolkit";
import AnimalReducer from "../components/AnimalSightingSlice";

const store = configureStore({
  reducer: {
    AnimalReducer,
  },
});

export default store;
