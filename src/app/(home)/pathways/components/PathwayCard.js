"use client";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import RouteIcon from '@mui/icons-material/Route';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PathIcon from "@mui/icons-material/Map";

const PathwayCard = ({ degreeTitle, school, degreeType, yearOfGrad, degreeMajor, handlePathwayClick, handlePathwayDelete }) => {
  const theme = useTheme();
  return (
    <>
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
            {degreeTitle}
          </Typography>


          <MoreVertIcon
            sx={{
              ml: 'auto',
            }} />
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
          <ArrowForwardIcon
            sx={{
              ml: 'auto',
              color: theme.palette.primary.main,
            }} />
        </Box>
      </Card>
    </>
  );
};

export default PathwayCard;
