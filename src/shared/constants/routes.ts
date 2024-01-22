const routes = {
  HOME: "/",
  EMAIL_TEMPLATES: {
    ROOT: "/email-templates",
    NEW: "/email-templates/new",
  },
  LOGIN: "/login",
  SIGN_UP: "/sign-up",
  BREWERIES: {
    ROOT: "/breweries",
    NEW: "/breweries/new",
    DETAILS: "/breweries/:id",
  },
  BEER_LIST: {
    ROOT: "/beers",
    NEW: "/beers/new",
    DETAILS: "/beers/:id",
  },
  ROASTERS: {
    ROOT: "/roasters",
    NEW: "/roasters/new",
    DETAILS: "/roasters/:id",
  },
};

export default routes;
