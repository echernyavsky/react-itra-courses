import * as yup from "yup";
import genres from "../../../shared/constants/genres";

const validationSchema = yup.object({
  name: yup.string().required().min(2),
  year: yup.number().required().min(1900).max(new Date().getFullYear()),
  description: yup.string().optional(),
  genre: yup
    .string()
    .required()
    .oneOf(
      genres.map((genre) => genre.field),
      "Invalid genre",
    ),
  poster: yup.mixed().required(),
});

export type FilmForm = yup.InferType<typeof validationSchema>;

export default validationSchema;
