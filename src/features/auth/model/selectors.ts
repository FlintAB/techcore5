import type { AuthState } from "./types";

export interface AuthSliceState {
   auth: AuthState;
}

export const selectAuthStatus = (state: AuthSliceState) =>
   state.auth.status;

export const selectUser = (state: AuthSliceState) =>
   state.auth.user;

export const selectIsAuthenticated = (state: AuthSliceState) =>
   state.auth.status === "authenticated";

export const selectAccessToken = (state: AuthSliceState) =>
   state.auth.accessToken;