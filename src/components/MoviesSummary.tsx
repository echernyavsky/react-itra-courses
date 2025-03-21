import { FiFilm, FiStar, FiTrendingUp } from "react-icons/fi";
import { GiPopcorn } from "react-icons/gi"; // Using a more fitting popcorn icon

export default function MoviesSummary() {
  return (
    <section className="my-12 rounded-lg bg-muted/40 py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-sm dark:bg-card">
            <FiFilm className="mb-2 h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">X</span>
            <span className="text-muted-foreground">Collections</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-sm dark:bg-card">
            <GiPopcorn className="mb-2 h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">X</span>
            <span className="text-muted-foreground">Movies</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-sm dark:bg-card">
            <FiStar className="mb-2 h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">X</span>
            <span className="text-muted-foreground">Avg Rating</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-sm dark:bg-card">
            <FiTrendingUp className="mb-2 h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">X</span>
            <span className="text-muted-foreground">Featured</span>
          </div>
        </div>
      </div>
    </section>
  );
}
