import { Button, Input, Textarea, Select, SelectItem } from "@heroui/react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import genres from "../../../shared/constants/genres.ts";
import validationSchema, { MovieForm } from "./validationSchema.ts";
import FileUpload from "../../../components/forms/FileUpload.tsx";
import { createMovie } from "../../../shared/apis/movieApi.ts";
import { useNavigate } from "react-router";
import routes from "../../../shared/constants/routes.ts";

export default function NewMoviePage() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MovieForm>({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onFormSubmit = async (values: MovieForm) => {
    try {
      await createMovie(values);
      alert("Movie successfully created.");
      navigate(routes.MOVIES.ROOT);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        <h1>New Movie</h1>
      </div>
      <div className="p-4">
        <form noValidate={true} onSubmit={handleSubmit(onFormSubmit)}>
          <div className="flex flex-col">
            <Input
              className="max-w-xs"
              errorMessage={errors.name?.message}
              isInvalid={!!errors.name}
              label="Name"
              type="text"
              variant="bordered"
              {...register("name")}
            />
          </div>
          <div className="mt-2 flex flex-col">
            <Input
              className="max-w-xs"
              errorMessage={errors.year?.message}
              isInvalid={!!errors.year}
              label="Year"
              type="number"
              variant="bordered"
              {...register("year")}
            />
          </div>
          <div className="mt-2 flex flex-col">
            <Select
              className="max-w-xs"
              label="Select a genre"
              errorMessage={errors.genre?.message}
              isInvalid={!!errors.genre}
              {...register("genre")}
            >
              {genres.map((genre) => (
                <SelectItem key={genre.field}>{genre.label}</SelectItem>
              ))}
            </Select>
          </div>
          <div className="mt-2 flex flex-col">
            <Textarea
              className="max-w-xs"
              errorMessage={errors.description?.message}
              isInvalid={!!errors.description}
              label="Description"
              placeholder="Enter your description"
              type="number"
              variant="bordered"
              {...register("description")}
            />
          </div>
          <div className="mt-2">
            <Controller
              control={control}
              render={({ field: { onChange } }) => {
                return (
                  <FileUpload
                    name="posterUrl"
                    label="Poster"
                    error={errors.posterUrl}
                    onChange={onChange}
                  />
                );
              }}
              name="posterUrl"
            />
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
