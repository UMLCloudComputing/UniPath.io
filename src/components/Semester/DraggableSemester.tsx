import { Draggable } from "react-beautiful-dnd"
import { Semester } from "./Semester"
import React from "react"
import { Box } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

export const DraggableSemester = ({ title, courses, index }: { title: string, courses: Course[], index: number }) => {
    console.log(index)
    return (
        <Grid md={6} sx={{ minWidth: "40%" }}>
            <Draggable
                draggableId={title}
                index={index}
            >
                {
                    (provided) => (
                        <Box
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <Semester title={title} _courses={courses} />
                        </Box>
                    )
                }

            </Draggable>
        </Grid>
    )
}