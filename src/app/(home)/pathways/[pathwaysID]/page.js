"use client";

// React stuff
import { useState, useEffect } from "react";

// MUI
import { Box } from "@mui/material";

// Local
import SemesterAccordion from "@/components/Accordions/SemesterAccordion";
import { mockAccordionApiCall } from "@/components/Data/mockData";

export default function degreePathwayPage ()
{
    const [semesters, setSemesters] = useState([]);

    useEffect(() =>
    {
        mockAccordionApiCall()
            .then((semesters) =>
            {
                setSemesters(semesters);
            })
            .catch((err) => console.log('mockAccordionApiCall' + err))
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: '2%' }}>
            {
                semesters.map((semester) =>
                {
                    return (
                        <SemesterAccordion
                            title={semester.title}
                            rows={semester.rows}
                        />
                    )
                })
            }
        </Box>

    );
}