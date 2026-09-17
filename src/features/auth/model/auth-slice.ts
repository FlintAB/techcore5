import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { AuthSession, AuthState } from "./types";

const createInitialState = (): AuthState => ({
   status: "anonymous",
   user: null,
   accessToken: null,
   refreshToken: null,
});

export const authSlice = createSlice({
   name: "auth",
   initialState: createInitialState,
   reducers: {
      signedIn(
         _state,
         action: PayloadAction<AuthSession>,
      ): AuthState {
         return {
            status: "authenticated",
            ...action.payload,
         };
      },

      signedOut(): AuthState {
         return createInitialState();
      },
   },
});

export const { signedIn, signedOut } = authSlice.actions;
export const authReducer = authSlice.reducer;