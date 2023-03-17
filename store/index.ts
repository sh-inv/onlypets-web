import { configureStore } from "@reduxjs/toolkit";
import { sampleReducer } from "./modules/sample";

const store = configureStore({
  reducer: {
    sample: sampleReducer,
  },
});

export default store;
