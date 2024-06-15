import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
  name: "isauth",
  initialState: {
    value: false,
  },
  reducers: {
    login: (state) => {
      state.value = true;
      console.log("estamos en Store con valor: " + state.value); 
    },
    logout: (state) => {
      state.value = false;
      console.log("estamos en Store con valor: " + state.value);
    },
    Google: (state) => {
      state.value = true;
    },
  },
});

export const { login, logout, Google } = authSlice.actions;
export default authSlice.reducer;
