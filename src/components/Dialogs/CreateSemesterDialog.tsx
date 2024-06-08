import { Dialog, DialogTitle, DialogContent, Box, TextField, Button } from "@mui/material";
import React from "react";

export const CreateSemesterDialog = ({ open, onClose, create }) => {
    return (

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
            <DialogTitle>Create a Semester</DialogTitle>
            <DialogContent>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <TextField
                        label={"Semester Name"}
                        variant={"outlined"}
                        sx={{ mb: 1 }}
                    />
                    <Button variant={"contained"} onClick={create}>Create</Button>
                </Box>
            </DialogContent>
        </Dialog>

    )
}