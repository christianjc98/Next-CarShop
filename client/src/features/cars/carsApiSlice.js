import { apiSlice } from "../../app/apiSlice";
export const customersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCarsByCustomerId: builder.query({
      query: ({ id }) => ({
        url: `customer/${id}/cars`,
      }),
      providesTags: ["Customers"],
    }),
  }),
});

export const { useLazyGetCarsByCustomerIdQuery } = customersApiSlice;
