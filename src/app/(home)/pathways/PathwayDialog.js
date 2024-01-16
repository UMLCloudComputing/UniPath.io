import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import Box from '@mui/material/Box';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PathwayDialog({open, handleClose, handleAddPathwayCard }) {

   // State to manage the expanded/collapsed state of the accordion
   const [expanded, setExpanded] = React.useState(true);

   // Function to handle toggle of accordion
   const handleToggle = () => {
       setExpanded(!expanded);
   };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const pathwayTitle = formJson.pathwayTitle;
            const degree = formJson.degree;
            handleClose();
            handleAddPathwayCard({
              title: pathwayTitle,
              degree: degree,
            });
          },
        }}
      >
        <DialogTitle>Create Pathway</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="pathwayTitle"
            name="pathwayTitle"
            label="Pathway Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="degree"
            name="degree"
            label="Degree"
            type="text"
            fullWidth
            variant="standard"
          />
          <Typography
            variant="subtitle1"
            sx={{
              mt: 2,
              mb: 1,
            }}  
          >
            Course Requirements
          </Typography>
          <Box>
            <Accordion
              expanded={expanded}
              onChange={handleToggle}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle2">Add Course</Typography>
              </AccordionSummary>
            </Accordion>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}