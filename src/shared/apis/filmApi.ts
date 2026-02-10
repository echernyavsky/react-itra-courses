import axios from "axios";
import { FilmForm } from "../../features/films/creation/validationScheme";
import urls, { BASE_URL } from "../constants/urls";

export type Film = {
  id: number;
  name: string;
  description: string;
  posterUrl: string;
  genre: string;
  year: number;
  publishedAt: string;
};

export const createFilm = async (data: FilmForm) => {
  const response = await axios.post(urls.FILMS, { data });
  return response.data;
};

export const getFilms = async (searchText?: string) => {
  let url = `${urls.FILMS}?populate=poster`;

  if (searchText) {
    url = `${url}&filters[name][$contains]=${searchText}`;
  }

  const { data } = await axios.get(url);
  return data.data.map(
    (film: any): Film => ({
      ...film,
      posterUrl: `${BASE_URL}${film.poster.formats.thumbnail.url}`,
    }),
  );
};
