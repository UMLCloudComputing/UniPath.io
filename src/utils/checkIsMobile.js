"use client"
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";
const checkIsMobile = () => {

    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down("md"));
}

export {checkIsMobile};
