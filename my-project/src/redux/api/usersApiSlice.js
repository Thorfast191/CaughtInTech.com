import { apiSlice } from "./apiSlice.js";
import { USERS_URL } from "../features/constants.js";

export const userApiSLice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { userLoginMutation } = userApiSLice;
