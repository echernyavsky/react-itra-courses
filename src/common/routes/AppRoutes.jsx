import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../app/auth/login/Login";
import Home from "../../app/home/Home";
import routes from "../../shared/constants/routes";
import AirTravelCreationForm from "../../app/airTravels/creation/AirTravelCreationForm";
import AirTravelList from "../../app/airTravels/list/AirTravelList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.LOGIN} element={<Login />} />
      <Route path={routes.AIR_TRAVEL.ROOT} element={<AirTravelList />} />
      <Route path={routes.AIR_TRAVEL.NEW} element={<AirTravelCreationForm />} />
    </Routes>
  );
}
