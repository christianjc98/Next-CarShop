import { createSlice } from "@reduxjs/toolkit";

const customersSlice = createSlice({
  name: "customers",
  initialState: {
    customers: null,
    page: 1,
    numOfPages: null,
    totalCustomers: null,
    customerToModify: null,
    customerSearch: "",
  },
  reducers: {
    setCustomers: (state, action) => {
      const { customers, numOfPages, totalCustomers } = action.payload;
      state.customers = customers;
      state.numOfPages = numOfPages;
      state.totalCustomers = totalCustomers;
    },
    setCustomerToModify: (state, action) => {
      const customerToModify = action.payload;
      state.customerToModify = customerToModify;
    },
    setCustomerSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setCustomers, setCustomerToModify, setCustomerSearch } =
  customersSlice.actions;
export default customersSlice.reducer;

//Selectors
export const selectCustomers = (state) => state.customers.customers;
export const selectNumOfPages = (state) => state.customers.numOfPages;
export const selectTotalCustomers = (state) => state.customers.totalCustomers;
export const selectCustomerToModify = (state) =>
  state.customers.customerToModify;
export const selectCustomerSearch = (state) => state.customers.customerSearch;
