import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../app/auth/login/Login";
import Home from "../../app/home/Home";
import routes from "../../shared/constants/routes";
import TravelPointsPage from "../../app/travelPoints/TravelPointsPage";
import TravelPointForm from "../../app/travelPoints/travelPointForm/TravelPointForm";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.LOGIN} element={<Login />} />
      <Route path={routes.TRAVEL_POINTS} element={<TravelPointsPage />} />
      <Route path={routes.TRAVEL_POINTS_NEW} element={<TravelPointForm />} />
    </Routes>
  );
}
