import { getDrink } from "../../../shared/apis/drinkApi.ts";
import { BASE_URL } from "../../../shared/constants/urls.ts";

const load = async ({ params }) => {
  const { data } = await getDrink(params.id);
  const drink = data[0];

  const image =
    drink.attributes.image.data?.attributes?.formats?.thumbnail?.url;
  return {
    id: drink.id,
    ...drink.attributes,
    image: image ? `${BASE_URL}${image}` : null,
  };
};

export default load;
