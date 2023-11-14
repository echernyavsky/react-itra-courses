import { Route, Routes } from "react-router";
import Home from "../features/home/Home.tsx";
import routes from "../shared/constants/routes.ts";
import EmailTemplates from "../features/emailTemplates/EmailTemplates.tsx";
import BeerList from "../features/beer/list/BeerList.tsx";
import Breweries from "../features/breweries/list/Breweries.tsx";
import Login from "../features/auth/Login.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.EMAIL_TEMPLATES.ROOT} element={<EmailTemplates />} />
      <Route path={routes.BEER_LIST.ROOT} element={<BeerList />} />
      <Route path={routes.BREWERIES.ROOT} element={<Breweries />} />
      <Route path={routes.LOGIN} element={<Login />} />
    </Routes>
  );
}
