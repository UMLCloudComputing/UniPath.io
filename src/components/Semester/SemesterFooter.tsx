import { Box, IconButton, useTheme } from "@mui/material"
import React from "react"
import Grid from "@mui/material/Unstable_Grid2"
import { Add } from "@mui/icons-material"

export const SemesterFooter = ({ totalCreds, handleAddCourse }: { totalCreds: number, handleAddCourse: () => any }) => {
    const theme = useTheme()
    return (
        <Box>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
                <Grid md={2} sx={{ flexBasis: "fit-content" }}>
                    <Box
                        sx={{
                            textAlign: "center",
                            fontSize: "1.2em"
                        }}>Total</Box>
                </Grid>
                <Grid md={6} sx={{ flexBasis: "fit-content" }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start"
                        }}>
                        <IconButton sx={{
                            display: "flex",
                            alignItems: "flex-start",
                        }}
                            onClick={handleAddCourse}>
                            <Add
                                sx={{
                                    color: theme.palette.primary.main,
                                    fontSize: "1em"
                                }}
                            />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid md={2} sx={{ flexBasis: "flex-end" }}>
                    <Box
                        sx={{
                            textAlign: "center",
                            fontSize: "1.2em"
                        }}>{totalCreds}</Box>
                </Grid>
                <Grid md={2}>
                    <Box
                        sx={{
                            textAlign: "center",
                            fontSize: "1.2em"
                        }}></Box>
                </Grid>
            </Grid>
        </Box>
    )
}