import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export default function MoviesList({ movies }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {movies.map((movie) => {
        return (
          <Card key={movie.id} className="py-4">
            <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
              <p className="text-tiny font-bold uppercase">{movie.year}</p>
              <small className="capitalize text-default-500">
                {movie.genre}
              </small>
              <h4 className="text-large font-bold">{movie.name}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="rounded-xl object-cover"
                src={movie.posterUrl}
                width={270}
              />
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
