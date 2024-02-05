"use client";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import RouteIcon from '@mui/icons-material/Route';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PathwayCard = ({ title, subtitle, handlePathwayClick, handlePathwayDelete }) => {
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
            }} />
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
            }} />
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
            }} />
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
            }} />
        </Box>
      </Card>
    </>
  );
};

export default PathwayCard;
