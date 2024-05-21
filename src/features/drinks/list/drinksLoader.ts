import { getDrinks } from "../../../shared/apis/drinkApi.ts";
import { BASE_URL } from "../../../shared/constants/urls.ts";

export const loadDrinks = async (searchText?: string) => {
  const { data } = await getDrinks(searchText);
  return data.map((it: { id: number; attributes: any }) => {
    const image = it.attributes.image.data?.attributes?.formats?.thumbnail?.url;

    return {
      id: it.id,
      ...it.attributes,
      image: image ? `${BASE_URL}${image}` : null,
    };
  });
};

const load = () => loadDrinks();

export default load;
