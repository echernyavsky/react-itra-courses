import { object, string, number, mixed, InferType } from "yup";

const validationSchema = object({
  name: string().required().min(3),
  year: number().required().min(1900).max(9999),
  description: string().required().min(10),
  genre: string().required(),
  posterUrl: mixed().required(),
});

export type MovieForm = InferType<typeof validationSchema>;

export default validationSchema;
