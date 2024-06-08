import { Draggable } from "@hello-pangea/dnd"
import { Semester } from "./Semester"
import React from "react"
import { Box } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { CourseType, SemesterType } from "../../types/types"

export const DraggableSemester = ({ title, courses, id }: SemesterType) => {
    return (
        // <Grid md={6} sx={{ minWidth: "40%" }}>
        //     <Draggable
        //         draggableId={title}
        //         index={index}
        //     >
        //         {
        //             (provided) => (
        //                 <Box
        //                     ref={provided.innerRef}
        //                     {...provided.draggableProps}
        //                     {...provided.dragHandleProps}
        //                 >
        //                     <Semester id={id} title={title} courses={courses} />
        //                 </Box>
        //             )
        //         }

        //     </Draggable>
        // </Grid>
        <></>
    )
}