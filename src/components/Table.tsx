import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

const columns: GridColDef[] = [
    {
        field: "item",
        headerClassName: "super-app-theme--header",
        headerName: "Item",
        width: 130,
    },
    {
        field: "price",
        headerClassName: "super-app-theme--header",
        headerName: "Price",
        width: 70,
    },
    {
        field: "qty",
        headerClassName: "super-app-theme--header",
        headerName: "Qty",
        width: 70,
    },
    {
        field: "From",

        headerClassName: "super-app-theme--header",
        headerName: "From",
        width: 130,
    },
    {
        field: "to",

        headerClassName: "super-app-theme--header",
        headerName: "To",
        width: 130,
    },
    {
        field: "duration",

        headerClassName: "super-app-theme--header",
        headerName: "O",
        sortable: false,
        width: 70,
    },
];

const rows = [
    {
        id: 1,
        item: "Artwork Name",
        qty: 1,
        to: "Snow",
        From: "Jon",
        price: 35,
        duration: "5min",
    },
    {
        id: 2,
        item: "Artwork Name",
        qty: 2,
        to: "Lannister",
        From: "Cersei",
        price: 42,
        duration: "5min",
    },
    {
        id: 3,
        item: "Artwork Name",
        qty: 3,
        to: "Lannister",
        From: "Jaime",
        price: 45,
        duration: "5min",
    },
    {
        id: 4,
        item: "Artwork Name",
        qty: 4,
        to: "Stark",
        From: "Arya",
        price: 16,
        duration: "5min",
    },
    {
        id: 5,
        item: "Artwork Name",
        qty: 5,
        to: "Targaryen",
        From: "Daenerys",
        price: 12,
        duration: "5min",
    },
    {
        id: 6,
        item: "Artwork Name",
        qty: 6,
        to: "Melisandre",
        From: "Pedri",
        price: 150,
        duration: "5min",
    },
    {
        id: 7,
        item: "Artwork Name",
        qty: 7,
        to: "Clifford",
        From: "Ferrara",
        price: 44,
        duration: "5min",
    },
    {
        id: 8,
        item: "Artwork Name",
        qty: 8,
        to: "Frances",
        From: "Rossini",
        price: 36,
        duration: "5min",
    },
    {
        id: 9,
        item: "Artwork Name",
        qty: 9,
        to: "Roxie",
        From: "Harvey",
        price: 65,
        duration: "5min",
    },
];

const DataTable: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div
            style={{
                height: 380,
                width: "100%",
                background: "#23242c",
                borderRadius: "16px"
            }}
        >
            <Box
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "12px 20px 8px 12px",
                    alignItems: "center",
                }}
            >
                <Typography style={{ color: "white" }} variant="h6">
                    {title}
                </Typography>
                <Typography
                    variant="caption"
                    style={{ color: "white", opacity: "0.4" }}
                >
                    View All
                </Typography>
            </Box>
            <DataGrid
                showCellRightBorder={false}
                showColumnRightBorder={false}
                style={{ border: "none", color: "white" }}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                density="standard"
                hideFooter
                disableColumnMenu
                disableSelectionOnClick
            />
        </div>
    );
};

export default DataTable;
