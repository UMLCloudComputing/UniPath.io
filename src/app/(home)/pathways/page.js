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
import Accordion from '@/components/Accordions/SemesterAccordion';
// src/components/Accordions/SemesterAccordion.js
import PathwayDialog from '@/components/Dialogs/PathwayDialog.js';
// is this the right pathway dialog - Rohan M?

import { accordionData, mockPathwayApiCall } from '@/components/Data/mockData';
import PathwayCard from '../../../components/Cards/PathwayCard';
import PathIcon from "@mui/icons-material/Map";
import SemesterAccordion from "@/components/Accordions/SemesterAccordion";
import EditPathwayDialog from "@/components/Dialogs/EditPathwayDialog";
import { useRouter } from 'next/navigation'
import NoPathways from "@/components/Layouts/NoPathways";
import { Fab, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MapIcon from "@mui/icons-material/Map";
import Tooltip from "@mui/material/Tooltip";



// Component: PathwaysPage
//TODO: transition between: grid <--> list view
//TODO: use accordion component in pathway details page
export default function PathwaysPage() {
    const theme = useTheme();
    const [createDialogOpen, setCreateDialogOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [pathways, setPathways] = useState([]);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [editingPathway, setEditingPathway] = useState({});


    const client = generateClient({ authMode: 'userPool' })

    const router = useRouter();

    const fetchPathways = () => {
        setLoading(true)
        client.models.Pathway.list().then(({ data, errors }) => {
            errors ? console.error(errors) : // retrieving data from DynamoDB and checking for errors
                setPathways(data);
            setLoading(false);
        })
    }


    useEffect(() => {
        fetchPathways()
    }, [])

    const handleEdit = async (editedFields) => {
        await client.models.Pathway.update(editedFields);
        fetchPathways()

    }
    const handleDelete = async (id) => {
        await client.models.Pathway.delete({ id: id });
        fetchPathways()
    }

    const handleCreate = async (fields) => {
        await client.models.Pathway.create(fields);
        fetchPathways()
    }

    const handleEditDialogOpen = () => {
        setEditDialogOpen(true);
    }

    const handleCreateDialogOpen = () => {
        setCreateDialogOpen(true);
    }

    const handleCreateDialogClose = () => {
        setCreateDialogOpen(false);
    }

    const handleEditDialogClose = () => {
        setEditDialogOpen(false);
    }


    return (
        <Box
        >
            {/*Popup Dialog*/}
            <PathwayDialog
                open={createDialogOpen}
                handleClose={handleCreateDialogClose}
                handleCreate={handleCreate}
            />
            <EditPathwayDialog
                open={editDialogOpen}
                handleClose={handleEditDialogClose}
                handleEditPathway={handleEdit}
                pathway={editingPathway}
            />
            {/*Heading*/}
            <Box
                component="header"
                sx={{
                    mb: 2,
                }}
            >
                <Typography variant="h4">My Pathways</Typography>
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


            {
                pathways.length === 0 ?

                    <NoPathways />
                    :
                    /*Pathway Cards*/
                    <Box
                        sx={{
                            overflow: "visible !important",
                            display: "grid",
                            alignItems: "center",
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: 6,

                        }}
                    >
                        {
                            pathways.map((pathway) => {
                                return (
                                    <PathwayCard
                                        key={pathway.id}
                                        pathway={pathway}
                                        handleEditDialogOpen={handleEditDialogOpen}
                                        handlePathwayDelete={handleDelete}
                                        handleSetEditingPathway={setEditingPathway}
                                    />
                                )
                            })
                        }
                    </Box>
            }
            {/*Bottom right corner*/}
            <Tooltip title={"Create Pathway"} placement="left">
                <SpeedDial
                    ariaLabel={"Create Pathway"}
                    icon={<SpeedDialIcon openIcon={<MapIcon />} />}
                    onClick={handleCreateDialogOpen}
                    sx={{
                        position: 'fixed',
                        bottom: '4%',
                        right: '4%',
                        transform: 'translateZ(0px)',
                        mb: { "xs": 4, "md": 0 }
                    }}>
                </SpeedDial>
            </Tooltip>
        </Box>

    )
}

