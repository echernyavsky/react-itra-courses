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
import DrinksPage from "../features/drinks/list/DrinksPage.tsx";
import DrinkCreationPage from "../features/drinks/creation/DrinkCreationPage.tsx";
import drinksLoader from "../features/drinks/list/drinksLoader.ts";
import DrinkDetailsPage from "../features/drinks/details/DrinkDetailsPage.tsx";
import MoviesListPage from "../features/movies/moviesList/MoviesListPage.tsx";
import NewMoviePage from "../features/movies/newMovie/NewMoviePage.tsx";
import drinkDetailsLoader from "../features/drinks/details/drinkDetailsLoader.ts";
import { moviesListLoader } from "../features/movies/moviesList/moviesListLoader.ts";

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
      {
        path: routes.DRINKS.ROOT,
        children: [
          {
            index: true,
            loader: drinksLoader,
            element: <DrinksPage />,
          },
          {
            path: routes.DRINKS.NEW,
            element: <DrinkCreationPage />,
          },
          {
            path: routes.DRINKS.DETAILS,
            loader: drinkDetailsLoader,
            element: <DrinkDetailsPage />,
          },
        ],
      },
      {
        path: routes.MOVIES.ROOT,
        children: [
          {
            index: true,
            loader: moviesListLoader,
            element: <MoviesListPage />,
          },
          {
            path: routes.MOVIES.NEW,
            element: <NewMoviePage />,
          },
        ],
      },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
