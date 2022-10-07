import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import routes from "../../../shared/constants/routes";
import CarsGrid from "./CarsGrid";
import { getCars } from "../../../shared/apis/carsApi";

export default function CarsListPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCars();
            setCars(data);
        };

        fetchData().then(() => {
            setIsLoading(false);
        });

        console.log("component did mount");
    }, []);

    useEffect(() => {
        console.log(`component did update: isLoading=${isLoading}, cars.length=${cars.length}`);
    }, [isLoading, cars]);

    useEffect(() => {
        return () => {
            console.log("component will unmount");
        }
    }, []);

    const onAddNewCarButtonClicked = () => {
        navigate(routes.CARS.NEW);
    }

    return (
        <>
            <Box my={2}>
                <Typography variant="h2">Cars List</Typography>
            </Box>
            <Box textAlign="right">
                <Button
                    variant="contained"
                    onClick={onAddNewCarButtonClicked}
                >
                    Add new car
                </Button>
            </Box>
            <Box mt={2}>
                <CarsGrid cars={cars} />
            </Box>
        </>
    );
}
