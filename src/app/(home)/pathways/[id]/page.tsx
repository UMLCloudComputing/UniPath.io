"use client"
import { CalendarViewDayOutlined } from '@mui/icons-material'
import { Box, SpeedDial, SpeedDialIcon, Tooltip, useTheme } from '@mui/material'
import React, { createContext, useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { DragDropContext, DropResult, Droppable, OnDragEndResponder } from '@hello-pangea/dnd'
import { DraggableSemester } from '../../../../components/Semester/DraggableSemester'
import { DragEndEvent } from '@dnd-kit/core'
import { Semester } from '../../../../components/Semester/Semester'
import { generateClient } from 'aws-amplify/data'
import type { Schema } from '../../../../../amplify/data/resource'

import { CreateSemesterDialog } from '../../../../components/Dialogs/CreateSemesterDialog'
import { SemesterType } from '../../../../types/types'

const testingSemesters: SemesterType[] = [
    {
        id: "21",
        title: 'Fall 2019',
        courses: [
            { id: "1", num: "COMP.1020", name: "Introduction to Computer Science", credits: 3 },
            { id: "3", num: "PHYS.1410", name: "Physics I", credits: 3 },
            { id: "2", num: "MATH.1310", name: "Calculus I", credits: 3 },
            { id: "4", num: "PHYS.1410L", name: "Physics I Lab", credits: 1 },
            { id: "5", num: "HONR.1100", name: "Honors Seminar", credits: 3 }
        ]
    },
    {
        id: "22",
        title: 'Spring 2020',
        courses: [
            { id: "6", num: "MATH.1320", name: "Calculus II", credits: 3 },
            { id: "7", num: "PHYS.1440", name: "Physics II", credits: 3 },
            { id: "8", num: "PHYS.1440L", name: "Physics II Lab", credits: 1 },
            { id: "9", num: "ENGL.1020", name: "English Composition", credits: 3 },
            { id: "10", num: "CHEM.1210", name: "General Chemistry", credits: 3 },
            { id: "11", num: "CHEM.1230L", name: "General Chemistry Lab", credits: 1 }
        ]
    },
    {
        id: "23",
        title: 'Fall 2020',
        courses: [
            { id: "12", num: "COMP.1020", name: "Introduction to Computer Science", credits: 3 },
            { id: "13", num: "MATH.1310", name: "Calculus I", credits: 3 },
            { id: "14", num: "PHYS.1410", name: "Physics I", credits: 3 },
            { id: "15", num: "PHYS.1410L", name: "Physics I Lab", credits: 1 },
            { id: "16", num: "HONR.1100", name: "Honors Seminar", credits: 3 }
        ]
    },
    {
        id: "24",
        title: 'Spring 2021',
        courses: [
            { id: "17", num: "MATH.1320", name: "Calculus II", credits: 3 },
            { id: "18", num: "PHYS.1440", name: "Physics II", credits: 3 },
            { id: "19", num: "PHYS.1440L", name: "Physics II Lab", credits: 1 },
            { id: "20", num: "ENGL.1020", name: "English Composition", credits: 3 },

        ]
    },
    {
        id: "25",
        title: 'Fall 2021',
        courses: [
            { id: "21", num: "COMP.1020", name: "Introduction to Computer Science", credits: 3 },
            { id: "22", num: "MATH.1310", name: "Calculus I", credits: 3 },
            { id: "23", num: "PHYS.1410", name: "Physics I", credits: 3 },
            { id: "24", num: "PHYS.1410L", name: "Physics I Lab", credits: 1 },
            { id: "25", num: "HONR.1100", name: "Honors Seminar", credits: 3 }
        ]
    },
    {
        id: "26",
        title: 'Spring 2022',
        courses: [
            { id: "26", num: "MATH.1320", name: "Calculus II", credits: 3 },
            { id: "27", num: "PHYS.1440", name: "Physics II", credits: 3 },
            { id: "28", num: "PHYS.1440L", name: "Physics II Lab", credits: 1 },
            { id: "29", num: "ENGL.1020", name: "English Composition", credits: 3 },
            { id: "30", num: "CHEM.1210", name: "General Chemistry", credits: 3 },
            { id: "31", num: "CHEM.1230L", name: "General Chemistry Lab", credits: 1 }
        ]
    }
]


const Pathway = ({ params }: { params: { id: string } }) => {

    const theme = useTheme()
    //state
    const [semesters, setSemesters] = useState<SemesterType[]>(testingSemesters)
    const [loading, setLoading] = useState(false)
    const [createSemesterDialogOpen, setCreateSemesterDialogOpen] = useState(false)


    // data fetching
    // const client = generateClient<Schema>({ authMode: "userPool" })
    // const fetchSemesters = async () => {
    //     const { data, errors } = await client.models.Semester.list()
    //     if (errors) console.error(errors)
    //     setSemesters(data)
    // }
    // useEffect(() => {
    //     setLoading(true)
    //     fetchSemesters()
    //     setLoading(false)
    // }, [])

    //interact handlers
    const openCreateSemesterDialog = () => {
        setCreateSemesterDialogOpen(true)
    }

    const closeCreateSemesterDialog = () => {
        setCreateSemesterDialogOpen(false)
    }

    //crud handlers
    const createSemester = async (title: string) => {
        console.log("Create semester clicked!")
        // const { data, errors } = await client.models.Semester.create({ input: { title } })
        // if (errors) console.error(errors)
        // setSemesters([...semesters, data])
    }


    // this function is called when a drag and drop event occurs and handles the logic of reordering semesters and courses
    const handleDragAndDrop = (results: DropResult) => {
        const { source, destination, type } = results


        if (!destination) return;

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        )
            return;

        if (type === "semester") {
            const reorderedSemesters = [...semesters]
            const semesterSourceIndex = source.index
            const semesterDestinationIndex = destination.index
            const [removedSemester] = reorderedSemesters.splice(semesterSourceIndex, 1)
            reorderedSemesters.splice(semesterDestinationIndex, 0, removedSemester)

            setSemesters(reorderedSemesters)
        }


        const courseSourceIndex = source.index
        const courseDestinationIndex = destination.index

        const semesterSourceIndex = semesters.findIndex((s) => s.id === source.droppableId)
        const semesterDestinationIndex = semesters.findIndex((s) => s.id === destination.droppableId)

        const newSourceCourses = [...semesters[semesterSourceIndex].courses]
        const newDestinationCourses = source.droppableId !== destination.droppableId ? [...semesters[semesterDestinationIndex].courses] : newSourceCourses


        const [deletedItem] = newSourceCourses.splice(courseSourceIndex, 1)

        newDestinationCourses.splice(courseDestinationIndex, 0, deletedItem)


        const newSemesters = [...semesters]

        newSemesters[semesterSourceIndex] = {
            ...semesters[semesterSourceIndex],
            courses: newSourceCourses
        }
        newSemesters[semesterDestinationIndex] = {
            ...semesters[semesterDestinationIndex],
            courses: newDestinationCourses
        }

        setSemesters(newSemesters)
    }





    return (

        <Box>


            <Grid container spacing={4} sx={{
                "--Grid-columnSpacing": "2em",
                "--Grid-rowSpacing": "0.5em",
                flexWrap: "nowrap"
            }}>

                <DragDropContext onDragEnd={handleDragAndDrop}>

                    {/* code for draggable semesters
                    <Droppable droppableId="root" type="semester" direction="horizontal">
                        {
                            (provided) => (
                                <Box ref={provided.innerRef} {...provided.droppableProps} sx={{ display: "flex", minWidth: "100%" }}>
                                    {
                                        semesters.map((s, i) => (
                                            <DraggableSemester key={s.id} title={s.title} courses={s.courses} index={i} />
                                        ))
                                    }
                                    {provided.placeholder}
                                </Box>
                            )
                        }
                    </Droppable> */}
                    {
                        semesters.map((s, i) => (

                            <Semester key={s.id} title={s.title} courses={s.courses} id={s.id} />
                        ))
                    }

                </DragDropContext>
            </Grid>


            <Tooltip title={"Add Semester"} placement="left">
                <SpeedDial
                    ariaLabel={"Add Semester"}
                    icon={<SpeedDialIcon openIcon={<CalendarViewDayOutlined />} />}
                    onClick={openCreateSemesterDialog}
                    sx={{
                        position: 'fixed',
                        bottom: '4%',
                        right: '4%',
                        transform: 'translateZ(0px)',
                        mb: { "xs": 4, "md": 0 }
                    }}>
                </SpeedDial>
            </Tooltip>
            <CreateSemesterDialog open={createSemesterDialogOpen} onClose={closeCreateSemesterDialog} create={createSemester} />
        </Box>
    )
}

export default Pathway