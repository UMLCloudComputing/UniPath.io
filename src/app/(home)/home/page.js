"use client";
// React
import Link from "next/link";
import { useState, useEffect } from "react";

// AWS Amplify
import {useAuthenticator } from "@aws-amplify/ui-react";
import {generateClient} from "aws-amplify/data";

// Material UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useRouter} from 'next/navigation';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

// Local
import PathwayCard from '@/components/Cards/PathwayCard'; // not sure how to implement using PathwayCard
import {homeData, sharedData, resourceData} from '@/components/Data/mockData.js';

// Component: HomePage
export default function HomePage() {
    const { user, authStatus } = useAuthenticator();
    const client = generateClient({ authMode: 'userPool'})

    const router = useRouter();

    {/*Authentication not fully working*/}
    /*
     useEffect(() => {
        if (authStatus === 'authenticated') {
            fetchPathways()
        } else if (authStatus === 'unauthenticated') {
            router.push('/login');
        }
    }, [authStatus])
    */

    



    return (
        <div>
            {/*Pathway Cards for My Pathways*/}
            <Box
        component="header"
        sx={{
          mb: 2,
        }} 
      >
        <Typography variant="h4">My Pathways</Typography>
      </Box>
      
      <Grid container spacing={4} direction="row" justify="flex-start" alignItems="flex-start">
        {homeData.map(elem => (<Grid item xs={12} sm={6} md={3} key={elem.id}>
            <Card sx={{ maxWidth: 275 }} >
                <CardContent>
                    <Typography variant="h5">{elem.major}</Typography>
                    <Typography variant="h7" color="text.secondary">{elem.type}</Typography>
                    <br></br>
                    <br></br>
                    <Box sx={{ textTransform: 'uppercase' }}>
                        <Typography variant="h7" color="text.secondary">{elem.school}</Typography>
                    </Box>
                    
                </CardContent>
            </Card>
        </Grid>))}
      </Grid>

      {/*Pathway Cards for Shared Pathways*/}
      <Box
        component="header"
        sx={{
          mb: 2,
        }}
      >
        <Typography variant="h4">Shared Pathways</Typography>
        </Box>
        <Grid container spacing={4} direction="row" justify="flex-start" alignItems="flex-start">
        {sharedData.map(telem => (<Grid item xs={12} sm={6} md={3} key={telem.id}>
            <Card sx={{ maxWidth: 275 }} >
                <CardContent>
                    <Typography variant="h5">{telem.major}</Typography>
                    <Typography variant="h7" color="text.secondary">{telem.type}</Typography>
                    <br></br>
                    <br></br>
                    <Box sx={{ textTransform: 'uppercase' }}>
                        <Typography variant="h7" color="text.secondary">{telem.school}</Typography>
                    </Box>
                    <br></br>
                    <br></br>
                    <Typography variant="h7" color="text.secondary">Created by: {telem.createdby}</Typography>
                    
                </CardContent>
            </Card>
        </Grid>))}
      </Grid>

      
      {/*Cards for Resources*/}
      <Box
        component="header"
        sx={{
          mb: 2,
        }}
      >
        <Typography variant="h4">Resources </Typography>
         </Box>
        <Grid container spacing={4} direction="row" justify="flex-start" alignItems="flex-start">
        {resourceData.map(kelem => (<Grid item xs={12} sm={6} md={3} key={kelem.id}>
            <Card sx={{ maxWidth: 275 }} >
                <CardContent>
                    <Typography variant="h5">{kelem.resource}</Typography>
                </CardContent>
            </Card>
        </Grid>))}
      </Grid>

     
        </div>
    );
}
