// export const BASE_URL = "http://localhost:1337/api";
export const BASE_URL = import.meta.env.VITE_BASE_BACKEND_URL;
export const BASE_API_URL = `${BASE_URL}/api`;

const urls = {
  BEERS: `${BASE_API_URL}/beers`,
  BEERS_COUNT: `${BASE_API_URL}/beers/count/view`,
  BREWERIES: `${BASE_API_URL}/brewers`,
  ROASTERS: `${BASE_API_URL}/roasters`,
  UPLOAD: `${BASE_API_URL}/upload`,
};

export default urls;
