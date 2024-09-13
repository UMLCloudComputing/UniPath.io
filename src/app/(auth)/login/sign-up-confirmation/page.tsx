"use client"
import { submitSignUpConfirmationCode } from "@/app/actions";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SignUpConfirmationPage() {
    const urlParams = useSearchParams()
    const email = urlParams.get("email")
    const router = useRouter()

    if (!email) {
        router.replace("/login")
    }

    const submitSignUpConfirmationCodeWithEmail = submitSignUpConfirmationCode.bind(null, email!)
    return (
        <Box>
            <Typography>
                A confirmation email has been sent to {email}. Please check your email to complete the sign up process.
            </Typography>

            <form action={submitSignUpConfirmationCodeWithEmail}>
                <TextField name="confirmationCode" label="Confirmation code" />
                <Button type="submit">Submit</Button>
            </form>
        </Box>
    )
}