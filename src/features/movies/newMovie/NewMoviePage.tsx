import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema, { MovieForm } from "./validationSchema.ts";

export default function NewMoviePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MovieForm>({
    resolver: yupResolver(validationSchema),
  });

  const onFormSubmit = (values: MovieForm) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="flex flex-col">
      <div>
        <h1>New Movie</h1>
      </div>
      <div className="bg-amber-50 p-4">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="flex flex-col">
            <label>Name</label>
            <input type="text" {...register("name")} />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>
          <div className="mt-2 flex flex-col">
            <label>Year</label>
            <input type="number" {...register("year")} />
            {errors.year && (
              <span className="text-red-600">{errors.year.message}</span>
            )}
          </div>
          <div className="mt-2">
            <Button type="submit" variant="faded">
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
