import React, { useState } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const [Auth, setAuth] = useState(true);

  return Auth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
