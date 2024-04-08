"use client"
import { CalendarViewDay, MoreVert } from '@mui/icons-material'
import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Course } from '../../../../components/Semester/Course'
import { Semester } from '../../../../components/Semester/Semester'

const Pathway = ({ params }: { params: { id: string } }) => {
    const theme = useTheme()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: "1em",
                minHeight: "80%",
                width: "100%",
                overflowY: "hidden",
                overflowX: "auto",
            }}>
            <Semester title="Fall 2023" courses={[
                { num: "COMP.1010", name: "Computing I", credits: 3 },
                { num: "MATH.1230", name: "Precalculus II", credits: 4 },
                { num: "HONR.1100", name: "FYSH", credits: 3 },
                { num: "COMP.1040L", name: "Computing I Lab", credits: 1 },
                { num: "MUTH.1100", name: "Basic Music Theory", credits: 3 },
            ]} />
            <Semester title="Fall 2021" courses={[
                { num: "CSC.101", name: "Intro to Computer Science", credits: 3 },
                { num: "MAT.101", name: "Calculus I", credits: 4 },
                { num: "ENG.101", name: "English Composition I", credits: 3 },
            ]} />
            <Semester title="Fall 2021" courses={[
                { num: "CSC.101", name: "Intro to Computer Science", credits: 3 },
                { num: "MAT.101", name: "Calculus I", credits: 4 },
                { num: "ENG.101", name: "English Composition I", credits: 3 },
            ]} />
        </Box >
    )
}

export default Pathway