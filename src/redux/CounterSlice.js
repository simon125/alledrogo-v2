/**
 * krok 5 dodanie pierwszego kawałka (slice) stanu do aplikacji
 */

import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

// const [counter, setCounter] = useState(/* initialState np dla counter 0*/);
/**
 * slice to taki useState na sterydach
 */
const counterSlice = createSlice({
  // ctrl + spacja !!!!! menu kontekstowe do sprawdzenia co trzeba skonfigurować
  initialState: {
    // dobrze jest jak initalState jest jakimś obiektem albo tablicą
    value: 0,
  },
  name: "trelemorele",
  reducers: {
    // reducers - określamy akcje za pomocą których możemy wpłynąć na nasz stan
    // w porównaniu do useState możesz myśleć o tym jak o funkcji setującej
    increment: (state /* to obiekt z danego slice patrz initialValue*/) => {
      state.value += 1;
    },
    decrement: (state) => {
      // state.value -= 1;
      state.value = state.value - 1;
      console.log(123);
      [].map();
    },
    // 1)
    // reset: (state) => {
    //   state.value = 0;
    // },
    // 2)
    // reset: () => {
    //   const initialState = { trelemorele: 0 };
    //   return initialState;
    // },
    // 3)
    reset: () => ({ value: 0 }), // jeżeli reducer zwraca COŚ to to COŚ będzie nową wartością stanu
    // addCustomValue: ,
  },
});

/**
 * export akcji tak żeby były dostępne w całej naszej aplikacji
 * akcje wykorzystujemy np na eventach/efektach onClick, onSubmit, useEffect
 */
export const { decrement, increment, reset } = counterSlice.actions;

/**
 * export reducera potrzebnego storowi
 * tzn musi on byc zaimportowany do miejsca z konfiguracją stora
 * i umieszczony w funcji combineReducers
 */
export default counterSlice.reducer;
