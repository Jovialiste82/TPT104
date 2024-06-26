// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "../features/example.slice.js";

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export default store;
