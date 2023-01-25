import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { LOGIN } from "../../constants/api";

const initialState = {
  message: "",
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {},
    logout: () => sessionStorage.removeItem("user"),
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
