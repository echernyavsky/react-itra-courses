import { getRoaster } from "../../../shared/apis/roasterApi.ts";
import { BASE_URL } from "../../../shared/constants/urls.ts";

const loader = async ({ params }) => {
  const { data } = await getRoaster(params.id);
  const roaster = data[0];

  const logo = roaster.attributes.logo?.data?.attributes?.url;

  return {
    id: roaster.id,
    ...roaster.attributes,
    logo: logo ? `${BASE_URL}${logo}` : null,
  };
};

export default loader;
