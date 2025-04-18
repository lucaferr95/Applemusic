import { configureStore } from "@reduxjs/toolkit"; // Usa configureStore invece di createStore
import favReducer from "../reducers"; // Il tuo reducer

const store = configureStore({
  reducer: {
    favourites: favReducer, // Qui passi il tuo reducer
  },
});

export default store;
