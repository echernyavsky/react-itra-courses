import {
  BreweryViewModel,
  getBreweries,
} from "../../../shared/apis/breweryApi.ts";
import { useEffect, useState } from "react";
import BreweryListItem from "./BreweryListItem.tsx";

export default function Breweries() {
  const [breweries, setBreweries] = useState<BreweryViewModel[]>([]);

  useEffect(() => {
    (async () => {
      const responseData = await getBreweries();
      setBreweries(responseData);
    })();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {breweries.map((item, index) => (
        <BreweryListItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
