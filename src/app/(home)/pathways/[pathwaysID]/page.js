"use client";

// React stuff
import { useState, useEffect } from "react";

// React
import { Box } from "@mui/material";

// Local 
import SemesterAccordion from "@/components/Accordions/SemesterAccordion";
import { mockAccordionApiCall, mockPathwayApiCall } from "@/components/Data/mockData";

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

        <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: '50%', left: '50%' }}>
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