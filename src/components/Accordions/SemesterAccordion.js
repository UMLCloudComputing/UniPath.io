"use client";

// React
import React from 'react';

// Material UI
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';

// Material UI Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// Component: Custom Accordion
export default function SemesterAccordion({ title, rows }) {

    // State to manage the expanded/collapsed state of the accordion
    const [expanded, setExpanded] = React.useState(true);

    // Function to handle toggle of accordion
    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <Accordion expanded={expanded} onChange={handleToggle} sx={{ p: 1, overflow: 'hidden' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography variant="h5">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Paper elevation={0}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {/* Table Headers */}
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell><Button>Number</Button></TableCell>
                                <TableCell><Button>Name</Button></TableCell>
                                <TableCell align="center"><Button>Credits</Button></TableCell>
                                <TableCell align="center"><Button>Grade</Button></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    {/* Table Cells */}
                                    <TableCell align="center">
                                        {/* Checkbox can be added here */}
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton>
                                            <KeyboardArrowDownIcon />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell align="center">{row.credits}</TableCell>
                                    <TableCell align="center">
                                        <Select value={row.grade}>
                                            <MenuItem value="A">A</MenuItem>
                                            <MenuItem value="B">B</MenuItem>
                                            <MenuItem value="C">C</MenuItem>
                                            {/* More options */}
                                        </Select>
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton>
                                            <MoreVertIcon />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton color="error">
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h7">
                                        Total
                                    </Typography>
                                </TableCell>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell align="center">
                                    <Tooltip title="Total Credits" placement="top">
                                        <Typography variant="h7">
                                            NUMCREDITS
                                        </Typography>
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography variant="h7">
                                        GPA
                                    </Typography>
                                </TableCell>
                                <TableCell />
                                <TableCell />
                            </TableRow>
                        </TableHead>
                    </Table>
                </Paper>
            </AccordionDetails>
        </Accordion>
    );
}
