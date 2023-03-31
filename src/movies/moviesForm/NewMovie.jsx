import React from "react";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import FormSelect from "../../common/forms/FormSelect";
import genres from "../constants/genres";
import { createMovie } from "../../shared/apis/moviesApi";
import { useNavigate } from "react-router";
import routes from "../../shared/constants/routes";

export default function NewMovie() {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const onFormSubmit = async (values) => {
        await createMovie({
            ...values,
            genre: values.genre.value,
        });
        alert("Movie is successfully created.");
        navigate(routes.MOVIES.LIST);
    }

    return (
        <>
            <Box my={2}>
                <h1>New movie</h1>
            </Box>
            <Box my={2} width={250}>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <Box my={2}>
                        <TextField
                            error={errors.title}
                            label="Title"
                            fullWidth
                            helperText={errors.title && <span>This field has invalid value</span>}
                            {...register("title", { required: true, minLength: 3, maxLength: 128 })}
                        />
                    </Box>
                    <Box my={2}>
                        <TextField
                            type="date"
                            error={errors.releaseDate}
                            label=""
                            fullWidth
                            helperText={errors.releaseDate && <span>This field has invalid value</span>}
                            {...register("releaseDate", { required: true })}
                        />
                    </Box>
                    <Box>
                        <FormSelect
                            name="genre"
                            options={genres}
                            control={control}
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