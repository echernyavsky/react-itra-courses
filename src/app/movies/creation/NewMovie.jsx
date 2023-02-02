import React from "react";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import FormSelect from "../../../common/forms/FormSelect";
import genres from "../../../shared/constants/genres";
import { createMovie } from "../../../shared/apis/movieApi";
import { useNavigate } from "react-router";
import routes from "../../../shared/constants/routes";

export default function NewMovie() {
    let navigate = useNavigate();
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onFormSubmit = async (values) => {
        const data = {
            ...values,
            genre: values.genre.value,
        };

        await createMovie({ data });
        alert("Movie successfully created.");
        navigate(routes.MOVIES.LIST);
    }

    return (
        <>
            <Box>
                <h1>New Movie form</h1>
            </Box>
            <Box>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <Box my={2}>
                        <TextField
                            error={errors.title}
                            helperText={errors.title && "This field is not valid."}
                            label="Title"
                            {...register("title", {
                                required: true,
                                minLength: 3,
                                maxLength: 250,
                            })}
                        />
                    </Box>
                    <Box my={2} maxWidth={200}>
                        <FormSelect
                            control={control}
                            name="genre"
                            options={genres}
                        />
                    </Box>
                    <Box my={2}>
                        <TextField
                            error={errors.releaseDate}
                            helperText={errors.releaseDate && "This field is not valid."}
                            type="date"
                            label=""
                            {...register("releaseDate", {
                                required: true,
                            })}
                        />
                    </Box>
                    <Box my={2}>
                        <Button type="submit" variant="contained">Submit</Button>
                    </Box>
                </form>
            </Box>
        </>
    )
}