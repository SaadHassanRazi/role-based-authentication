import React from "react";
import { useAuth } from "../authContext/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const user = useAuth();
  if (!user.token) {
    <Navigate to={"/login"} />;
  } else {
    return <Outlet />;
  }
}

export default ProtectedRoute;
