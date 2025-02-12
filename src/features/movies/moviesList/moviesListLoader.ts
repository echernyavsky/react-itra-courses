import { getMovies } from "../../../shared/apis/movieApi.ts";

export const moviesListLoader = async () => {
  return {
    movies: await getMovies(),
  };
};
