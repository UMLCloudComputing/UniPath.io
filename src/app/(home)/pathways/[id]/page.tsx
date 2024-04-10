"use client"
import { CalendarViewDay, CalendarViewDayOutlined, MoreVert } from '@mui/icons-material'
import { Box, Container, Paper, SpeedDial, SpeedDialIcon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography, useTheme } from '@mui/material'
import MapIcon from '@mui/icons-material/Map'
import React, { useEffect } from 'react'
import { Course } from '../../../../components/Semester/Course'
import { Semester } from '../../../../components/Semester/Semester'
import Grid from '@mui/material/Unstable_Grid2'
import testingSemesters from '../../../../components/data/testingSemesters.json'

const Pathway = ({ params }: { params: { id: string } }) => {
    const theme = useTheme()

    const handleCreateSemesterClick = () => {
        console.log("Create Semester Clicked")
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const testingSemesters = [
        {
            id: 1,
            semesterTitle: 'Fall 2019',
            courses: [
                { id: 1, num: "COMP.1020", name: "Introduction to Computer Science", credits: 3 },
                { id: 2, num: "MATH.1310", name: "Calculus I", credits: 3 },
                { id: 3, num: "PHYS.1410", name: "Physics I", credits: 3 },
                { id: 4, num: "PHYS.1410L", name: "Physics I Lab", credits: 1 },
                { id: 5, num: "HONR.1100", name: "Honors Seminar", credits: 3 }
            ]
        },
        {
            id: 2,
            semesterTitle: 'Spring 2020',
            courses: [
                { id: 6, num: "MATH.1320", name: "Calculus II", credits: 3 },
                { id: 7, num: "PHYS.1440", name: "Physics II", credits: 3 },
                { id: 8, num: "PHYS.1440L", name: "Physics II Lab", credits: 1 },
                { id: 9, num: "ENGL.1020", name: "English Composition", credits: 3 },
                { id: 10, num: "CHEM.1210", name: "General Chemistry", credits: 3 },
                { id: 11, num: "CHEM.1230L", name: "General Chemistry Lab", credits: 1 }
            ]
        },
        {
            id: 3,
            semesterTitle: 'Fall 2020',
            courses: [
                { id: 12, num: "COMP.1020", name: "Introduction to Computer Science", credits: 3 },
                { id: 13, num: "MATH.1310", name: "Calculus I", credits: 3 },
                { id: 14, num: "PHYS.1410", name: "Physics I", credits: 3 },
                { id: 15, num: "PHYS.1410L", name: "Physics I Lab", credits: 1 },
                { id: 16, num: "HONR.1100", name: "Honors Seminar", credits: 3 }
            ]
        },
        {
            id: 4,
            semesterTitle: 'Spring 2021',
            courses: [
                { id: 17, num: "MATH.1320", name: "Calculus II", credits: 3 },
                { id: 18, num: "PHYS.1440", name: "Physics II", credits: 3 },
                { id: 19, num: "PHYS.1440L", name: "Physics II Lab", credits: 1 },
                { id: 20, num: "ENGL.1020", name: "English Composition", credits: 3 },

            ]
        }
    ]

    const [semesters, setSemesters] = React.useState(testingSemesters)

    // useEffect(() => {
    //     setSemesters(() => { testingSemesters })
    // }, [testingSemesters])

    return (
        <Box>
            <Grid container spacing={4} sx={{
                "--Grid-columnSpacing": "2em",
                "--Grid-rowSpacing": "0.5em",
                flexWrap: "nowrap"
            }}>
                {
                    semesters.map((semester: { id: number, semesterTitle: string, courses: { id: number, num: string, name: string, credits: number }[] }, index: number) => {
                        return <Grid md={6} sx={{ minWidth: "45%" }} key={index}>
                            <Semester title={semester.semesterTitle} _courses={semester.courses} otherSemesters={semesters.filter((s) => s !== semester)} />
                        </Grid>
                    })
                }
                {/* <Grid md={6} sx={{ minWidth: "45%" }}>
                    <Semester title="Fall 2023" _courses={[
                        { num: "COMP.1010", name: "Computing I", credits: 3 },
                        { num: "MATH.1230", name: "Precalculus II", credits: 4 },
                        { num: "HONR.1100", name: "FYSH", credits: 3 },
                        { num: "COMP.1040L", name: "Computing I Lab", credits: 1 },
                        { num: "MUTH.1100", name: "Basic Music Theory", credits: 3 },
                    ]}
                        otherSemesters={}
                    />
                </Grid>
                <Grid md={6} sx={{ minWidth: "45%" }}>
                    <Semester title="Fall 2021" _courses={[
                        { num: "CSC.101", name: "Intro to Computer Science", credits: 3 },
                        { num: "MAT.101", name: "Calculus I", credits: 4 },
                        { num: "ENG.101", name: "English Composition I", credits: 3 },
                    ]} />
                </Grid>
                <Grid md={6} sx={{ minWidth: "45%" }}>
                    <Semester title="Fall 2021" _courses={[
                        { num: "CSC.101", name: "Intro to Computer Science", credits: 3 },
                        { num: "MAT.101", name: "Calculus I", credits: 4 },
                        { num: "ENG.101", name: "English Composition I", credits: 3 },
                    ]} />
                </Grid> */}
            </Grid>
            <Tooltip title={"Add Semester"} placement="left">
                <SpeedDial
                    ariaLabel={"Add Semester"}
                    icon={<SpeedDialIcon openIcon={<CalendarViewDayOutlined />} />}
                    onClick={handleCreateSemesterClick}
                    sx={{
                        position: 'fixed',
                        bottom: '4%',
                        right: '4%',
                        transform: 'translateZ(0px)',
                        mb: { "xs": 4, "md": 0 }
                    }}>
                </SpeedDial>
            </Tooltip>
        </Box>
    )
}

export default Pathway