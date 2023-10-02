import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import routes from "../../../shared/constants/routes.ts";
import { BeerViewModel } from "../../../shared/apis/beerApi.ts";

export interface BeerListItemProps {
  item: BeerViewModel;
  index: React.Key;
}

export default function BeerListItem({
  item: { id, name, alcoholByValue, imageUrl, averagePrice },
  index,
}: BeerListItemProps) {
  let navigate = useNavigate();
  const onCardPress = useCallback(() => {
    navigate(routes.BEER_LIST.DETAILS.replace(":id", id.toString()));
  }, []);

  return (
    <Card shadow="sm" key={index} isPressable onPress={onCardPress}>
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={name}
          className="h-[240px] w-full object-cover"
          src={imageUrl}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <span>
          <b>{name}</b> ({alcoholByValue}%)
        </span>
        <p className="text-default-500">${averagePrice}</p>
      </CardFooter>
    </Card>
  );
}
