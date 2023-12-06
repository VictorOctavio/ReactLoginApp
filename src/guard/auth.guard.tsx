import { PUBLIC_ROUTES } from "@/models/Routes.model";
import { Navigate, Outlet } from "react-router-dom"

// Redux
import {useSelector} from "react-redux";
import { AppStore } from "@/redux/store";

export const AuthGuard = ()  => {
  const token = useSelector((store: AppStore) => store.user.token);
  return token ? <Outlet /> : <Navigate to={`/${PUBLIC_ROUTES.auth}`} replace={true}/>
}