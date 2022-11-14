import { createSlice } from "@reduxjs/toolkit";

const customersSlice = createSlice({
  name: "customers",
  initialState: {
    customers: null,
    page: 1,
    numOfPages: null,
    totalCustomers: null,
    customerToModify: null,
  },
  reducers: {
    setCustomers: (state, action) => {
      const { customers, numOfPages, totalCustomers } = action.payload;
      state.customers = customers;
      state.numOfPages = numOfPages;
      state.totalCustomers = totalCustomers;
    },
    setCustomerToModify: (state, action) => {
      console.log(action.payload);
      const customerToModify = action.payload;
      state.customerToModify = customerToModify;
    },
  },
});

export const { setCustomers, setCustomerToModify } = customersSlice.actions;
export default customersSlice.reducer;

//Selectors
export const selectCustomers = (state) => state.customers.customers;
export const selectNumOfPages = (state) => state.customers.numOfPages;
export const selectTotalCustomers = (state) => state.customers.totalCustomers;
export const selectCustomerToModify = (state) =>
  state.customers.customerToModify;
