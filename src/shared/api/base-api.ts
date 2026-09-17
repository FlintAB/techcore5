import {
   createApi,
   fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { isApiRootState } from "./types";

const API_BASE_URL = "https://dummyjson.com";

export const baseApi = createApi({
   reducerPath: "api",

   baseQuery: fetchBaseQuery({
      baseUrl: API_BASE_URL,

      prepareHeaders: (headers, { getState }) => {
         const state = getState();

         if (
            isApiRootState(state) &&
            state.auth.accessToken
         ) {
            headers.set(
               "Authorization",
               `Bearer ${state.auth.accessToken}`,
            );
         }

         return headers;
      },
   }),

   endpoints: () => ({}),
});