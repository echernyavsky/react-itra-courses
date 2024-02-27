import * as yup from "yup";

export const validationSchema = yup
  .object({
    name: yup.string().min(2).required(),
    description: yup.string(),
    year: yup.number().min(1600).max(9999).required(),
    logo: yup.mixed().required(),
    location: yup.string().min(2).required(),
  })
  .required();

export type RoasterForm = yup.InferType<typeof validationSchema>;
