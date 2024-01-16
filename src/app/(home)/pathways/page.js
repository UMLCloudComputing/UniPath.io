
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
import Card from '@mui/material/Card';
import RouteIcon from '@mui/icons-material/Route';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Local
import Accordion from './Accordion';
import PathwayDialog from './PathwayDialog';
import { accordionData }from './data';


// Component: PathwaysPage
export default function PathwaysPage() {

    

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
                {accordionData.map((data, index) => (
                    <Grid item xs={12} key={index}>
                        <Accordion title={data.title} rows={data.rows} />
                    </Grid>
                ))}
            </Grid> */}
            <PathwayDialog open={open} handleClose={handleDialogClose} />
            <Box
              sx={{
                mb: 2,
              }}
            >
              <Typography variant="h4">Pathways</Typography>
            </Box>
            {/*sample card */}
            <Card
              sx={{
                width: '35%',
                p: 2,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <RouteIcon
                  sx={{
                    color: theme.palette.grey[500],
                  }}
                />  
                <Typography
                  variant="subtitle1"
                  sx={{
                    ml: 1,
                  }}
                >
                  Computer Science
                </Typography>
                <MoreVertIcon
                  sx={{
                    ml: 'auto',
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  mt: 4,
                }}
              >
                <SchoolIcon
                  sx={{
                    color: theme.palette.grey[500],
                  }}
                />
                <Typography
                variant="subtitle2"
                fontWeight="regular"
                sx={{
                  ml: 1,
                  color: theme.palette.grey[700],
                }}  
                >Bachelor of Science</Typography> {/*degree*/}
                <ArrowForwardIcon
                  sx={{
                    ml: 'auto',
                    color: theme.palette.primary.main,
                  }}
                />
              </Box>
            </Card>
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
