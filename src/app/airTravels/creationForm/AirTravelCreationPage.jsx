import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormSelect from "../../../common/forms/FormSelect";
import { createNewAirTravel } from "../../../shared/apis/airTravelApi";
import { useNavigate } from "react-router";
import routes from "../../../shared/constants/routes";

const airplaneTypes = ['boeing', 'airbus', 'bombardier', 'embraer', 'other'];
const airplaneTypesDict = airplaneTypes.map(it => ({
    label: it,
    value: it,
}));

export default function AirTravelCreationPage() {
    const navigate = useNavigate();
    const { register, control, handleSubmit, formState: { errors } } = useForm();

    const onFormSubmit = async (values) => {
        await createNewAirTravel({
            ...values,
            airplaneType: values.airplaneType.value,
            departure: `${values.departure}:00.000`,
            arrival: `${values.arrival}:00.000`,
        });

        navigate(routes.AIR_TRAVELS);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <Box my={2}>
                    <TextField
                        {...register("from", { required: true, minLength: 3, maxLength: 40 })}
                        error={!!errors.from}
                        label="From"
                        helperText={errors.from && <span>This field contains incorrect value.</span>}
                    />
                </Box>
                <Box my={2}>
                    <TextField
                        {...register("to", { required: true, minLength: 3, maxLength: 40 })}
                        error={!!errors.to}
                        label="To"
                        helperText={errors.to && <span>This field contains incorrect value.</span>}
                    />
                </Box>
                <Box my={2}>
                    <TextField
                        label="Departure"
                        type="time"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                        sx={{ width: 150 }}
                        error={!!errors.departure}
                        helperText={errors.departure && <span>This field contains incorrect value.</span>}
                        {...register("departure", { required: true })}
                    />
                </Box>
                <Box my={2}>
                    <TextField
                        label="Arrival"
                        type="time"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                        sx={{ width: 150 }}
                        error={!!errors.arrival}
                        helperText={errors.arrival && <span>This field contains incorrect value.</span>}
                        {...register("arrival", { required: true })}
                    />
                </Box>
                <Box my={2} maxWidth={200}>
                    <FormSelect
                        control={control}
                        name="airplaneType"
                        options={airplaneTypesDict}
                    />
                </Box>
                <Box my={2}>
                    <Button type="submit" variant="contained">Submit</Button>
                </Box>
            </form>
        </>
    )
}