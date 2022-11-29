import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import routes from "../../../shared/constants/routes";
import { getAirTravels } from "../../../shared/apis/airTravelApi";
import AirTravelTable from "./AirTravelTable";

function AirTravelList() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const onCreateNewClick = () => {
        navigate(routes.AIR_TRAVEL.NEW);
    }

    useEffect(() => {
        console.log("component did mount");

        getAirTravels()
            .then((response) => {
                setData(response.data.map(it => ({
                    ...it.attributes,
                    id: it.id,
                })));

                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        console.log("component did update");
    }, [isLoading]);

    useEffect(() => {
        return () => {
            console.log("component will unmount");
        };
    }, []);

    return (
        <>
            <Box my={2}>
                <Button variant="contained" onClick={onCreateNewClick}>Create new air travel</Button>
            </Box>
            <Box my={2}>
                <AirTravelTable rows={data} />
            </Box>
        </>
    )
}

export default AirTravelList;