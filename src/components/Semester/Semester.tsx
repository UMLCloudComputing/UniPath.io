
import { Droppable } from "@hello-pangea/dnd"
import { CalendarViewDayOutlined, Delete, MoreVert } from "@mui/icons-material"
import { Box, Collapse, IconButton, Menu, MenuItem, Tooltip, Typography, useTheme } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { IconMenuItem } from "mui-nested-menu"
import React, { useState } from "react"
import { DraggableCourse } from "./DraggableCourse"
import { SemesterFooter } from "./SemesterFooter"
import { SemesterHeader } from "./SemesterHeader"
import { AddCourseToSemesterDialog } from "../Dialogs/AddCourseToSemesterDialog"
import { SemesterType } from "../../types/types"

export const Semester = ({ title, courses, id }: SemesterType) => {
    const theme = useTheme()

    const [semesterAnchorEl, setSemesterAnchorEl] = useState(null)
    const semesterOptionsOpen = Boolean(semesterAnchorEl)
    const [courseAnchorEl, setCourseAnchorEl] = useState(null)
    const courseOptionsOpen = Boolean(courseAnchorEl)
    const [expanded, setExpanded] = useState(true)

    const [addCourseDialogOpen, setAddCourseDialogOpen] = useState(false)




    // Semester Options Menu
    const handleSemesterOptionsMenuClick = (e: any) => {
        setSemesterAnchorEl(e.currentTarget)
    }

    const handleSemesterOptionsMenuClose = () => {
        setSemesterAnchorEl(null)
    }

    // Add Semester
    const handleAddSemesterClick = () => {
        console.log("Add Semester Clicked")
    }


    const handleAddCourse = () => {
        setAddCourseDialogOpen(true)
    }

    // Course Options Menu
    const handleCourseOptionsMenuClick = (e: any) => {
        setCourseAnchorEl(e.currentTarget)
    }

    const handleCourseOptionsMenuClose = () => {
        setCourseAnchorEl(null)
    }


    // toggle expand Semester

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }


    return (
        <>
            <Grid md={6} sx={{ minWidth: "45%" }}>
                <Box //main container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        bgcolor: theme.palette.background.default,
                        borderRadius: '10px',
                        minWidth: "45%",
                        padding: "1em",
                    }}>
                    <Box //title container
                        sx={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexShrink: 0,
                            padding: "1em",
                            height: "3.5em",
                            bgcolor: theme.palette.background.default
                        }}>
                        {/* vv Toggle for collapsing semester vv*/}
                        <Tooltip title={expanded ? "Collapse Semester" : "Expand Semester"}>
                            <IconButton onClick={handleExpandClick}>
                                <CalendarViewDayOutlined
                                    sx={{
                                        color: theme.palette.mode === "light" ? theme.palette.common.black : theme.palette.common.white
                                    }} />
                            </IconButton>
                        </Tooltip>


                        <Typography
                            sx={{
                                fontSize: "1.5em",
                            }}>{title}</Typography>

                        <Tooltip title="Semester Options">
                            <IconButton onClick={handleSemesterOptionsMenuClick}>
                                <MoreVert
                                    sx={{
                                        color: theme.palette.mode === "light" ? theme.palette.common.black : theme.palette.common.white
                                    }}
                                />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Collapse in={expanded} sx={{
                        minWidth: "100%"
                    }}>
                        <Box sx={{
                            minWidth: "100%"
                        }}>
                            <SemesterHeader />
                            <Box sx={{ //courses container
                                minWidth: "100%",
                            }}>
                                <Droppable droppableId={id} >
                                    {
                                        (provided) => (
                                            <Box
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                            >
                                                {
                                                    courses.map((c, i) => (
                                                        <DraggableCourse key={c.id} data={c} handleOptionMenuOpen={handleCourseOptionsMenuClick} index={i} />
                                                    ))
                                                }
                                                {provided.placeholder}
                                            </Box>
                                        )
                                    }

                                </Droppable>
                            </Box>
                            <SemesterFooter handleAddCourse={handleAddCourse} totalCreds={courses.reduce((acc, course) => acc + course.credits, 0)} />
                        </Box>

                    </Collapse>
                    <Menu //semester options menu
                        open={semesterOptionsOpen}
                        anchorEl={semesterAnchorEl}
                        onClose={handleSemesterOptionsMenuClose}
                    >
                        <MenuItem>Rename</MenuItem>
                        <MenuItem sx={{ color: theme.palette.error.main }}>Delete</MenuItem>

                    </Menu>
                    <Menu //course options menu
                        open={courseOptionsOpen}
                        anchorEl={courseAnchorEl}
                        onClose={handleCourseOptionsMenuClose}
                    >
                        <IconMenuItem sx={{ color: theme.palette.error.main }} label="Delete" rightIcon={<Delete />} />
                    </Menu>
                </Box >
            </Grid>
            <AddCourseToSemesterDialog open={addCourseDialogOpen} onClose={() => setAddCourseDialogOpen(false)} semester={{ title, id }} />
        </>

    )
}