import { RoasterForm } from "../../features/roasters/creation/validationSchema.ts";
import urls from "../constants/urls.ts";
import axios from "axios";

export const createRoaster = (data: RoasterForm) =>
  axios.post(urls.ROASTERS, { data });

export const getRoasters = async () => {
  const response = await axios.get(`${urls.ROASTERS}?populate=logo`);
  return response.data;
};
