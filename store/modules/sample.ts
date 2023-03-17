import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const sampleSice = createSlice({
  name: "sample",
  initialState,
  reducers: {},
});

export const { reducer } = sampleSice;
export const sampleReducer = reducer;
