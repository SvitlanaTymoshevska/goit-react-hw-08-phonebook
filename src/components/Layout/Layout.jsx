import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "components/AppBar/AppBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Wrapper } from "components/Layout/Layout.styled";

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Wrapper>
  );
};