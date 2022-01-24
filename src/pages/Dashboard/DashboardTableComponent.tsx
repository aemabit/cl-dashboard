import { Box } from "@mui/material";
import DataTable from "components/Table";

export default function DashboardTable() {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", width:"100%" }}>
            <Box style={{ width: "49%"}}>
                <DataTable title="Recent Transactions" />
            </Box>
            <Box style={{ width: "49%"}}>
                <DataTable title="Active Bids" />
            </Box>
        </Box>
    );
}
