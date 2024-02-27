import { Button, Input } from "@nextui-org/react";
import RoastersTable from "./RoastersTable.tsx";
import { useLoaderData, useNavigate } from "react-router";
import routes from "../../../shared/constants/routes.ts";
import { Roaster } from "../../../shared/types/roaster.ts";
import { FormattedMessage } from "react-intl";
import { useState } from "react";
import { getRoasters } from "../../../shared/apis/roasterApi.ts";
import { BASE_URL } from "../../../shared/constants/urls.ts";

export default function Roasters() {
  const roasters = useLoaderData() as Roaster[];
  const navigate = useNavigate();

  const [loadedRoasters, setLoadedRoasters] = useState(roasters);

  const onCreateNewRoasterClick = () => {
    navigate(routes.ROASTERS.NEW);
  };

  const onSearchChange = async (e) => {
    const searchText = e.target.value;
    const { data } = await getRoasters(searchText);
    setLoadedRoasters(
      data.map((it: { id: number; attributes: any }) => {
        const logo =
          it.attributes.logo?.data?.attributes?.formats?.thumbnail?.url;

        return {
          id: it.id,
          ...it.attributes,
          logo: logo ? `${BASE_URL}${logo}` : null,
        };
      }),
    );
  };

  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1>
            <FormattedMessage id="roasters.page.title" />
          </h1>
        </div>
        <div className="my-4">
          <Button color="primary" onClick={onCreateNewRoasterClick}>
            <FormattedMessage id="roasters.page.create-new-roaster" />
          </Button>
        </div>
      </div>
      <div className="my-2">
        <div>
          <Input onChange={onSearchChange} label="Search by name" />
        </div>
        <div className="mt-2">
          <RoastersTable rows={loadedRoasters} />
        </div>
      </div>
    </>
  );
}
