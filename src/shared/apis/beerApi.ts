import axios from "axios";
import urls from "../constants/urls.ts";

interface BeerAttributes {
  name: string;
  alcoholByValue: number;
  internationalBitternessUnits: number;
  description: string;
  locale: string;
  imageUrl: string;
  averagePrice: number;
}

interface Beer {
  id: number;
  attributes: BeerAttributes;
}

export type BeerViewModel = Omit<Beer & BeerAttributes, "attributes">;

export const getBeers: () => Promise<BeerViewModel[]> = async () => {
  const response = await axios.get<{ data: Beer[] }>(urls.BEERS);
  return response.data.data.map(
    (beer: Beer): BeerViewModel => ({
      id: beer.id,
      ...beer.attributes,
    }),
  );
};

export interface BeerCounters {
  beersCount: number;
  breweriesCount: number;
}

export const getBeersCount: () => Promise<BeerCounters> = async () => {
  const response = await axios.get<BeerCounters>(urls.BEERS_COUNT);
  return response.data;
};
