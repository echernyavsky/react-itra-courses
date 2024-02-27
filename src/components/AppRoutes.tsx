import Home from "../features/home/Home.tsx";
import routes from "../shared/constants/routes.ts";
import BeerList from "../features/beer/list/BeerList.tsx";
import Breweries from "../features/breweries/list/Breweries.tsx";
import Login from "../features/auth/Login.tsx";
import Roasters from "../features/roasters/list/Roasters.tsx";
import NewRoasterPage from "../features/roasters/creation/NewRoasterPage.tsx";
import RoasterDetails from "../features/roasters/details/RoasterDetails.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ApplicationLayout from "./ApplicationLayout.tsx";
import roastersLoader from "../features/roasters/list/roastersLoader.ts";
import roasterDetailsLoader from "../features/roasters/details/roasterDetailsLoader.ts";

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <ApplicationLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routes.LOGIN,
        element: <Login />,
      },
      {
        path: routes.BEER_LIST.ROOT,
        children: [
          {
            index: true,
            element: <BeerList />,
          },
        ],
      },
      {
        path: routes.BREWERIES.ROOT,
        children: [
          {
            index: true,
            element: <Breweries />,
          },
        ],
      },
      {
        path: routes.ROASTERS.ROOT,
        children: [
          {
            index: true,
            loader: roastersLoader,
            element: <Roasters />,
          },
          {
            path: routes.ROASTERS.NEW,
            element: <NewRoasterPage />,
          },
          {
            path: routes.ROASTERS.DETAILS,
            loader: roasterDetailsLoader,
            element: <RoasterDetails />,
          },
        ],
      },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
