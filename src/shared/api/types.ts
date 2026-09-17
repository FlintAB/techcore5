export interface ApiRootState {
   auth: {
      accessToken: string | null;
   };
}

export const isApiRootState = (
   state: unknown,
): state is ApiRootState => {
   if (
      typeof state !== "object" ||
      state === null ||
      !("auth" in state)
   ) {
      return false;
   }

   const auth = state.auth;

   if (
      typeof auth !== "object" ||
      auth === null ||
      !("accessToken" in auth)
   ) {
      return false;
   }

   return (
      typeof auth.accessToken === "string" ||
      auth.accessToken === null
   );
};