
"use client"

// React
import{ useState } from 'react';

// Material UI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

// Local
import Accordion from './Accordion';
import PathwayDialog from './PathwayDialog';


// Component: PathwaysPage
export default function PathwaysPage() {

    // Sample data for the tables in each accordion
    const data = [
        { 
            title: 'Fall 2019', 
            rows: [
                { id: 'EECE.1070', name: 'EECE.1070', credits: 3, grade: 'A' },
                { id: 'MATH.1310', name: 'MATH.1310', credits: 3, grade: 'A' },
                { id: 'PHYS.1410', name: 'PHYS.1410', credits: 3, grade: 'A' },
                { id: 'PHYS.1410L', name: 'PHYS.1410L', credits: 3, grade: 'A' },
                { id: 'HONR.1100', name: 'HONR.1100', credits: 3, grade: 'A' }
            ]
        },
        { 
            title: 'Spring 2020', 
            rows: [
                { id: 'MATH.1320', name: 'MATH.1320', credits: 3, grade: 'A' },
                { id: 'PHYS.1440', name: 'PHYS.1440', credits: 3, grade: 'A' },
                { id: 'PHYS.1440L', name: 'PHYS.1440L', credits: 3, grade: 'A' },
                { id: 'ENGL.1020', name: 'ENGL.1020', credits: 3, grade: 'A' },
                { id: 'CHEM.1210', name: 'CHEM.1210', credits: 3, grade: 'A' },
                { id: 'CHEM.1230L', name: 'CHEM.1230L', credits: 3, grade: 'A' }
            ]
        },
        { 
            title: 'Fall 2020', 
            rows: [
                { id: 'EECE.2010', name: 'EECE.2010', credits: 3, grade: 'A' },
                { id: 'EECE.2070', name: 'EECE.2070', credits: 3, grade: 'A' },
                { id: 'EECE.2160', name: 'EECE.2160', credits: 3, grade: 'A' },
                { id: 'MATH.2310', name: 'MATH.2310', credits: 3, grade: 'A' },
                { id: 'EECE.2460', name: 'EECE.2460', credits: 3, grade: 'A' }
            ]
        },
        { 
            title: 'Spring 2021', 
            rows: [
                { id: 'EECE.2020', name: 'EECE.2020', credits: 3, grade: 'A' },
                { id: 'EECE.2080', name: 'EECE.2080', credits: 3, grade: 'A' },
                { id: 'EECE.2650', name: 'EECE.2650', credits: 3, grade: 'A' },
                { id: 'ECON.2020', name: 'ECON.2020', credits: 3, grade: 'A' },
                { id: 'MATH.2340', name: 'MATH.2340', credits: 3, grade: 'A' }
            ]
        },
        { 
            title: 'Fall 2021', 
            rows: [
                { id: 'EECE.3110', name: 'EECE.3110', credits: 3, grade: 'A' },
                { id: 'EECE.3620', name: 'EECE.3620', credits: 3, grade: 'A' },
                { id: 'EECE.3640', name: 'EECE.3640', credits: 3, grade: 'A' },
                { id: 'EECE.3650', name: 'EECE.3650', credits: 3, grade: 'A' },
                { id: 'PHIL.3340', name: 'PHIL.3340', credits: 3, grade: 'A' }
            ]
        },
        { 
            title: 'Spring 2022', 
            rows: [
                { id: 'EECE.3120', name: 'EECE.3120', credits: 3, grade: 'A' },
                { id: 'EECE.3170', name: 'EECE.3170', credits: 3, grade: 'A' },
                { id: 'EECE.3600', name: 'EECE.3600', credits: 3, grade: 'A' },
                { id: 'EECE.3630', name: 'EECE.3630', credits: 3, grade: 'A' },
                { id: 'EECE.3660', name: 'EECE.3660', credits: 3, grade: 'A' }
            ]
        },
        { 
            title: 'Fall 2022', 
            rows: [
                { id: 'EECE.3991', name: 'EECE.3991', credits: 3, grade: 'A' },
                { id: 'EECE.4610', name: 'EECE.4610', credits: 3, grade: 'A' },
                { id: 'EECE.3550', name: 'EECE.3550', credits: 3, grade: 'A' }
            ]
        },
        { 
            title: 'Spring 2023', 
            rows: [
                { id: 'EECE.4130', name: 'EECE.4130', credits: 3, grade: 'A' },
                { id: 'EECE.4991', name: 'EECE.4991', credits: 3, grade: 'A' }
            ]
        }
    ];  

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handlePlusClick = () => {
      setOpen(true);
    }

    const handleDialogClose = () => {
      console.log("close");
      setOpen(false);
    }

    return (
        <Box sx={{ 
            
         }}>
            {/* <Grid container spacing={2}>
                {data.map((accordionData, index) => (
                    <Grid item xs={12} key={index}>
                        <Accordion title={accordionData.title} rows={accordionData.rows} />
                    </Grid>
                ))}
            </Grid> */}
            <PathwayDialog open={open} handleClose={handleDialogClose} />
            <IconButton
              onClick={() => handlePlusClick()}
            >
              <AddCircleOutlineIcon
                sx={{
                  position: 'fixed',
                  bottom: '4%',
                  right: '4%',
                  fontSize: '40px',
                  color: theme.palette.primary.main,
                }}
              />
            </IconButton>
        </Box>
    );
}
