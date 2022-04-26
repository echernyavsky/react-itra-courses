import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../app/auth/login/Login";
import Home from "../../app/home/Home";
import routes from "../../shared/constants/routes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.LOGIN} element={<Login />} />
    </Routes>
  );
}
