import { Button } from "@heroui/react";
import { useLoaderData, useNavigate } from "react-router";
import routes from "../../../shared/constants/routes.ts";
import MoviesList from "./MoviesList.tsx";
import Movie from "../../../shared/types/movie.ts";

export default function MoviesListPage() {
  const { movies } = useLoaderData() as { movies: Movie[] };
  const navigate = useNavigate();
  const onCreateNewMovieClick = () => {
    navigate(routes.MOVIES.NEW);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h1>Movies List</h1>
        </div>
        <div>
          <Button variant="bordered" onPress={onCreateNewMovieClick}>
            Create new movie
          </Button>
        </div>
      </div>
      <div>
        <MoviesList movies={movies} />
      </div>
    </div>
  );
}
