import { Listbox, ListboxItem } from "@nextui-org/react";
import ItemCounter from "./ItemCounter.tsx";
import { useNavigate } from "react-router";
import routes from "../shared/constants/routes.ts";
import { useEffect, useState } from "react";
import { BeerCounters, getBeersCount } from "../shared/apis/beerApi.ts";

export default function Sidebar() {
  let navigate = useNavigate();
  const [beerCounters, setBeerCounters] = useState<BeerCounters>({
    beersCount: 0,
    breweriesCount: 0,
  });

  useEffect(() => {
    (async () => {
      const counters = await getBeersCount();
      setBeerCounters(counters);
    })();
  }, []);

  return (
    <Listbox
      aria-label="User Menu"
      onAction={(key) => navigate(key as string)}
      className="divide-default-300/50 dark:divide-default-100/80 bg-content1 shadow-small rounded-medium gap-0 divide-y overflow-visible p-0"
      itemClasses={{
        base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
      }}
    >
      <ListboxItem key={routes.HOME}>Home page</ListboxItem>
      <ListboxItem
        key={routes.BREWERIES.ROOT}
        endContent={<ItemCounter count={beerCounters.breweriesCount} />}
      >
        Breweries
      </ListboxItem>
      <ListboxItem
        key={routes.BEER_LIST.ROOT}
        endContent={<ItemCounter count={beerCounters.beersCount} />}
      >
        Beer Collection
      </ListboxItem>
    </Listbox>
  );
}
