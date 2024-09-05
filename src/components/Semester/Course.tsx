import { MoreVert } from "@mui/icons-material"

import { TableRow, TableCell, useTheme, Tooltip, IconButton, Box, Divider } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import React from "react"
import { CourseType } from "../../types/types"

export const Course = ({ data, handleOptionMenuOpen }: { data: CourseType, handleOptionMenuOpen: (e: any) => void }) => {

    const theme = useTheme()


    return (

        <Box sx={{ pb: 2 }}>
            <Grid container spacing={1} sx={{
                minWidth: "100%",
                bgcolor: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[800],
                p: "0.5em",
                alignItems: "center",
                borderRadius: theme.shape.borderRadius
            }}>
                <Grid md={3} >
                    <Box
                        sx={{
                            textAlign: "center",
                            fontSize: "1.2em"
                        }}>{data.num}</Box>
                </Grid>
                <Grid md={5} sx={{
                    flexBasis: "fit-content",
                }}>
                    <Box
                        sx={{
                            maxWidth: "90%",
                            textAlign: "center",
                            fontSize: "1.2em"
                        }}>{data.name}</Box>
                </Grid>
                <Grid md={2} sx={{
                    flexBasis: "fit-content"
                }}>
                    <Box
                        sx={{
                            textAlign: "center",
                            fontSize: "1.2em"
                        }}>{data.credits}</Box>
                </Grid>
                <Grid md={2} sx={{ flexBasis: "fit-content" }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start"
                        }}>
                        <Tooltip title="Course Options">
                            <IconButton onClick={handleOptionMenuOpen}>
                                <MoreVert sx={{ color: theme.palette.mode === "light" ? theme.palette.common.black : theme.palette.common.white }} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Grid>
            </Grid>

        </Box>

    )
}