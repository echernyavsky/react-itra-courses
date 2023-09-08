import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'subject', headerName: 'Subject', width: 400 },
    { field: 'design', headerName: 'Design', width: 130 },
];


export default function EmailTemplatesTable({ rows }) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 20, 100]}
            />
        </div>
    )
}