import React, {useState} from "react";
import {Alert, Box, Button, Snackbar, TextField} from "@mui/material";
import { useForm } from "react-hook-form";
import {createTravelPoint} from "../../../shared/apis/travelPointsApi";
import {useNavigate} from "react-router-dom";
import routes from "../../../shared/constants/routes";

export default function TravelPointForm() {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [isOpen, setIsOpen] = useState(false);

    let navigate = useNavigate();

    const onFormSubmit = async (values) => {
        await createTravelPoint(values);
        setIsOpen(true);
        navigate(routes.TRAVEL_POINTS);
    }

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsOpen(false);
    };

    return (
        <>
            <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <Box my={2}>
                    <TextField
                        error={errors.name}
                        helperText={errors.name && <span>This field is required</span>}
                        label="Name"
                        variant="standard"
                        {...register("name", { required: true })}
                    />
                </Box>
                <Box my={2}>
                    <TextField
                        error={errors.latitude}
                        helperText={errors.latitude && <span>This field is required</span>}
                        label="Latitude"
                        variant="standard"
                        {...register("latitude", { required: true })}
                    />
                </Box>
                <Box my={2}>
                    <TextField
                        error={errors.longitude}
                        helperText={errors.longitude && <span>This field is required</span>}
                        label="Longitude"
                        variant="standard"
                        {...register("longitude", { required: true })}
                    />
                </Box>
                <Box my={2}>
                    <TextField
                        error={errors.status}
                        helperText={errors.status && <span>This field is required</span>}
                        label="Status"
                        variant="standard"
                        {...register("status", { required: true })}
                    />
                </Box>
                <Box my={2}>
                    <Button type="submit" variant="contained">Submit</Button>
                </Box>
            </form>
        </>
    )
}
