import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    refreshToken: localStorage.getItem("refreshToken"),

    isLogged:
      localStorage.getItem("token") || localStorage.getItem("refreshToken")
        ? true
        : false,
    errorMessage: "",
    username: null,
    password: null,
  },
  reducers: {
    logIn: (state, action) => {
      const { username, password } = action.payload;
      state.username = username;
      state.password = password;
    },

    logInSuccess: (state, action) => {
      const { access, refresh } = action.payload;

      localStorage.setItem("token", access);
      localStorage.setItem("refreshToken", refresh);

      state.isLogged = true;
      state.token = access;
      state.refreshToken = refresh;
      state.errorMessage = "";
    },
    logInFail: (state, action) => {
      const { data } = action.payload;

      state.errorMessage = data.detail;
    },

    logOut: (state, action) => {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      state.token = null;
      state.refreshToken = null;
      state.isLogged = false;
      state.errorMessage = "";
    },
    getUserDetail: (state) => {},
    setUserName: (state, action) => {
      state.username = action.payload[0].username;
    },
    getNewToken: (state) => {},
    getNewTokenSuccess: (state, action) => {
      const { access } = action.payload;

      localStorage.setItem("token", access);

      state.isLogged = true;
      state.token = access;
    },
    signUp: (state, action) => {
      const { username, password } = action.payload;
      state.username = username;
      state.password = password;
    },
    signUpFailed: (state, action) => {
      const { data } = action.payload;

      state.errorMessage = data.username[0];
    },
    removeErrorMessage: (state) => {
      state.errorMessage = "";
    },
  },
});

export default authSlice;
export const {
  logIn,
  logOut,
  logInFail,
  logInSuccess,
  getUserDetail,
  setUserName,
  getNewToken,
  getNewTokenSuccess,
  signUp,
  signUpFailed,
  removeErrorMessage,
} = authSlice.actions;
