import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import routes from "../../../shared/constants/routes.ts";
import RoastersBreadcrumbs from "../components/RoastersBreadcrumbs.tsx";

export default function RoasterDetails() {
  const roaster = {
    id: 4,
    name: "Coffee Roasters",
    year: 2023,
    createdAt: "2024-01-16T16:25:25.056Z",
    location: "Poland",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    logo: "http://localhost:1337/uploads/thumbnail_crs_sklep_logo_1_a04327b466.png",
  };

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
          <p>{roaster.description}</p>
        </CardBody>
      </Card>
    </>
  );
}
