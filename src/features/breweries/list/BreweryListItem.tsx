import { CardBody, CardHeader, Image, Card } from "@nextui-org/react";
import { BreweryViewModel } from "../../../shared/apis/breweryApi.ts";

interface BreweryListItemProps {
  item: BreweryViewModel;
  index: React.Key;
}

export default function BreweryListItem({
  item: { name, imageUrl },
  index,
}: BreweryListItemProps) {
  return (
    <Card className="py-4" key={index}>
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <small className="text-default-500">TBD Beers</small>
        <h4 className="text-large font-bold">{name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={name}
          className="rounded-xl object-cover"
          src={imageUrl}
          width={270}
        ></Image>
      </CardBody>
    </Card>
  );
}
