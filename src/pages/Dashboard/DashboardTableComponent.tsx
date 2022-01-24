import { Box } from "@mui/material";
import DataTable from "components/Table";

export default function DashboardTable() {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
                <DataTable title="Recent Transactions" />
            </Box>
            <Box>
                <DataTable title="Active Bids" />
            </Box>
        </Box>
    );
}
