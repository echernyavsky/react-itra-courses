import { Link } from "react-router-dom";
import { Film } from "../../../shared/apis/filmApi";

export default function FilmCatalog({ films }: { films: Film[] }) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
      {films.map((film: Film, index: number) => (
        <Link
          to={`/movies/${film.id}`}
          className={`movie-card group block transform animate-fade-in rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-lg dark:bg-card`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="aspect-[2/3] overflow-hidden rounded-2xl">
            <img
              src={film.posterUrl}
              alt={film.name}
              className="movie-card-image h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <div className="mb-1 flex items-center gap-2">
              <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium">
                {film.year}
              </span>
              <span className="text-xs text-muted-foreground">60 min</span>
            </div>
            <h3 className="line-clamp-1 text-base font-semibold transition-colors duration-300 group-hover:text-primary">
              {film.name}
            </h3>
            <div className="mt-1 flex items-center">
              <div className="flex items-center">
                <span className="mr-1 text-sm font-medium">5.0</span>
                <span className="text-amber-400">★</span>
              </div>
              <span className="mx-2 text-muted-foreground">•</span>
              <span className="line-clamp-1 text-xs text-muted-foreground">
                {film.genre}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
