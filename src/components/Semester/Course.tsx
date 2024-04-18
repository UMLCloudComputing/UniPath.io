import { MoreVert } from "@mui/icons-material"
import { TableRow, TableCell, useTheme, Tooltip, IconButton } from "@mui/material"
import React from "react"

export const Course = ({ data, handleOptionMenuOpen }: { data: Course, handleOptionMenuOpen: (e: any) => void }) => {
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
                }}>{data.num}</TableCell>
            <TableCell
                sx={{
                    textAlign: "center",
                    fontSize: "1.2em"
                }}>{data.name}</TableCell>
            <TableCell
                sx={{
                    textAlign: "center",
                    fontSize: "1.2em"
                }}>{data.credits}</TableCell>
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