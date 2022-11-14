import { apiSlice } from "../../app/apiSlice";
import { setCustomers } from "./customersSlice";

export const customersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCustomers: builder.query({
      query: (page) => `/customer?page=${page}&sort=a-z`,
      providesTags: ["Customers"],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { customers, totalCustomers, numOfPages } = data;
          dispatch(setCustomers({ customers, totalCustomers, numOfPages }));
        } catch (err) {}
      },
    }),
    addCustomer: builder.mutation({
      query: (customer) => ({
        url: "/customer",
        method: "POST",
        body: customer,
      }),
      invalidatesTags: ["Customers"],
    }),
    deleteCustomer: builder.mutation({
      query: (id) => ({
        url: `/customer/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Customers"],
    }),
  }),
});

export const {
  useGetAllCustomersQuery,
  useAddCustomerMutation,
  useDeleteCustomerMutation,
} = customersApiSlice;
