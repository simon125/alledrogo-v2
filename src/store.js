import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./redux/CounterSlice";

export const store = configureStore({
  reducer: combineReducers({
    counter: counterReducer,
  }),
});
