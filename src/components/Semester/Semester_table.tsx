import { Add, CalendarViewDay, CalendarViewDayOutlined, Delete, MoreVert } from "@mui/icons-material"
import { Box, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, useTheme, Icon, IconButton, Tooltip, MenuItem, Collapse, Menu, Tab } from "@mui/material"
import React, { ReactNode, SetStateAction, useContext, useRef, useState } from "react"
import { Course } from "./Course"
import { OptionsMenu } from "../Menus/OptionsMenu"
import { IconMenuItem, NestedMenuItem } from "mui-nested-menu"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { useDraggable } from "@dnd-kit/core"
import { useSortable } from "@dnd-kit/sortable"

// export const Semester_table = ({ title, _courses }: { title: string, _courses: Course[] }) => {
//     const theme = useTheme()

//     const [courses, setCourses] = React.useState(_courses)
//     const [semesterAnchorEl, setSemesterAnchorEl] = useState(null)
//     const semesterOptionsOpen = Boolean(semesterAnchorEl)
//     const [courseAnchorEl, setCourseAnchorEl] = useState(null)
//     const courseOptionsOpen = Boolean(courseAnchorEl)
//     const [expanded, setExpanded] = useState(true)

//     const courseRef = useRef(null);

//     const { setNodeRef, listeners, attributes, transform, transition } = useSortable({
//         id: title
//     })

//     const style = transform ? {
//         transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
//         transition
//     } : undefined;

//     // Semester Options Menu
//     const handleSemesterOptionsMenuClick = (e: any) => {
//         setSemesterAnchorEl(e.currentTarget)
//     }

//     const handleSemesterOptionsMenuClose = () => {
//         setSemesterAnchorEl(null)
//     }

//     // Add Semester
//     const handleAddSemesterClick = () => {
//         console.log("Add Semester Clicked")
//     }

//     // Course Options Menu
//     const handleCourseOptionsMenuClick = (e: any) => {
//         setCourseAnchorEl(e.currentTarget)
//     }

//     const handleCourseOptionsMenuClose = () => {
//         setCourseAnchorEl(null)
//     }

//     // toggle expand Semester
//     const handleExpandClick = () => {
//         setExpanded(!expanded)
//     }





//     return (
//         <Box //main container
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'flex-start',
//                 bgcolor: theme.palette.background.default,
//                 borderRadius: '10px',
//                 minWidth: "45%",
//                 padding: "0.5em",
//                 style
//             }}
//             ref={setNodeRef}
//             {...listeners}
//             {...attributes}>
//             <Box //title container
//                 sx={{
//                     display: "flex",
//                     width: "100%",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     flexShrink: 0,
//                     padding: "1em",
//                     height: "3.5em",
//                     bgcolor: theme.palette.background.default
//                 }}>
//                 <Tooltip title={expanded ? "Collapse Semester" : "Expand Semester"}>
//                     <IconButton onClick={handleExpandClick}>
//                         <CalendarViewDayOutlined
//                             sx={{
//                                 color: theme.palette.common.black
//                             }} />
//                     </IconButton>
//                 </Tooltip>

//                 <Typography
//                     sx={{
//                         fontSize: "1.5em",
//                     }}>{title}</Typography>
//                 <Tooltip title="Semester Options">
//                     <IconButton onClick={handleSemesterOptionsMenuClick}>
//                         <MoreVert
//                             sx={{
//                                 color: theme.palette.common.black
//                             }}
//                         />
//                     </IconButton>
//                 </Tooltip>
//             </Box>
//             <Collapse in={expanded}>
//                 <TableContainer component={Box} sx={{ //courses table
//                     borderRadius: 0,
//                 }}>
//                     <Table sx={{ minWidth: "100%" }} aria-label="simple table">
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell
//                                     sx={{
//                                         textAlign: "center",
//                                         fontSize: "1em"
//                                     }}>Number</TableCell>
//                                 <TableCell
//                                     sx={{
//                                         textAlign: "center",
//                                         fontSize: "1em"
//                                     }}>Name</TableCell>
//                                 <TableCell
//                                     sx={{
//                                         textAlign: "center",
//                                         fontSize: "1em"
//                                     }}>Credits</TableCell>
//                                 <TableCell
//                                     sx={{
//                                         textAlign: "center",
//                                         fontSize: "1em"
//                                     }}>Options</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {<Droppable droppableId={title}>
//                                 {(provided) => (
//                                     <div ref={provided.innerRef} {...provided.droppableProps}>
//                                         {
//                                             // courses.map((course: Course, index: number) => (
//                                             //     <Draggable draggableId={course.id} index={index} key={course.id}>
//                                             //         {(provided) => (
//                                             //             <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                                             //                 <Course key={index} data={course} handleOptionMenuOpen={handleCourseOptionsMenuClick} />
//                                             //             </div>
//                                             //         )}
//                                                 // </Draggable>
//                                             // )
//                                         // )
//                                         }
//                                         {provided.placeholder}
//                                     </div>
//                                 )}
//                             </Droppable>}
//                         </TableBody>
//                         <TableBody>
//                             <TableRow>
//                                 <TableCell
//                                     sx={{
//                                         textAlign: "center",
//                                         fontSize: "1.2em"
//                                     }}>
//                                     Total
//                                 </TableCell>
//                                 <TableCell
//                                     sx={{
//                                         textAlign: "center",
//                                     }}>
//                                     <Tooltip title="Add a Course">
//                                         <IconButton
//                                             onClick={handleAddSemesterClick}
//                                         >
//                                             <Add
//                                                 sx={{
//                                                     color: theme.palette.primary.main,
//                                                     fontSize: "1em"
//                                                 }}
//                                             />
//                                         </IconButton>
//                                     </Tooltip>
//                                 </TableCell>
//                                 <TableCell
//                                     sx={{
//                                         textAlign: "center",
//                                         fontSize: "1.2em"
//                                     }}>
//                                     {
//                                         courses.reduce((acc, course) => acc + course.credits, 0)
//                                     }
//                                 </TableCell>
//                                 <TableCell />
//                             </TableRow>
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </Collapse>
//             <Menu //semester options menu
//                 open={semesterOptionsOpen}
//                 anchorEl={semesterAnchorEl}
//                 onClose={handleSemesterOptionsMenuClose}
//             >
//                 <MenuItem>Rename</MenuItem>
//                 <MenuItem sx={{ color: theme.palette.error.main }}>Delete</MenuItem>

//             </Menu>
//             <Menu //course options menu
//                 open={courseOptionsOpen}
//                 anchorEl={courseAnchorEl}
//                 onClose={handleCourseOptionsMenuClose}
//             >
                
//                 <IconMenuItem sx={{ color: theme.palette.error.main }} label="Delete" rightIcon={<Delete />} />
//             </Menu>
//         </Box >
//     )
// }