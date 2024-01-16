
"use client"

// React
import{ useState, useEffect } from 'react';

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
import { accordionData, mockPathwayApiCall } from './mockData';


// Component: PathwaysPage
export default function PathwaysPage() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [pathways, setPathways] = useState([]);

    useEffect(() => {
      mockPathwayApiCall().then((data) => {
        setPathways(data.pathways);
      })
    }, [])

    const handlePlusClick = () => {
      setOpen(true);
    }

    const handleDialogClose = () => {
      console.log("close");
      setOpen(false);
    }

    //TODO: grid <--> list view
    return (
        <Box>
            <PathwayDialog
              open={open}
              handleClose={handleDialogClose}
              handleAddPathwayCard={(pathway) => {
                const new_pathways = [...pathways, pathway];
                setPathways(new_pathways);
                console.log(new_pathways);
              }}
            />
            {/*Top*/}
            <Box
              sx={{
                mb: 2,
              }}
            >
              <Typography variant="h4">Pathways</Typography>
            </Box>

            {/*Cards*/}
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

const PathwayCard = ({title, subtitle, handlePathwayClick, handlePathwayDelete}) => {
  const theme = useTheme();
  return (
    <>
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
            variant="h6"
            sx={{
              ml: 1,
            }}
          >
            {title}
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
          >{subtitle}</Typography> {/*degree*/}
          <ArrowForwardIcon
            sx={{
              ml: 'auto',
              color: theme.palette.primary.main,
            }}
          />
        </Box>
      </Card>
    </>
  )
}
