import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  initialState: {
    value: 0,
  },
  name: "counter",
  reducers: {
    increment: (state, action) => {
      // state.value = state.value + 1
      state.value += 1;
    },
    addCustomValue: (state, action) => {
      //
      //   <button onClick={() => dispatch(addCustomValue(20))}>
      //     Add custom value
      //   </button>;
      //   state.value += action.payload;  // payloadem w tym przypadku będzie argument przekazany do dispatch(addCustomValue(20)) czyli 20

      state.value += action.payload * 1;
    },
  },
});

export const { increment, addCustomValue } = counterSlice.actions;

export default counterSlice.reducer;
