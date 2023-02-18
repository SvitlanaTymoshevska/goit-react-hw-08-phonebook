import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthStatus } from "redux/auth/authSelectors";
import { AUTH_STATUS } from "constants/constants";

export const RestrictedRoute = ({ redirectTo = "/", component: Component }) => {
    const authStatus = useSelector(selectAuthStatus);
    return authStatus === AUTH_STATUS.logIn ? <Navigate to={redirectTo} /> : Component;
};