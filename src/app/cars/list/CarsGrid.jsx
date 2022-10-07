import React from "react";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', type: 'number', width: 70 },
    { field: 'model', headerName: 'Model' },
    { field: 'year', headerName: 'Year', type: 'number', width: 100 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'releaseDate', headerName: 'Release Date' },
    { field: 'createdAt', headerName: 'Created At' },
];

export default function CarsGrid({ cars }) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={cars}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection={false}
            />
        </div>
    );
}