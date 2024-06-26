import React from 'react';
import { Box, TextField, Typography } from '@mui/material'
import { cookieBasedClient } from '@/utils/amplifyServerUtils';

export default async function InternalCreateOrgPage() {

    const getAllOrgs = async () => {
        const { data, errors } = await cookieBasedClient.models.Organization.list();

        if (errors) {
            console.error(errors);
        }

        return data;
    }

    const createOrganization = async (name: string, location: string) => {
        const { data, errors } = await cookieBasedClient.models.Organization.create({

        });

        if (errors) {
            console.error(errors);
        }

        return data;
    }

    return (
        <Box>
            <Typography variant="h1">Unipath Internal - Create Organization</Typography>
            <Typography variant="h2">Organizations</Typography>
            <Box>
                {
                    getAllOrgs().then((data) => (
                        data.map((org) => (
                            <Box key={org.id}>
                                <Typography variant="h3">{org.name}</Typography>
                            </Box>


                        ))

                    ))
                }
            </Box>

            <Box>
                <Typography variant="h2">Create Organization</Typography>
                <form>
                    <Typography variant="h3">Organization Information</Typography>
                    <Typography variant="h4">Name</Typography>
                    <TextField />
                    <Typography variant="h4">Location</Typography>
                    <TextField />
                    <TextField />
                </form>
            </Box>
        </Box>
    )
}
