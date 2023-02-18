import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { selectAuthStatus } from "redux/auth/authSelectors";
import { refreshUser } from "redux/auth/authThunk";
import { Layout } from "components/Layout/Layout";
import { AUTH_STATUS } from "constants/constants";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import("pages/Home/Home"));
const RegisterPage = lazy(() => import("pages/Register/Register"));
const LoginPage = lazy(() => import("pages/Login/Login"));
const ContactsPage = lazy(() => import("pages/Contacts/Contacts"));

export const App = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus); 

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return authStatus !== AUTH_STATUS.refreshing && (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} /> } />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} /> } />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
      </Route>
    </Routes>
  ); 
};