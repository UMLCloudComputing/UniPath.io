"use client"
import Box from "@mui/material/Box";
import {Breadcrumbs} from "@mui/material";
import Link from "@mui/material/Link";
import {useRouter} from "next/navigation";

export default function PathwayBreadcrumbs({pathwayName}) {

    const router = useRouter()

    const handlePathwaysLinkClick = (event) => {
        event.preventDefault()
        router.push('/pathways')
    }

    return (
        <Box>
            <Breadcrumbs>
                <Link onClick={handlePathwaysLinkClick}>My Pathways</Link>
                <Link>{pathwayName}</Link>
            </Breadcrumbs>

        </Box>
    )
}