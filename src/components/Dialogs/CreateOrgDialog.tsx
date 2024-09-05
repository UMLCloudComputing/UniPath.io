import { TextField, Button } from "@aws-amplify/ui-react";
import { Dialog, DialogTitle, DialogContent, Box } from "@mui/material";
import { FormEvent, ReactElement } from "react";

export const CreateOrgDialog = ({ open, onClose, createOrg }: { open: boolean, onClose: any, createOrg: any }) => {

    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (e: FormEvent<HTMLFormElement>) => {
                        const formData = new FormData(e.currentTarget)
                        const formJson = Object.fromEntries(formData.entries());
                        const name = formJson.name
                        const address = formJson.address
                        const city = formJson.city
                        const state = formJson.state
                        const zip = formJson.zip
                        e.preventDefault();
                        onClose();

                        createOrg(name, address, city, state, zip)
                    }
                }}>
                <DialogTitle>Create an Organization</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box>
                            <TextField label="Name" id="name" name="name" />
                        </Box>
                        <Box>
                            <TextField label="Address" id="address" name="address" />
                        </Box>
                        <Box>
                            <TextField label="City" id="city" name="city" />
                        </Box>
                        <Box>
                            <TextField label="State" id="state" name="state" />
                        </Box>
                        <Box>
                            <TextField label="Zip Code" id="zip" name="zip" />
                        </Box>
                        <Box>
                            <Button type="submit">Create</Button>
                        </Box>
                    </Box>
                </DialogContent>

            </Dialog>
        </>
    )
}