import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";
import { getNewToken } from "./Redux/auth/authSlice";
const isLoginOrSignupRequest = (url) => {
  const loginEndpoint = "/login/";
  const signupEndpoint = "/register/";

  return url.endsWith(loginEndpoint) || url.endsWith(signupEndpoint);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (
      err.response.status === 401 &&
      !isLoginOrSignupRequest(err.config.url)
    ) {
      store.dispatch(getNewToken());
    }
    throw err;
  }
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
