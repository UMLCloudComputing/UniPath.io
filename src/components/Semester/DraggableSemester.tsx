import { Draggable } from "react-beautiful-dnd"
import { Semester } from "./Semester"
import React from "react"
import { Box } from "@mui/material"

export const DraggableSemester = ({ title, courses, index }: { title: string, courses: Course[], index: number }) => {
    return (

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
    )
}