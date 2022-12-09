import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'from', headerName: 'From' },
    { field: 'to', headerName: 'To' },
    { field: 'departure', headerName: 'Departure' },
    { field: 'arrival', headerName: 'Arrival' },
    { field: 'airplaneType', headerName: 'Airplane Type' },
]

export default function AirTravelsTable({ airTravels }) {
    return (
        <Box my={2}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={airTravels}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </Box>
    );
}