import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import routes from "../../../shared/constants/routes";
import Box from "@mui/material/Box";
import MovieTable from "./MovieTable";
import { getMovies } from "../../../shared/apis/movieApi";
import { Button } from "@mui/material";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let navigate = useNavigate();

    const onNewMovieClick = () => {
        navigate(routes.MOVIES.NEW);
    }

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await getMovies();
            setMovies(data.map(it => ({
                ...it.attributes,
                id: it.id,
            })));

            setIsLoading(false);
        }

        fetchMovies()
            .then(() => {
                console.log("component did mount");
            });
    }, []);

    useEffect(() => {
        console.log("component did mount or update");
        console.log(`isLoading = ${isLoading}`);
    }, [isLoading]);

    useEffect(() => {
        return () => {
            console.log("component did unmount");
            setTimer(null);
        };
    }, []);

    return (
        <>
            <Box my={2}>
                <h1>Movies List</h1>
            </Box>
            <Box my={2}>
                <Button type="button" variant="contained" onClick={onNewMovieClick}>Create new movie</Button>
            </Box>
            <Box my={2}>
                {isLoading
                    ? <span>Loading...</span>
                    : <MovieTable rows={movies} />
                }
            </Box>
        </>
    )
}