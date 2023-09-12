import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebarToggle",
  initialState: {
    isSidebarOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggalClosed: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleMenu, toggalClosed } = sidebarSlice.actions;
export default sidebarSlice.reducer;
