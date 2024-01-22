import { getRoasters } from "../../../shared/apis/roasterApi.ts";
import { BASE_URL } from "../../../shared/constants/urls.ts";

const load = async () => {
  const { data } = await getRoasters();
  return data.map((it: { id: number; attributes: any }) => {
    const logo = it.attributes.logo?.data?.attributes?.formats?.thumbnail?.url;

    return {
      id: it.id,
      ...it.attributes,
      logo: logo ? `${BASE_URL}${logo}` : null,
    };
  });
};

export default load;
