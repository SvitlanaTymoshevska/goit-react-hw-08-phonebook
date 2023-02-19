import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthStatus } from "redux/auth/authSelectors";
import { AUTH_STATUS } from "constants/constants";

export const PrivateRoute = ({ redirectTo = "/", component: Component}) => {
    const authStatus = useSelector(selectAuthStatus);
    const shouldRedirect = authStatus !== AUTH_STATUS.logIn && authStatus !== AUTH_STATUS.refreshing;
    return shouldRedirect ? <Navigate to={redirectTo} replace /> : Component;
};