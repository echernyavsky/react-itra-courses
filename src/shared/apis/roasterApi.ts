import { RoasterForm } from "../../features/roasters/creation/validationSchema.ts";
import urls from "../constants/urls.ts";
import axios from "axios";

export const createRoaster = (data: RoasterForm) =>
  axios.post(urls.ROASTERS, { data });

export const getRoasters = async (searchText?: string) => {
  let url = `${urls.ROASTERS}?populate=logo`;
  if (searchText) {
    url = `${url}&filters[name]=${searchText}`;
  }

  const response = await axios.get(url);
  return response.data;
};

export const getRoaster = async (id: number) => {
  const response = await axios.get(
    `${urls.ROASTERS}?populate=logo&filters[id]=${id}`,
  );
  return response.data;
};

export const deleteRoaster = (id: number) =>
  axios.delete(`${urls.ROASTERS}/${id}`);
