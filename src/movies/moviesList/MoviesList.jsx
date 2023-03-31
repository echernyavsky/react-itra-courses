import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import routes from "../../shared/constants/routes";
import MoviesTable from "./MoviesTable";
import { getMovies } from "../../shared/apis/moviesApi";
import useData from "../../shared/hooks/useData";

export default function MoviesList() {
    let navigate = useNavigate();
    const movies = useData(getMovies);

    const onCreateMovieButtonClick = () => {
        navigate(routes.MOVIES.NEW);
    }

    return (
        <>
            <Box my={2}>
                <h1>Movie list</h1>
            </Box>
            <Box my={2}>
                <button onClick={onCreateMovieButtonClick}>Create a new movie</button>
            </Box>
            {movies &&
                <Box my={2}>
                    <MoviesTable movies={movies}></MoviesTable>
                </Box>
            }
        </>
    );
}