import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DrinkForm, validationSchema } from "./validationSchema.ts";
import { Button, Input, Textarea } from "@nextui-org/react";
import FileUpload from "../../../components/forms/FileUpload.tsx";
import { createDrink } from "../../../shared/apis/drinkApi.ts";
import { useNavigate } from "react-router";
import routes from "../../../shared/constants/routes.ts";

export default function DrinkCreationPage() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DrinkForm>({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onFormSubmit = async (values: DrinkForm) => {
    await createDrink(values);
    alert("Drink is successfully created.");
    navigate(routes.DRINKS.ROOT);
  };

  return (
    <>
      <div>
        <h1>Create a new drink</h1>
      </div>
      <div>
        <form
          className="my-2 sm:w-1/2 lg:w-1/3"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <div className="my-2">
            <Input
              {...register("name")}
              label="Name"
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />
          </div>
          <div className="my-2">
            <Input
              {...register("brand")}
              label="Brand"
              isInvalid={!!errors.brand}
              errorMessage={errors.brand?.message}
            />
          </div>
          <div className="my-2">
            <Input
              type="number"
              defaultValue="0"
              {...register("volumeInMilliliters")}
              label="Volume (in ml)"
              isInvalid={!!errors.volumeInMilliliters}
              errorMessage={errors.volumeInMilliliters?.message}
            />
          </div>
          <div className="my-2">
            <Textarea
              {...register("description")}
              label="Description"
              isInvalid={!!errors.description}
              errorMessage={errors.description?.message}
            />
          </div>
          <div className="my-2">
            <Controller
              control={control}
              render={({ field: { onChange } }) => {
                return (
                  <FileUpload
                    name="image"
                    label="Image"
                    error={errors.image}
                    onChange={onChange}
                  />
                );
              }}
              name="image"
            />
          </div>
          <div className="my-2">
            <Button color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
