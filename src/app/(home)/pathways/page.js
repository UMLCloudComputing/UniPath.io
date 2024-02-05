"use client"

// React
import { useState, useEffect } from 'react';

//Amplify
import { useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/data';

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

  const { user, authStatus } = useAuthenticator();

  const client = generateClient({ authMode: 'userPool' });

  //fetches pathways from backend if authenticated, else uses mock data (for now)
  useEffect(() => {
    setLoading(true);
    if (authStatus === 'authenticated') {
      client.models.Pathway.list()
        .then((data) => {
          setPathways(data.data.map((item) => {  // transforms request data to required format
            return {
              title: item.title,
              degree: item.degree,
            }
          }));
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (authStatus === 'unauthenticated') {
      // TODO: change to use local storage
      mockPathwayApiCall()
        .then((data) => {
          setPathways(data.pathways);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [authStatus])

  const handlePlusClick = () => {
    setOpen(true);
  }

  const handleDialogClose = () => {
    setOpen(false);
  }

  const handleAddPathwayCard = async (pathway) => {
    const new_pathways = [...pathways, pathway];

    switch (authStatus) {
      case 'authenticated':
        const { errors, data } = await client.models.Pathway.create(
          {
            title: pathway.title,
            degree: pathway.degree,
          },
        );

        if (errors) {
          console.error(errors);
        }

        break;

      default:
        break;
    }

    setPathways(new_pathways);
  }

  return (
    <Box>
      {/*Popup Dialog*/}
      <PathwayDialog
        open={open}
        handleClose={handleDialogClose}
        handleAddPathwayCard={handleAddPathwayCard}
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
            );
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

