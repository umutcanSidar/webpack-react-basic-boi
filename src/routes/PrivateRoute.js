import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const login = useSelector((state) => state.login);
  const { userInfo } = login;

  return userInfo ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
