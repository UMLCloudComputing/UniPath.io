
// React
import Link from "next/link";

// Material UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Component: HomePage
export default function HomePage() {
    return (
        <Box sx={{ display: "flex" }}>
            <Typography variant="body1" gutterBottom>
                Home Page
            </Typography>

            <Typography variant="body1" gutterBottom>
                Nothing here yet, go to the{" "}
                <Link href="/pathways">Pathways</Link> page or the{" "}
                <Link href="/tasks">Tasks</Link> page instead.
            </Typography>
        </Box>
    );
}
