import { Button, Input } from "@heroui/react";
import { useLoaderData, useNavigate } from "react-router";
import routes from "../../../shared/constants/routes.ts";
import DrinksTable from "./DrinksTable.tsx";
import { Drink } from "../../../shared/types/drink.ts";
import { loadDrinks } from "./drinksLoader.ts";
import { useState } from "react";

export default function DrinksPage() {
  const navigate = useNavigate();
  const drinks = useLoaderData() as Drink[];

  const [loadedDrinks, setLoadedDrinks] = useState(drinks);

  const onCreateNewDrinkClick = () => {
    navigate(routes.DRINKS.NEW);
  };

  const onSearchChange = async (e) => {
    const searchText = e.target.value;
    const data = await loadDrinks(searchText);
    setLoadedDrinks(data);
  };

  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1>Drink page</h1>
        </div>
        <div>
          <Button color="primary" onClick={onCreateNewDrinkClick}>
            Create a new drink
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <Input onChange={onSearchChange} label="Search by name" />
        </div>
        <div className="mt-2">
          <DrinksTable rows={loadedDrinks} />
        </div>
      </div>
    </>
  );
}
