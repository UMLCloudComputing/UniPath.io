"use client"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {usePathname, useSearchParams, useRouter} from "next/navigation";
import {CircularProgress} from "@mui/material";

export default function AuthRedirectPage() {
    const router = useRouter()
    const nextQuery = useSearchParams()
    const redirectPage = nextQuery.get("next")

    setTimeout(() => {
        router.replace(`/login?next=${redirectPage}`)
    }, 2000
    )
    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "75vh"}}
        >
            <Typography>
                You must be signed in to access this page. Redirecting to login...

            </Typography>
            <CircularProgress
                disableShrink
            sx={{
                mt: 4
            }}
            />
        </Box>
    )
}