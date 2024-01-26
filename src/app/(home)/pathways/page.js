"use client"

// React
import { useState, useEffect } from 'react';

// Material UI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

// Local
import Accordion from './Accordion';
import PathwayDialog from './PathwayDialog';
import { accordionData, mockPathwayApiCall } from './mockData';
import PathwayCard from './PathwayCard';


// Component: PathwaysPage
//TODO: transition between: grid <--> list view
//TODO: blue arrow button to --> pathway details page (/pathways/{id})
//TODO: use accordion component in pathway details page
export default function PathwaysPage() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pathways, setPathways] = useState([]);

  //simulate api call
  useEffect(() => {
    mockPathwayApiCall().then((data) => {
      setPathways(data.pathways);
      setLoading(false);
    })
  }, [])

  const handlePlusClick = () => {
    setOpen(true);
  }

  const handleDialogClose = () => {
    console.log("close");
    setOpen(false);
  }

  return (
    <Box>
      {/*Popup Dialog*/}
      <PathwayDialog
        open={open}
        handleClose={handleDialogClose}
        handleAddPathwayCard={(pathway) => {
          const new_pathways = [...pathways, pathway];
          setPathways(new_pathways);
          console.log(new_pathways);
        }}
      />

      {/*Heading*/}
      <Box
        component="header"
        sx={{
          mb: 2,
        }}
      >
        <Typography variant="h4">Pathways</Typography>
      </Box>

      {/*Loading state (below heading)*/}
      {
        loading ? (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        ) : (
          <></>
        )
      }

      {/*Pathway Cards*/}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          gap: 4,
        }}
      >
        {
          pathways.map((pathway, index) => {
            return (
              <PathwayCard
                key={index}
                title={pathway.title}
                subtitle={pathway.degree}
              />
            )
          })
        }
      </Box>

      {/*Bottom right corner*/}
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
