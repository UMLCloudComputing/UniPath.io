"use client"
import { CreateOrgDialog } from "@/components/Dialogs/CreateOrgDialog";
import { Box, Button, Typography } from "@mui/material";
import { generateClient } from "aws-amplify/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Schema } from "ROOT/amplify/data/resource";

export default function AdminPage() {
    const client = generateClient<Schema>({ authMode: "userPool" })

    //data state
    const [orgs, setOrgs] = useState<Schema["Organization"]["type"][]>()

    //dialog state
    const [createOrgDialogOpen, setCreateOrgDialogOpen] = useState(false)


    const fetchOrganizations = async () => {
        const { data, errors } = await client.models.Organization.list()
        console.log(data)
        if (errors) console.error(errors)
        setOrgs(data)
    }

    const createOrg = async (name: string, address: string, city: string, state: string, zip: string) => {
        const { errors } = await client.models.Organization.create({ name: name, location: { city: city, state: state, streetAddress: address, zipCode: zip } })
        if (errors) console.error(errors)
        fetchOrganizations()
    }

    useEffect(() => {
        fetchOrganizations()
    }, [])

    const openCreateOrgDialog = () => {
        setCreateOrgDialogOpen(true)
    }

    const closeCreateOrgDialog = () => {
        setCreateOrgDialogOpen(false)
    }

    return (
        <Box>
            <Box>
                <Typography>Organizations</Typography>
                <Box>
                    {
                        orgs?.map((org) => {
                            return <Box key={org.id}>
                                <Link href={`/admin/organizations/${org.id}`}>
                                    <Typography>{org.name}</Typography>
                                </Link>
                            </Box>
                        })
                    }
                </Box>
                <Box>
                    <Button onClick={openCreateOrgDialog}>Create an organization</Button>
                </Box>
            </Box>

            <CreateOrgDialog open={createOrgDialogOpen} onClose={closeCreateOrgDialog} createOrg={createOrg} />
        </Box>
    )
}