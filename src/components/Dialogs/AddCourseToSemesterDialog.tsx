import { Box, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";

const testingCourses = [
    { id: "1", num: "COMP.1020", name: "Introduction to Computer Science", credits: 3 },
    { id: "3", num: "PHYS.1410", name: "Physics I", credits: 3 },
    { id: "2", num: "MATH.1310", name: "Calculus I", credits: 3 },
    { id: "4", num: "PHYS.1410L", name: "Physics I Lab", credits: 1 },
    { id: "5", num: "HONR.1100", name: "Honors Seminar", credits: 3 },
    { id: "6", num: "MATH.1320", name: "Calculus II", credits: 3 },
    { id: "7", num: "PHYS.1440", name: "Physics II", credits: 3 },
    { id: "8", num: "PHYS.1440L", name: "Physics II Lab", credits: 1 },
    { id: "9", num: "ENGL.1020", name: "English Composition", credits: 3 },
    { id: "10", num: "CHEM.1210", name: "General Chemistry", credits: 3 },
    { id: "11", num: "CHEM.1230L", name: "General Chemistry Lab", credits: 1 },
    { id: "12", num: "COMP.1020", name: "Introduction to Computer Science", credits: 3 },
    { id: "13", num: "MATH.1310", name: "Calculus I", credits: 3 },
    { id: "14", num: "PHYS.1410", name: "Physics I", credits: 3 },
    { id: "15", num: "PHYS.1410L", name: "Physics I Lab", credits: 1 },
    { id: "16", num: "HONR.1100", name: "Honors Seminar", credits: 3 },
    { id: "17", num: "MATH.1320", name: "Calculus II", credits: 3 },
    { id: "18", num: "PHYS.1440", name: "Physics II", credits: 3 },
    { id: "19", num: "PHYS.1440L", name: "Physics II Lab", credits: 1 },
    { id: "20", num: "ENGL.1020", name: "English Composition", credits: 3 },
    { id: "21", num: "COMP.1020", name: "Introduction to Computer Science", credits: 3 },
    { id: "22", num: "MATH.1310", name: "Calculus I", credits: 3 },
    { id: "23", num: "PHYS.1410", name: "Physics I", credits: 3 }

]
export const AddCourseToSemesterDialog = ({ open, onClose, semester }) => {

    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (e) => {
                        e.preventDefault();
                        onClose();
                    }
                }}>
                <DialogTitle>Adding Course to {semester.title}</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        {testingCourses.map((c) => {
                            return <Box key={c.id} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Box sx={{ p: 1 }}>{c.num}</Box>
                                <Button variant={"contained"}>Add</Button>
                            </Box>
                        })}
                    </Box>
                </DialogContent>

            </Dialog>
        </>
    )
}