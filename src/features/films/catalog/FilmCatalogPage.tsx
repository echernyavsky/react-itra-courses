import { Button, Input } from "@heroui/react";
import routes from "../../../shared/constants/routes";
import { useLoaderData, useNavigate } from "react-router";
import FilmCatalog from "./FilmCatalog";
import { Film } from "../../../shared/apis/filmApi";
import { useState } from "react";
import { getFilms } from "../../../shared/apis/filmApi";

export default function FilmCatalogPage() {
  const { films } = useLoaderData() as { films: Film[] };
  const [loadedFilms, setLoadedFilms] = useState<Film[]>(films);
  const navigate = useNavigate();

  const onCreateNewFilmClick = () => {
    navigate(routes.FILMS.NEW);
  };

  const onSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    const data = await getFilms(searchText);
    setLoadedFilms(data);
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1>Film Catalog</h1>
        </div>
        <div>
          <Button color="primary" onPress={onCreateNewFilmClick}>
            Create a new film
          </Button>
        </div>
      </div>
      <div>
        <Input label="Search by name" onChange={onSearchChange} />
      </div>
      <div>
        <FilmCatalog films={loadedFilms} />
      </div>
    </div>
  );
}
