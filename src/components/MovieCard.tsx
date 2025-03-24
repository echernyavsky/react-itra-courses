import React from "react";
import { Link } from "react-router-dom";
import Movie from "../shared/types/movie.ts";

interface MovieCardProps {
  movie: Movie;
  index?: number;
  className?: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  index = 0,
  className,
}) => {
  const animationDelay = `${(index % 5) * 100}ms`;

  return (
    <Link
      to={`/movies/${movie.id}`}
      className={`movie-card group block transform animate-fade-in rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-lg dark:bg-card ${className || ""}`}
      style={{ animationDelay }}
    >
      <div className="aspect-[2/3] overflow-hidden rounded-2xl">
        <img
          src={movie.posterUrl}
          alt={movie.name}
          className="movie-card-image h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="mb-1 flex items-center gap-2">
          <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium">
            {movie.year}
          </span>
          <span className="text-xs text-muted-foreground">60 min</span>
        </div>
        <h3 className="line-clamp-1 text-base font-semibold transition-colors duration-300 group-hover:text-primary">
          {movie.name}
        </h3>
        <div className="mt-1 flex items-center">
          <div className="flex items-center">
            <span className="mr-1 text-sm font-medium">5.0</span>
            <span className="text-amber-400">★</span>
          </div>
          <span className="mx-2 text-muted-foreground">•</span>
          <span className="line-clamp-1 text-xs text-muted-foreground">
            {movie.genre}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
