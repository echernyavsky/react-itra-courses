import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import routes from "../../../shared/constants/routes.ts";
import RoastersBreadcrumbs from "../components/RoastersBreadcrumbs.tsx";
import { useLoaderData } from "react-router";
import { Roaster } from "../../../shared/types/roaster.ts";
import Markdown from "react-markdown";

export default function RoasterDetails() {
  const roaster = useLoaderData() as Roaster;

  return (
    <>
      <div>
        <RoastersBreadcrumbs
          currentRoute={routes.ROASTERS.DETAILS.replace(
            ":id",
            roaster.id.toString(),
          )}
          currentRouteName={roaster.name}
        />
      </div>
      <Card className="mt-4 py-4">
        <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
          <p className="text-tiny font-bold uppercase">{roaster.location}</p>
          <small className="text-default-500">ID: {roaster.id}</small>
          <h4 className="text-large font-bold">{roaster.name}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={roaster.name}
            className="rounded-xl object-cover"
            src={roaster.logo}
            width={270}
          />
          <p>
            <Markdown>{roaster.description}</Markdown>
          </p>
        </CardBody>
      </Card>
    </>
  );
}
