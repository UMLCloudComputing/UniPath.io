import { Add, CalendarViewDay, CalendarViewDayOutlined, Delete, MoreVert } from "@mui/icons-material"
import { Box, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, useTheme, Icon, IconButton, Tooltip, MenuItem, Collapse, Menu, Tab, Divider, TextField } from "@mui/material"
import React, { ReactNode, SetStateAction, useContext, useRef, useState } from "react"
import { Course } from "./Course"
import { OptionsMenu } from "../Menus/OptionsMenu"
import { IconMenuItem, NestedMenuItem } from "mui-nested-menu"
import { SemesterContext } from "../../app/(home)/pathways/[id]/page"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { useDraggable } from "@dnd-kit/core"
import { useSortable } from "@dnd-kit/sortable"
import Grid from "@mui/material/Unstable_Grid2"
import { SemesterHeader } from "./SemesterHeader"
import { SemesterFooter } from "./SemesterFooter"
import { DraggableCourse } from "./DraggableCourse"

export const Semester = ({ title, _courses }: { title: string, _courses: Course[] }) => {
    const theme = useTheme()

    const [courses, setCourses] = React.useState(_courses)
    const [semesterAnchorEl, setSemesterAnchorEl] = useState(null)
    const semesterOptionsOpen = Boolean(semesterAnchorEl)
    const [courseAnchorEl, setCourseAnchorEl] = useState(null)
    const courseOptionsOpen = Boolean(courseAnchorEl)
    const [expanded, setExpanded] = useState(true)

    const otherSemesters = useContext(SemesterContext).filter((s) => s.title !== title)

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
                            <Droppable droppableId={title} >
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
                        <SemesterFooter totalCreds={courses.reduce((acc, course) => acc + course.credits, 0)} />
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
    )
}