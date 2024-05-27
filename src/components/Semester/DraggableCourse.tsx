import { Box } from "@mui/material"
import React from "react"
import { Draggable } from "react-beautiful-dnd"
import { Course } from "./Course"

export const DraggableCourse = ({ data, handleOptionMenuOpen, index }: { data: Course, handleOptionMenuOpen: (e: any) => void, index: number }) => {
    return (
        <Draggable
            draggableId={data.id}
            index={index}
        >
            {
                (provided) => (
                    <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Course data={data} handleOptionMenuOpen={handleOptionMenuOpen} />
                    </Box>
                )
            }
        </Draggable>
    )
}