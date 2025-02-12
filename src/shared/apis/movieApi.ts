import axios from "axios";
import urls, { BASE_URL } from "../constants/urls";

export const createMovie = async (data) => axios.post(urls.MOVIES, { data });

export const getMovies = async () => {
  const { data } = await axios.get(`${urls.MOVIES}?populate=posterUrl`);
  return data.data.map((movie) => {
    const posterUrl = `${BASE_URL}${movie.attributes.posterUrl?.data?.attributes?.formats?.medium?.url}`;

    return {
      id: movie.id,
      ...movie.attributes,
      posterUrl,
    };
  });
};
