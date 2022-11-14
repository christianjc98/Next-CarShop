import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./apiSlice";
import alertSlice from "../features/alerts/alertSlice";
import customersSlice from "../features/clients/customersSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    alert: alertSlice,
    customers: customersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
