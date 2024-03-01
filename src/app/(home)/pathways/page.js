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
import PathwayCard from '@/components/Cards/PathwayCard';
import PathIcon from "@mui/icons-material/Map";
import SemesterAccordion from "@/components/Accordions/SemesterAccordion";
import EditPathwayDialog from "@/components/Dialogs/EditPathwayDialog";




// Component: PathwaysPage
//TODO: transition between: grid <--> list view
//TODO: blue arrow button to --> pathway details page (/pathways/{id})
//TODO: use accordion component in pathway details page
export default function PathwaysPage() {
    const theme = useTheme();
    const [addPathwayDialogOpen, setAddPathwayDialogOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [pathways, setPathways] = useState([]);
    const [editPathwayDialogOpen, setEditPathwayDialogOpen] = useState(false);
    const [editPathwayFields, setEditPathwayFields] = useState({});


    // const { user, authStatus } = useAuthenticator();
    //

    // const client = generateClient({ authMode: 'userPool'});

    //fetches pathways from backend if authenticated, else uses mock data (for now)
    useEffect(() => {
        setLoading(true);
        // if (authStatus === 'authenticated') {
        //   client.models.Pathway.list()
        //     .then((data) => {
        //       setPathways(data.data.map((item) => {  // transforms request data to required format
        //         return {
        //           title: item.title,
        //           degree: item.degree,
        //         }
        //       }));
        //       setLoading(false);
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        // } else if (authStatus === 'unauthenticated'){
        //   // TODO: change to use local storage
        //   mockPathwayApiCall()
        //     .then((data) => {
        //       setPathways(data.pathways);
        //       setLoading(false);
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        // }
        if (localStorage.getItem('pathways')) {
            const pathways = JSON.parse(localStorage.getItem('pathways'));
            if (pathways !== null) {
                setPathways([...pathways]);
            } else {
                setPathways([])
            }

            setLoading(false);
        } else {
            setLoading(false)
        }
    }, [/*authStatus*/])

    const handleEditPathwayCard = (pathwayId) => {

        setEditPathwayDialogOpen(true);

        pathways.find((pathway) => {
            if (pathway.id === pathwayId) {

                setEditPathwayFields({
                    id: pathway.id,
                    pathwayTitle: pathway.pathwayTitle,
                    degreeMajor: pathway.degreeMajor,
                    school: pathway.school,
                    degreeType: pathway.degreeType,
                    yearOfGrad: pathway.yearOfGrad,
                });
            }
        })


    }

    const handleEditPathway = (pathwayId, newPathwayFields) => {

        pathways.find((pathway) => {
            if (pathway.id === pathwayId) {
                pathway.pathwayTitle = newPathwayFields.newPathwayTitle;
                pathway.degreeMajor = newPathwayFields.newDegreeMajor;
                pathway.school = newPathwayFields.newSchool;
                pathway.yearOfGrad = newPathwayFields.newYearOfGrad;
                pathway.degreeType = newPathwayFields.newDegreeType;
            }
        }
        )
        localStorage.setItem('pathways', JSON.stringify(pathways));
    }

    const handlePathwayDelete = (pathwayId) => {
        const new_pathways = pathways.filter((pathway) => pathway.id !== pathwayId);

        setPathways(new_pathways);
        localStorage.removeItem('pathways');
        localStorage.setItem('pathways', JSON.stringify(new_pathways));
        window.location.reload() // reload to refresh local storage
    }

    const handleAddPathwayClick = () => {
        setAddPathwayDialogOpen(true);
    }

    const handlePathwayDialogClose = () => {
        setAddPathwayDialogOpen(false);
    }

    const handleEditPathwayDialogClose = () => {
        setEditPathwayDialogOpen(false);

    }

    const handleAddPathwayCard = async (pathway) => {
        const new_pathways = pathways ? [...pathways, pathway] : [pathway];

        // switch (authStatus) {
        //   case 'authenticated':
        //     const { errors, data } = await client.models.Pathway.create(
        //       {
        //         title: pathway.title,
        //         degree: pathway.degree,
        //       },
        //     );
        //
        //     if (errors) {
        //       console.error(errors);
        //     }
        //
        //     break;
        //
        //   default:
        //     break;
        // }
        localStorage.setItem('pathways', JSON.stringify(new_pathways));

        setPathways(new_pathways);

    }


    return (<Box>


        {/*Popup Dialog*/}
        <PathwayDialog
            open={addPathwayDialogOpen}
            handleClose={handlePathwayDialogClose}
            handleAddPathwayCard={handleAddPathwayCard}
        />
        <EditPathwayDialog
            open={editPathwayDialogOpen}
            handleClose={handleEditPathwayDialogClose}
            handleEditPathway={handleEditPathway}
            pathwayFields={editPathwayFields}
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

                <Box // No pathways found
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '50vh',
                    }}
                >
                    <PathIcon
                        sx={{
                            color: theme.palette.grey[500],
                            fontSize: 100,
                        }} />
                    <Typography variant="h4"
                        sx={{
                            color: theme.palette.grey[500],
                        }}>No Pathways</Typography>
                    <Typography variant="body1"
                        sx={{
                            color: theme.palette.grey[500],
                        }}>You have not created any pathways yet</Typography>

                    <Typography variant="body1"
                        sx={{
                            color: theme.palette.grey[500],
                        }}>Click the

                        <AddCircleOutlineIcon
                            sx={{
                                color: theme.palette.primary.main,
                                mr: 1,
                                ml: 1,
                                mb: -0.75
                            }} />

                        to create a new pathway</Typography>


                </Box>
                :
                <Box>


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
                                        pathwayId={pathway.id}
                                        pathwayTitle={pathway.pathwayTitle}
                                        degreeMajor={pathway.degreeMajor}
                                        school={pathway.school}
                                        degreeType={pathway.degreeType}
                                        yearOfGrad={pathway.yearOfGrad}
                                        handlePathwayEdit={handleEditPathwayCard}
                                        handlePathwayDelete={handlePathwayDelete}
                                    />
                                )
                            })
                        }
                    </Box>


                </Box>
        }
        {/*Bottom right corner*/}
        <IconButton
            onClick={handleAddPathwayClick}
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

    )
}


