import { InferType, mixed, number, object, string } from "yup";

export const validationSchema = object({
  name: string().required().min(2),
  brand: string().required().min(2),
  description: string().optional(),
  volumeInMilliliters: number().required().min(1).integer(),
  image: mixed().required(),
});

export type DrinkForm = InferType<typeof validationSchema>;
