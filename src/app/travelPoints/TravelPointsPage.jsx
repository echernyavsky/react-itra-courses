import React, {useEffect, useState} from "react";
import {Box, Button, CircularProgress} from "@mui/material";
import {useNavigate} from "react-router-dom";
import routes from "../../shared/constants/routes";
import {getTravelPoints} from "../../shared/apis/travelPointsApi";
import TravelPointsList from "./travelPointsList/TravelPointsList";
import {FormattedMessage} from "react-intl";

export default function TravelPointsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [travelPoints, setTravelPoints] = useState([]);

    let navigate = useNavigate();

    useEffect(async () => {
        const response = await getTravelPoints();
        setTravelPoints(response.data.data.map(({ id, attributes }) => {
            return {
                id: id,
                ...attributes,
                createdAt: new Date(attributes.createdAt),
                visitedAt: new Date(attributes.visitedAt),
            }
        }));

        setIsLoading(false);
    }, []);

    const onCreateNew = (e) => {
        navigate(routes.TRAVEL_POINTS_NEW);
    }

    return (
        <>
            <h1>
                <FormattedMessage id="travel-points.header" />
            </h1>
            <Box mt={2}>
                <Button variant="contained" onClick={onCreateNew}>
                    <FormattedMessage id="travel-points.button.create-new" />
                </Button>
            </Box>
            <Box mt={2}>
                {isLoading ?
                    <CircularProgress /> :
                    <TravelPointsList travelPoints={travelPoints} />
                }
            </Box>
        </>
    );
}
