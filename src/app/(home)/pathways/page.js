
// React
import * as React from 'react';

// Material UI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


// Component: StarredPage
export default function StarredPage() {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="body1" gutterBottom>
                    Pathways Page
                </Typography>
            </Box>
        </Container>
    );
}
