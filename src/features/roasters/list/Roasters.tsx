import { Button } from "@nextui-org/react";
import RoastersTable from "./RoastersTable.tsx";
import { useLoaderData, useNavigate } from "react-router";
import routes from "../../../shared/constants/routes.ts";
import { Roaster } from "../../../shared/types/roaster.ts";
import { FormattedMessage } from "react-intl";

export default function Roasters() {
  const roasters = useLoaderData() as Roaster[];
  const navigate = useNavigate();

  const onCreateNewRoasterClick = () => {
    navigate(routes.ROASTERS.NEW);
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
        <RoastersTable rows={roasters} />
      </div>
    </>
  );
}
