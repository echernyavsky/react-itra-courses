import React from "react";

import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'from', headerName: 'From', width: 130 },
    { field: 'to', headerName: 'To', width: 130 },
    { field: 'departure', headerName: 'Departure', width: 130 },
    { field: 'arrival', headerName: 'Arrival', width: 130 },
    { field: 'airplaneType', headerName: 'Airplane Type', width: 130 },
];

export default function AirTravelTable({ rows }) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}