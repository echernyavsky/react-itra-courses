import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useLoaderData } from "react-router";
import { Drink } from "../../../shared/types/drink.ts";

export default function DrinkDetailsPage() {
  const drink = useLoaderData() as Drink;

  return (
    <Card className="py-4">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <p className="text-tiny font-bold uppercase">{drink.brand}</p>
        <small className="text-default-500">
          {drink.volumeInMilliliters} ml
        </small>
        <h4 className="text-large font-bold">{drink.name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="rounded-xl object-cover"
          src={drink.image}
          width={270}
        />
        <p>{drink.description}</p>
      </CardBody>
    </Card>
  );
}
