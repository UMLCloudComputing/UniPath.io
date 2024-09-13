"use client"
import { signUpWithEmail } from "@/app/actions";
import { AutoSuggestSearchBar } from "@/components/SearchBar/AutoSuggestSearchBar";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function TempLoginPage() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box>
                <Typography>Sign in</Typography>
                <form>
                    <Box>
                        <Typography>Email</Typography>
                        <TextField type="email" />
                    </Box>
                    <Box>
                        <Typography>Password</Typography>
                        <TextField type="password" />
                    </Box>
                    <Box>
                        <Button>Sign in</Button>
                    </Box>
                </form>
            </Box>
            <Box>
                <Typography>Sign up</Typography>
                <form action={signUpWithEmail}>
                    <Box>
                        <Typography>Email</Typography>
                        <TextField name="email" type="email" />
                    </Box>
                    <Box>
                        <Typography>Name</Typography>
                        <TextField name="name" type="text" />
                    </Box>
                    <Box>
                        <Typography>Institution</Typography>
                        <AutoSuggestSearchBar HTMLElementNameAttr="institution" />
                    </Box>
                    <Box>
                        <Typography>Password</Typography>
                        <TextField name="password" type="password" />
                    </Box>
                    <Box>
                        <Button type="submit">Sign up</Button>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}