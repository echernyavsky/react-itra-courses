import { Button, Input } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8),
  })
  .required();

type LoginForm = yup.InferType<typeof validationSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(validationSchema),
  });

  const onFormSubmit: SubmitHandler<LoginForm> = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex-auto">
        <h1>Login</h1>
      </div>
      <div className="mt-8 w-full flex-auto md:w-1/2">
        <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
          <div className="my-2">
            <Input
              isRequired
              isInvalid={errors.email != null}
              errorMessage={errors.email?.message}
              {...register("email")}
              type="email"
              label="Email"
            />
          </div>
          <div className="my-2">
            <Input
              isRequired
              isInvalid={errors.password != null}
              errorMessage={errors.password?.message}
              {...register("password")}
              type="password"
              label="Password"
            />
          </div>
          {/*<div className="my-2">*/}
          {/*  <Controller*/}
          {/*    control={control}*/}
          {/*    name="logo"*/}
          {/*    render={({ field: { onChange } }) => {*/}
          {/*      return (*/}
          {/*        <FileUpload*/}
          {/*          onChange={onChange}*/}
          {/*          name="logo"*/}
          {/*          label="Logo"*/}
          {/*          error={errors.logo}*/}
          {/*        />*/}
          {/*      );*/}
          {/*    }}*/}
          {/*  />*/}
          {/*</div>*/}
          <div className="my-2">
            <Button color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
