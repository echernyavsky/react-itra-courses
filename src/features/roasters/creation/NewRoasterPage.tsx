import { Controller, useForm } from "react-hook-form";
import { RoasterForm, validationSchema } from "./validationSchema.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@nextui-org/react";
import FileUpload from "../../../components/forms/FileUpload.tsx";
import { createRoaster } from "../../../shared/apis/roasterApi.ts";
import { useNavigate } from "react-router";
import routes from "../../../shared/constants/routes.ts";
import { FormattedMessage } from "react-intl";
import RoastersBreadcrumbs from "../components/RoastersBreadcrumbs.tsx";

export default function NewRoasterPage() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoasterForm>({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onFormSubmit = async (values: RoasterForm) => {
    await createRoaster(values);
    alert("Roaster successfully created.");
    navigate(routes.ROASTERS.ROOT);
  };

  return (
    <>
      <div>
        <RoastersBreadcrumbs
          currentRoute={routes.ROASTERS.NEW}
          currentRouteName={<FormattedMessage id="new-roaster.title" />}
        />
      </div>
      <div className="mb-8 mt-2">
        <h1>
          <FormattedMessage id="new-roaster.title" />
        </h1>
      </div>
      <div className="max-w-xl">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="my-2">
            <Input
              isRequired
              isInvalid={errors.name != null}
              errorMessage={errors.name?.message}
              type="text"
              label={<FormattedMessage id="new-roaster.form.name" />}
              {...register("name")}
            />
          </div>
          <div className="my-2">
            <Input
              isRequired
              isInvalid={errors.year != null}
              errorMessage={errors.year?.message}
              type="number"
              label={<FormattedMessage id="new-roaster.form.year" />}
              {...register("year")}
            />
          </div>
          <div className="my-2">
            <Input
              isRequired
              isInvalid={errors.location != null}
              errorMessage={errors.location?.message}
              type="text"
              label={<FormattedMessage id="new-roaster.form.location" />}
              {...register("location")}
            />
          </div>
          <div className="my-2">
            <Controller
              control={control}
              name="logo"
              render={({ field: { onChange } }) => {
                return (
                  <FileUpload
                    onChange={onChange}
                    name="logo"
                    label={<FormattedMessage id="new-roaster.form.logo" />}
                    error={errors.logo}
                  />
                );
              }}
            />
          </div>
          <div className="my-2">
            <Button color="primary" type="submit">
              <FormattedMessage id="new-roaster.form.submit" />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
