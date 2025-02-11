import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router";
import routes from "../../../shared/constants/routes.ts";

export default function MoviesListPage() {
  const navigate = useNavigate();
  const onCreateNewMovieClick = () => {
    navigate(routes.MOVIES.NEW);
  };

  return (
    <div className="flex justify-between">
      <div>
        <h1>Movies List</h1>
      </div>
      <div>
        <Button variant="bordered" onClick={onCreateNewMovieClick}>
          Create new movie
        </Button>
      </div>
    </div>
  );
}
