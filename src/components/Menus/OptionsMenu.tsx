import { Menu, MenuItem, useTheme } from "@mui/material"
import React, { ReactNode } from "react"
import { useState } from "react"

export const OptionsMenu = ({ open, anchorEl, onClose, children }: { open: boolean, anchorEl: HTMLElement | null, onClose: () => void, children: ReactNode }) => {
    const theme = useTheme()


    return (
        <Menu
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
        >
            {children}
        </Menu>
    )
}