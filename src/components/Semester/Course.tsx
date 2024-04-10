import { MoreVert } from "@mui/icons-material"
import { TableRow, TableCell, useTheme, Tooltip, IconButton } from "@mui/material"
import React from "react"

export const Course = ({ num, name, credits, handleOptionMenuOpen }: { num: string, name: string, credits: number, handleOptionMenuOpen: (e: any) => void }) => {
    const theme = useTheme()


    return (
        <TableRow
            sx={{
                bgcolor: theme.palette.grey[100]
            }}>
            <TableCell
                sx={{
                    textAlign: "center",
                    fontSize: "1.2em"
                }}>{num}</TableCell>
            <TableCell
                sx={{
                    textAlign: "center",
                    fontSize: "1.2em"
                }}>{name}</TableCell>
            <TableCell
                sx={{
                    textAlign: "center",
                    fontSize: "1.2em"
                }}>{credits}</TableCell>
            <TableCell
                sx={{
                    textAlign: "center"
                }}>
                <Tooltip title="Course Options">
                    <IconButton onClick={handleOptionMenuOpen}>
                        <MoreVert sx={{ color: theme.palette.common.black }} />
                    </IconButton>
                </Tooltip>
            </TableCell>
        </TableRow>
    )
}