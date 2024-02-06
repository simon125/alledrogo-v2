// krok 2 - configuracja stora

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./redux/CounterSlice";
import productsReducer from "./redux/ProductsSlice";

export const store = configureStore({
  /**
   * combineReducers funkcja łącząca wszystkie kawałki stanu w jeden
   */
  reducer: combineReducers({
    counter: counterReducer,
    products: productsReducer,
    // propsDrilling:

    // np.
    // products: ,
    // counter: ,
    // recipes: ,
  }),
});

// Jak może wyglądać stan globalny aplikacji
// const state = {
//     todos: [],
//     users: [],
//     cart: {
//     }
// }
