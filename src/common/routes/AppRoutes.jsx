import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../app/auth/login/Login";
import Home from "../../app/home/HomeLocalized.jsx";
import routes from "../../shared/constants/routes";
import EmailTemplatesList from "../../app/emailTemplates/list/EmailTemplatesList.jsx";
import NewEmailTemplate from "../../app/emailTemplates/creation/NewEmailTemplate.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.LOGIN} element={<Login />} />
      <Route path={routes.EMAIL_TEMPLATES.ROOT} element={<EmailTemplatesList />} />
      <Route path={routes.EMAIL_TEMPLATES.NEW} element={<NewEmailTemplate />} />
    </Routes>
  );
}
