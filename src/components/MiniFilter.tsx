import * as React from "react";
import { Box, Typography } from "@mui/material";

export type MiniFilterProps = {
    opt: FilterOpt[];
    selected: string;
    setSelected: (value: string) => void;
    style?: React.CSSProperties;
};

export type FilterOpt = {
    title: string;
};

const MiniFilter: React.FC<MiniFilterProps> = ({
    opt,
    selected,
    setSelected,
    style = {}
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "350px",
            }}
        >
            {opt.map((op) => {
                return (
                    <Box
                        onClick={() => setSelected(op.title)}
                        style={{
                            background:
                                op.title === selected
                                    ? "#228efd"
                                    : "transparent",
                            borderRadius: "12px",
                            cursor: "pointer", ...style
                        }}
                    >
                        <Typography
                            color={"common.white"}
                            variant="caption"
                            sx={{ opacity: op.title === selected ? 1 : 0.4 }}
                        >
                            {op.title}
                        </Typography>
                    </Box>
                );
            })}
        </Box>
    );
};

export default MiniFilter;
