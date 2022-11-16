import { apiSlice } from "../../app/apiSlice";
import { setCustomers } from "./customersSlice";

export const customersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCustomers: builder.query({
      query: ({ page, search }) => ({
        url: `/customer?page=${page}&sort=a-z&search=${search}`,
      }),
      providesTags: ["Customers"],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { customers, totalCustomers, numOfPages } = data;
          dispatch(setCustomers({ customers, totalCustomers, numOfPages }));
        } catch (err) {}
      },
    }),
    getCustomerById: builder.query({
      query: (id) => ({
        url: `/customer/${id}`,
      }),
      providesTags: ["Customers"],
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
  useLazyGetAllCustomersQuery,
  useLazyGetCustomerByIdQuery,
} = customersApiSlice;
