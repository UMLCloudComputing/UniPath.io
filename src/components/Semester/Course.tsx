import { MoreVert } from "@mui/icons-material"
import { TableRow, TableCell, useTheme } from "@mui/material"
import React from "react"

export const Course = ({ num, name, credits }: { num: string, name: string, credits: number }) => {
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
                }}><MoreVert /></TableCell>
        </TableRow>
    )
}