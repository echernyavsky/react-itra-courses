import { Button, Input, Select, SelectItem, Textarea } from "@heroui/react";
import routes from "../../../shared/constants/routes";
import { useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";
import validationSchema, { FilmForm } from "./validationScheme";
import { yupResolver } from "@hookform/resolvers/yup";
import genres from "../../../shared/constants/genres";
import FileUpload from "../../../components/forms/FileUpload";
import { createFilm } from "../../../shared/apis/filmApi";
import { addToast } from "@heroui/toast";
import { FormattedMessage } from "react-intl";

export default function FilmCreationPage() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FilmForm>({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (values: FilmForm) => {
    try {
      await createFilm(values);
      addToast({
        title: `Film ${values.name} created`,
        description: "Film is successfully created.",
        color: "success",
      });

      navigate(routes.FILMS.ROOT);
    } catch (error: any) {
      addToast({
        title: "Failed to create film",
        description: error.message,
        color: "danger",
      });
    }
  };

  return (
    <div>
      <div>
        <h1>
          <FormattedMessage id="films.creation.title" />
        </h1>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="my-2 flex flex-col gap-4 sm:w-1/2 lg:w-1/3"
        >
          <div>
            <Input
              label="Name"
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
              {...register("name")}
            />
          </div>
          <div>
            <Input
              label="Year"
              type="number"
              isInvalid={!!errors.year}
              errorMessage={errors.year?.message}
              {...register("year")}
            />
          </div>
          <div>
            <Textarea
              label="Description"
              isInvalid={!!errors.description}
              errorMessage={errors.description?.message}
              {...register("description")}
            />
          </div>
          <div>
            <Select
              label="Genre"
              isInvalid={!!errors.genre}
              errorMessage={errors.genre?.message}
              {...register("genre")}
            >
              {genres.map((genre) => (
                <SelectItem key={genre.field} value={genre.field}>
                  {genre.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <Controller
              control={control}
              name="poster"
              render={({ field: { onChange } }) => {
                return (
                  <FileUpload
                    name="poster"
                    label="Poster"
                    error={errors.poster}
                    onChange={onChange}
                  />
                );
              }}
            />
          </div>
          <div>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
