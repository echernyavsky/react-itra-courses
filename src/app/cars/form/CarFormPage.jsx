import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import FormSelect from "../../../common/forms/FormSelect";
import { createCar } from "../../../shared/apis/carsApi";
import { useNavigate } from "react-router";
import routes from "../../../shared/constants/routes";

const options = [{
    value: "hatchback",
    label: "Hatchback",
},{
    value: "sedan",
    label: "Sedan",
},{
    value: "coupe",
    label: "Coupe",
},{
    value: "SUV",
    label: "SUV",
},{
    value: "VAN",
    label: "VAN",
},{
    value: "bus",
    label: "Bus",
},{
    value: "truck",
    label: "Truck",
}];

export default function CarFormPage() {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onFormSubmit = async (values) => {
        const data = {
            ...values,
            type: values.type.value,
        };

        await createCar(data);
        navigate(routes.CARS.ROOT);
    }

    return (
        <>
            <Box my={2}>
                <Typography variant="h2">Car Form</Typography>
            </Box>
            <Box mt={2}>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <Box my={2}>
                        <TextField
                            error={errors.model}
                            helperText={errors.model ? "Field has an invalid value": ""}
                            label="Model"
                            {...register("model", { required: true, minLength: 2, maxLength: 128 })}
                        />
                    </Box>
                    <Box my={2}>
                        <TextField
                            error={errors.year}
                            helperText={errors.year ? "Field has an invalid value": ""}
                            type="number"
                            label="Year"
                            {...register("year", { required: true, min: 1900, max: 9999 })}
                        />
                    </Box>
                    <Box my={2}>
                        <TextField
                            error={errors.releaseDate}
                            helperText={errors.releaseDate ? "Field has an invalid value": ""}
                            type="date"
                            // label="Release Date"
                            {...register("releaseDate", { required: true })}
                        />
                    </Box>
                    <Box my={2} maxWidth={200}>
                        <FormSelect
                            control={control}
                            name="type"
                            options={options}
                        />
                    </Box>
                    <Box my={2}>
                        <Button variant="contained" type="submit">Submit</Button>
                    </Box>
                </form>
            </Box>
        </>
    );
}
