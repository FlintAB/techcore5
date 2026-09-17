export interface AuthUser {
   id: number;
   username: string;
}

export interface AuthSession {
   user: AuthUser;
   accessToken: string;
   refreshToken: string;
}

export type AuthState =
   | {
      status: "anonymous";
      user: null;
      accessToken: null;
      refreshToken: null;
   }
   | (
      {
         status: "authenticated";
      } & AuthSession
   );