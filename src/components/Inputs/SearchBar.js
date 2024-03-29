import Box from "@mui/material/Box";
import {alpha, useTheme} from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import * as React from "react";

export default function SearchBar() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                position: "relative",
                borderRadius: (theme) =>
                    theme.shape.borderRadius,
                backgroundColor: (theme) =>
                    alpha(theme.palette.common.white, 0.15),
                "&:hover": {
                    backgroundColor: (theme) =>
                        alpha(theme.palette.common.white, 0.25),
                },
                marginRight: (theme) => theme.spacing(2),
                marginLeft: 0,
                width: "100%",
                [theme.breakpoints.up("sm")]: { width: 400 },
                [theme.breakpoints.down("sm")]: { width: 200 },
            }}
        >
            <Box
                sx={{
                    padding: (theme) => theme.spacing(0, 2),
                    height: "100%",
                    position: "absolute",
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <SearchIcon />
            </Box>
            <InputBase
                sx={{
                    color: "inherit",
                    "& .MuiInputBase-input": {
                        padding: (theme) =>
                            theme.spacing(1, 1, 1, 0),
                        paddingLeft: (theme) =>
                            `calc(1em + ${theme.spacing(4)})`,
                        transition: (theme) =>
                            theme.transitions.create("width"),
                        width: "100%",
                        [theme.breakpoints.up("md")]: {
                            width: "20ch",
                        },
                    },
                }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
            />
        </Box>
    )
}