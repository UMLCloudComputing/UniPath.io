import { Box, Divider } from "@mui/material"
import React from "react"
import Grid from "@mui/material/Unstable_Grid2"

export const SemesterHeader = () => {
    return (
        <Box>
            <Grid container spacing={1}>
                <Grid md={2}>
                    <Box
                        sx={{
                            textAlign: "center",
                            fontSize: "1.2em"
                        }}>Number</Box>
                </Grid>
                <Grid md={6}>
                    <Box
                        sx={{
                            textAlign: "center",
                            fontSize: "1.2em"
                        }}>Name</Box>
                </Grid>
                <Grid md={2}>
                    <Box
                        sx={{
                            textAlign: "center",
                            fontSize: "1.2em"
                        }}>Credits</Box>
                </Grid>
                <Grid md={2}>
                    <Box
                        sx={{
                            textAlign: "center",
                            fontSize: "1.2em"
                        }}>Options</Box>
                </Grid>
            </Grid>
        </Box>
    )
}