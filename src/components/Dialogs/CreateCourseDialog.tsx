import { TextField, Button } from "@aws-amplify/ui-react"
import { Box, Dialog, DialogTitle, DialogContent } from "@mui/material"
import { FormEvent } from "react";

export const CreateCourseDialog = ({ open, onClose, createCourse }: { open: boolean, onClose: any, createCourse: any }) => {
    return (
        <Box>
            <Dialog
                open={open}
                onClose={onClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (e: FormEvent<HTMLFormElement>) => {
                        const formData = new FormData(e.currentTarget)
                        const formJson = Object.fromEntries(formData.entries());
                        const number = formJson.number
                        const name = formJson.name
                        const credits = formJson.credits

                        e.preventDefault();
                        onClose();

                        createCourse(name, number, credits)
                    }
                }}
            >
                <DialogTitle>Create a Course</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box>
                            <TextField label="Course Number" id="number" name="number" />
                        </Box>
                        <Box>
                            <TextField label="Course Name" id="name" name="name" />
                        </Box>
                        <Box>
                            <TextField label="Credits" id="credits" name="credits" />
                        </Box>
                        <Box>
                            <Button type="submit">Create</Button>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    )
}