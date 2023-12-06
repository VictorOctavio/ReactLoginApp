import { PUBLIC_ROUTES } from "@/models/Routes.model";
import { Navigate, Outlet } from "react-router-dom"

export const AuthGuard = ()  => {
  const token = false;
  return token ? <Outlet /> : <Navigate to={`/${PUBLIC_ROUTES.auth}`} replace={true}/>
}