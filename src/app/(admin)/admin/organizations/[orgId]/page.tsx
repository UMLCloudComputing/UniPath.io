"use client"
import { Box, Button, Typography } from "@mui/material"
import { generateClient } from "aws-amplify/api"
import { error } from "console"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect, useCallback } from "react"
import { Schema } from "ROOT/amplify/data/resource"

export default function OrganizationPage({ params }: { params: { orgId: string } }) {
    const client = generateClient<Schema>({ authMode: "userPool" })
    const router = useRouter()

    const [org, setOrg] = useState<Schema["Organization"]["type"]>()
    const [courseCatalog, setCourseCatalog] = useState<Schema["CourseCatalog"]["type"]>()
    const [loading, setLoading] = useState(true)


    const getOrg = useCallback(async (id: string) => {
        const { data, errors } = await client.models.Organization.get({ id: id })
        if (errors) console.error(errors)

        if (!data) {
            router.push("/admin")
        } else {
            setOrg(data)
        }
        setLoading(false)
    }, [])

    const getCourseCatalog = useCallback(async () => {
        const { data, errors } = await org!.courseCatalog()
        if (errors) console.error(errors)
        if (!data) {
            setCourseCatalog(undefined)
        } else {
            setCourseCatalog(data)
        }

    }, [org])

    const createCourseCatalog = async () => {
        const { errors } = await client.models.CourseCatalog.create({ orgId: params.orgId })
        if (errors) console.error(errors)
        getCourseCatalog()
    }

    useEffect(() => {
        getOrg(params.orgId)
    }, [getOrg, params.orgId])

    useEffect(() => {
        if (org) {
            getCourseCatalog()
        }
    }, [org, getCourseCatalog])




    return (

        <Box>
            {loading ? <Typography>Loading...</Typography> :
                <Box>
                    <Typography variant="h1">{org!.name}</Typography>
                    <Typography variant="h2">{org!.location!.streetAddress}</Typography>
                    <Typography variant="h2">{org!.location!.city}, {org!.location!.state} {org!.location!.zipCode}</Typography>
                </Box>
            }
            <br />
            <br />

            <Box>
                <Typography variant="h3">Course Catalogs in this organization</Typography>
                <Box>
                    {
                        courseCatalog ?
                            <Link href={`/admin/course-catalogs/${courseCatalog.id}`}>
                                <Typography>{courseCatalog.id}</Typography>
                            </Link> :
                            <Box>
                                <Typography>No course catalog found for this organization</Typography>
                                <Button onClick={createCourseCatalog}>Create course catalog</Button>
                            </Box>
                    }

                </Box>
            </Box>

        </Box>
    )
}

