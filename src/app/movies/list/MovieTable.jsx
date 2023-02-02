import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [{
    field: 'id',
    headerName: 'ID',
    type: 'number',
    width: 70
}, {
    field: 'title',
    headerName: 'Title',
    width: 270
}, {
    field: 'genre',
    headerName: 'Genre',
}, {
    field: 'releaseDate',
    headerName: 'Release Date'
}];

export default function MovieTable({ rows }) {
    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5, 10, 20]}
            />
        </div>
    );
}