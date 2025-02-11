import { object, string, number, InferType } from "yup";

const validationSchema = object({
  name: string().required().min(3),
  year: number().required().min(1900).max(9999),
});

export type MovieForm = InferType<typeof validationSchema>;

export default validationSchema;
