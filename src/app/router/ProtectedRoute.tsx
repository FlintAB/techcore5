import { Navigate, Outlet } from "react-router-dom";

import { selectAccessToken } from "@/features/auth/model/selectors"
import { ROUTES } from "@/shared/config/routes";

import { useAppSelector } from "../store/hook";

export const ProtectedRoute = () => {
   const accessToken = useAppSelector(selectAccessToken);

   if (!accessToken) {
      return (
         <Navigate to={ROUTES.login} replace={true} />
      )
   }
   
   return <Outlet />
}