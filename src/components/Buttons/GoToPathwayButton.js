"use client"

import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";

export const GoToPathwayButton = ({handlePathwayOptionsOpen}) => {
    return (
        <IconButton
            sx={{
                ml: 'auto'
            }}
            onClick={handlePathwayOptionsOpen}>
            <MoreVertIcon/>
        </IconButton>
    )
}