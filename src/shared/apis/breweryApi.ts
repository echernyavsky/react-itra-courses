import axios from "axios";
import urls from "../constants/urls.ts";

interface BreweryAttributes {
  name: string;
  description: string;
  shortDescription: string;
  url: string;
  imageUrl: string;
}

interface Brewery {
  id: number;
  attributes: BreweryAttributes;
}

export type BreweryViewModel = Omit<Brewery & BreweryAttributes, "attributes">;

export const getBreweries = async () => {
  const response = await axios.get<{ data: Brewery[] }>(urls.BREWERIES);
  return response.data.data.map(
    (item: Brewery): BreweryViewModel => ({
      id: item.id,
      ...item.attributes,
    }),
  );
};
