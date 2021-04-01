import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    animalName: null,
    timeSpotted: null,
    marker: null,
    location: {},
  },
];

const animalSlice = createSlice({
  name: "animal",
  initialState,
  reducers: {
    add: (state = initialState, action) => {
      const animalSighting = {
        animalName: action.payload.animal,
        timeSpotted: action.payload.date,
        location: {
          lat: action.payload.location["lat"],
          lng: action.payload.location["lng"],
        },
        marker: action.payload.marker,
      };

      return void (state = state.push(animalSighting));
    },
  },
});

export const { add } = animalSlice.actions;

export const animalSelector = (state) => {
  return state.AnimalReducer;
};

export default animalSlice.reducer;
