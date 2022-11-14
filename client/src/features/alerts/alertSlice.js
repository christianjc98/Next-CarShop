import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: false,
  alertType: "",
  alertText: "",
};
const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    loginSuccessful: (state, action) => {
      state.alert = true;
      state.alertText = "Login Successful! Redirecting...";
      state.alertType = "success";
    },
    loginInvalid: (state, action) => {
      state.alert = true;
      state.alertText = "Invalid credentials";
      state.alertType = "danger";
    },
    clearAlerts: (state, action) => {
      state.alert = false;
      state.alertText = "";
      state.alertType = "";
    },
  },
});

export const { loginSuccessful, loginInvalid, clearAlerts } =
  alertSlice.actions;

export default alertSlice.reducer;

//Selectors
export const selectAlert = (state) => state.alert.alert;
export const selectAlertType = (state) => state.alert.alertType;
export const selectAlertText = (state) => state.alert.alertText;
