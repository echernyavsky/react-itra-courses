import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import routes from "../../../shared/constants/routes";
import AirTravelsTable from "./AirTravelsTable";
import { Button, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import { getAirTravels } from "../../../shared/apis/airTravelApi";

export default function AirTravelsList() {
    const [airTravels, setAirTravels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let navigate = useNavigate();

    useEffect(() => {
        console.log("component did mount");

        getAirTravels()
            .then(({ data }) => {
                const mappedData = data.map(it => ({
                    ...it.attributes,
                    id: it.id,
                }));

                setAirTravels(mappedData);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        console.log("component did update");
    }, [isLoading]);

    useEffect(() => {
        return () => {
            console.log("component will unmount");
        }
    }, []);

    const handleCreateNewAirTravelClick = (e) => {
        navigate(routes.NEW_AIR_TRAVEL);
    }

    return (
        <>
            <h2>Air Travels List</h2>
            <Box my={2}>
                <Button variant="contained" type="button" onClick={handleCreateNewAirTravelClick}>Create new Air Travel</Button>
            </Box>
            {
                isLoading
                    ? <CircularProgress />
                    : <AirTravelsTable airTravels={airTravels} />
            }
        </>
    )
}