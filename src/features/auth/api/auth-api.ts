import { z } from "zod";

import { baseApi } from "@/shared/api";

import { type AuthSession } from "../model/types";

import { type LoginRequestDto } from "./auth-api.types";

const loginResponseSchema = z.object({
   id: z.number(),
   username: z.string().min(1),
   accessToken: z.string().min(1),
   refreshToken: z.string().min(1),
})

const authApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      login: builder.mutation<AuthSession, LoginRequestDto>({
         query: (credentials) => ({
            url: '/auth/login',
            method: 'POST',
            body: credentials,
         }),

         transformResponse: (response: unknown): AuthSession => {
            const data = loginResponseSchema.parse(response);

            return {
               user: {
                  id: data.id,
                  username: data.username,
               },
               accessToken: data.accessToken,
               refreshToken: data.refreshToken,
            }
         }
      })
   })
})

export const { useLoginMutation } = authApi;