import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../app/auth/login/Login";
import Home from "../../app/home/Home";
import routes from "../../shared/constants/routes";
import AirTravelsList from "../../app/airTravels/list/AirTravelsList";
import AirTravelCreationPage from "../../app/airTravels/creationForm/AirTravelCreationPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.AIR_TRAVELS} element={<AirTravelsList />} />
        <Route path={routes.NEW_AIR_TRAVEL} element={<AirTravelCreationPage />} />
    </Routes>
  );
}
