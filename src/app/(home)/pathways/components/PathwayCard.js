"use client";

//MaterialUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import RouteIcon from '@mui/icons-material/Route';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PathIcon from "@mui/icons-material/Map";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";

//React
import React from 'react';
import MenuItem from "@mui/material/MenuItem";



const PathwayCard = ({ pathwayId, pathwayTitle, school, degreeType, yearOfGrad, degreeMajor, handlePathwayEdit, handlePathwayDelete}) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const pathwayOptionsOpen = Boolean(anchorEl);

    const handlePathwayClick = () => { //to be implemented
        console.log('redirect to pathway page');
    }

    const handlePathwayOptionsOpen = (event) => {

        setAnchorEl(event.currentTarget)
    }

    const handlePathwayOptionsClose = () => {

        setAnchorEl(null)
    }




  const pathwayOptionsMenu = (
      <Menu
          anchorEl={anchorEl}
          open={pathwayOptionsOpen}
          onClose={handlePathwayOptionsClose}
          anchorOrigin={{
          vertical: "top",
          horizontal: "right",
      }}

          keepMounted
          transformOrigin={{
          vertical: "top",
          horizontal: "left",
      }}>
          <MenuItem onClick={() => {
              handlePathwayEdit(pathwayId)
              handlePathwayOptionsClose()
          }}>Edit</MenuItem>
          <MenuItem
              onClick={() => handlePathwayDelete(pathwayId)}
              sx={{
                  color: theme.palette.error.main
              }}
          >Delete</MenuItem>

      </Menu>
  )

  return (

      <Card
        sx={{
          width: '35%',
          p: 2,
            borderRadius: 3,
        }}
      >
          <Box
          sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0.5,
          }}>
        <Box
          sx={{
            display: 'flex',
              alignItems: 'center'
          }}
        >
          <PathIcon
            sx={{
              color: theme.palette.grey[500],
            }} />


          <Typography
            variant="h5"
            sx={{
              ml: 1
            }}
          >
            {pathwayTitle}
          </Typography>
            <IconButton
                sx={{
                ml:'auto'
                    }}
            onClick={handlePathwayOptionsOpen}>
          <MoreVertIcon/>
        </IconButton>
      </Box>
          <Typography
              variant={"h6"}
              sx={{
                  color: theme.palette.grey[500],
                  fontSize: 14,
              }}>
              {degreeType}, {degreeMajor}
          </Typography>
          </Box>
        <Box
          sx={{
            display: 'flex',
            mt: 4,
          }}
        >
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,

            }}>
          <SchoolIcon
            sx={{
              color: theme.palette.grey[500],
            }} />
          <Typography
            variant="subtitle2"
            fontWeight="regular"
            sx={{
              ml: 1,
              color: theme.palette.grey[700],
            }}
          >{school}, {yearOfGrad}</Typography>
            </Box>
            <IconButton
            sx={{
                ml: 'auto',
            }}
            onClick={handlePathwayClick}>
          <ArrowForwardIcon
            sx={{

              color: theme.palette.primary.main,
            }} />
            </IconButton>
        </Box>
          {pathwayOptionsMenu}
      </Card>


  );
};

export default PathwayCard;
