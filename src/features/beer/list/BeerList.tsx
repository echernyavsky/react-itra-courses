import BeerListItem from "./BeerListItem.tsx";
import { useEffect, useState } from "react";
import { BeerViewModel, getBeers } from "../../../shared/apis/beerApi.ts";

export default function BeerList() {
  const [beers, setBeers] = useState<BeerViewModel[]>([]);

  useEffect(() => {
    (async () => {
      const responseData = await getBeers();
      setBeers(responseData);
    })();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
      {beers.map((item, index) => (
        <BeerListItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
