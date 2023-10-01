import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../app/auth/login/Login.jsx";
import Home from "../../app/home/Home.jsx";
import routes from "../../shared/constants/routes.js";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.LOGIN} element={<Login />} />
    </Routes>
  );
}
