import { Add, CalendarViewDay, MoreVert } from "@mui/icons-material"
import { Box, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, useTheme } from "@mui/material"
import React, { ReactNode } from "react"
import { Course } from "./Course"

export const Semester = ({ title, courses }: { title: string, courses: Array<{ num: string, name: string, credits: number }> }) => {
    const theme = useTheme()
    return (
        <Box //main container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                bgcolor: theme.palette.background.default,
                borderRadius: '10px',
                minWidth: "45%",
                padding: "0.5em",
            }}>
            <Box //title container
                sx={{
                    display: "flex",
                    width: "100%",
                    gap: "11em",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexShrink: 0,
                    padding: "1em",
                    height: "3.5em",
                    bgcolor: theme.palette.background.default
                }}>
                <CalendarViewDay />
                <Typography
                    sx={{
                        fontSize: "1.5em",
                    }}>{title}</Typography>
                <MoreVert />
            </Box>
            <TableContainer component={Box} sx={{
                borderRadius: 0,
            }}>
                <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{
                                    textAlign: "center",
                                    fontSize: "1em"
                                }}>Number</TableCell>
                            <TableCell
                                sx={{
                                    textAlign: "center",
                                    fontSize: "1em"
                                }}>Name</TableCell>
                            <TableCell
                                sx={{
                                    textAlign: "center",
                                    fontSize: "1em"
                                }}>Credits</TableCell>
                            <TableCell
                                sx={{
                                    textAlign: "center",
                                    fontSize: "1em"
                                }}>Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody
                        sx={{
                            overflowY: "auto",
                        }}>
                        {
                            courses.map((course: { num: string, name: string, credits: number }, index: number) => {
                                return <Course key={index} num={course.num} name={course.name} credits={course.credits} />
                            })
                        }
                        <TableRow>
                            <TableCell
                                sx={{
                                    textAlign: "center",
                                    fontSize: "1.2em"
                                }}>
                                Total
                            </TableCell>
                            <TableCell
                                sx={{
                                    textAlign: "center",
                                }}>
                                <Add
                                    sx={{
                                        color: theme.palette.primary.main,
                                        fontSize: "2em"
                                    }}
                                />
                            </TableCell>
                            <TableCell
                                sx={{
                                    textAlign: "center",
                                    fontSize: "1.2em"
                                }}>
                                {
                                    courses.reduce((acc, course) => acc + course.credits, 0)
                                }
                            </TableCell>
                            <TableCell />
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}