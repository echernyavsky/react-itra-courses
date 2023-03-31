import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 230 },
    { field: 'genre', headerName: 'Genre', width: 130 },
    { field: 'releaseDate', headerName: 'Release Date', width: 200 },
    { field: 'createdAt', headerName: 'Created At', width: 200 },
];

export default function MoviesTable({ movies }) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={movies}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}