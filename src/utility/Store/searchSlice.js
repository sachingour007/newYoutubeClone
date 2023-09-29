import { autoBatchEnhancer, createSlice } from "@reduxjs/toolkit";

const serachSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResult: (state, action) => {
      console.log(action);
      state = Object.assign(state, action.payload)
    },
  },
});

export const { cacheResult } = serachSlice.actions;
export default serachSlice.reducer;
