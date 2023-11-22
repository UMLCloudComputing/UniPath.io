
// React
import * as React from 'react';
import Link from 'next/link';

// Material UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import MediaCard from '@/components/MediaCard';


// Component: HomePage
export default function HomePage() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Typography variant="body1" gutterBottom>
                Home Page
            </Typography>

            <Typography variant="body1" gutterBottom>
                Nothing here yet, go to the <Link href="/pathways">Pathways</Link> page or the <Link href="/tasks">Tasks</Link> page instead.
            </Typography>
        </Box>
    );
}
