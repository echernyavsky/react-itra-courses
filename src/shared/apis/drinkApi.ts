import { DrinkForm } from "../../features/drinks/creation/validationSchema.ts";
import axios from "axios";
import urls from "../constants/urls.ts";

export const createDrink = (data: DrinkForm) =>
  axios.post(urls.DRINKS, { data });

export const getDrinks = async (searchText?: string) => {
  let url = `${urls.DRINKS}?populate=image&pagination[pageSize]=10&sort=id:desc`;
  if (searchText) {
    url = `${url}&filters[name][$contains]=${searchText}`;
  }

  const response = await axios.get(url);
  return response.data;
};

export const getDrink = async (id: number) => {
  const url = `${urls.DRINKS}?populate=image&filters[id]=${id}`;
  const response = await axios.get(url);
  return response.data;
};
