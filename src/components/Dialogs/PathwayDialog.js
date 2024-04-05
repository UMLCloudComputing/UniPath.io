"use client"
//React
import * as React from 'react';

//Material UI

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
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Chip from '@mui/material/Chip';



//TODO: function to add course requirements to pathway
export default function PathwayDialog({open, handleClose, handleCreate}) {

  // State to manage the expanded/collapsed state of the accordion
  const [expanded, setExpanded] = React.useState(true);
  const [tags, setTags] = React.useState([]);

  const tagFieldRef = React.useRef();

  // Function to handle toggle of accordion
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleTagAdd = (tag) => {
    setTags([...tags, tag]);
  }

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

            //this method below is subject to change (when adding backend)
            handleCreate({
                name: pathwayTitle,
                degree: degree
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

          {/* Tag creation */}
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                mt: 2,
                mb: 1,
              }}
            >
              Create Tags
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <TextField
                sx={{
                  width: '50%',
                }}
                label="tag"
                variant="standard"
                inputRef={tagFieldRef}
              />
              <IconButton
                  onClick={() => {
                      handleTagAdd({ name: tagFieldRef.current.value });
                      console.log("tag add clicked");
                      console.log(tagFieldRef.current.value);
                  }}
              >
                <AddCircleOutlineIcon

                />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                mt: 1,
              }}
            >
              {
                tags.map((tag, index) => {
                  return (
                    <Chip
                      key={index}
                      label={tag.name}
                      onDelete={() => {
                        setTags(tags.filter((item) => item !== tag));
                      }}
                      sx={{
                        m: 0.5,
                      }}
                    />
                  )
                })
              }
            </Box>
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