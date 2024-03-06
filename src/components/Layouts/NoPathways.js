import PathIcon from "@mui/icons-material/Map";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material/styles";

export default function NoPathways() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
            }}
        >
            <PathIcon
                sx={{
                    color: theme.palette.grey[500],
                    fontSize: 100,
                }} />
            <Typography variant="h4"
                        sx={{
                            color: theme.palette.grey[500],
                        }}>No Pathways</Typography>
            <Typography variant="body1"
                        sx={{
                            color: theme.palette.grey[500],
                        }}>You have not created any pathways yet</Typography>

            <Typography variant="body1"
                        sx={{
                            color: theme.palette.grey[500],
                        }}>Click the

                <AddCircleOutlineIcon
                    sx={{
                        color: theme.palette.primary.main,
                        mr: 1,
                        ml: 1,
                        mb: -0.75
                    }} />

                to create a new pathway</Typography>


        </Box>
    )
}