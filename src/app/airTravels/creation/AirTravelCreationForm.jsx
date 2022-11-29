import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import FormSelect from "../../../common/forms/FormSelect";
import { createAirTravel } from "../../../shared/apis/airTravelApi";
import { useNavigate } from "react-router";
import routes from "../../../shared/constants/routes";

const airplaneTypes = [{
    value: 'boeing',
    label: 'Boeing',
}, {
    value: 'airbus',
    label: 'Airbus',
}, {
    value: 'bombardier',
    label: 'Bombardier',
}, {
    value: 'embraer',
    label: 'Embraer',
}, {
    value: 'other',
    label: 'Other',
}];

function AirTravelCreationForm() {
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            from: "Minsk",
        },
    });

    const navigate = useNavigate();

    const onFormSubmit = async (values) => {
        await createAirTravel({
            ...values,
            arrival: `${values.arrival}:00.000`,
            departure: `${values.departure}:00.000`,
            airplaneType: values.airplaneType.value,
        });

        alert('air travel created');

        navigate(routes.AIR_TRAVEL.ROOT);
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <Box my={2}>
                <TextField
                    label="From"
                    variant="outlined"
                    {...register("from", {
                        required: true,
                        minLength: 2,
                        maxLength: 255,
                    })}
                    error={errors.from}
                    helperText={errors.from && <span>Field value is incorrect</span>}
                />
            </Box>
            <Box my={2}>
                <TextField
                    label="To"
                    variant="outlined"
                    {...register("to", {
                        required: true,
                        minLength: 2,
                        maxLength: 255,
                    })}
                    error={errors.to}
                    helperText={errors.to && <span>Field value is incorrect</span>}
                />
            </Box>
            <Box my={2}>
                <TextField
                    type="time"
                    label="Departure"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    {...register("departure", { required: true })}
                    error={errors.departure}
                    helperText={errors.departure && <span>Field value is incorrect</span>}
                />
            </Box>
            <Box my={2}>
                <TextField
                    type="time"
                    label="Arrival"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    {...register("arrival", { required: true })}
                    error={errors.arrival}
                    helperText={errors.arrival && <span>Field value is incorrect</span>}
                />
            </Box>
            <Box my={2} maxWidth={200}>
                <FormSelect control={control} name="airplaneType" options={airplaneTypes} />
            </Box>
            <Box my={2}>
                <Button variant="contained" type="submit">Submit</Button>
            </Box>
        </form>
    );
}

export default AirTravelCreationForm;