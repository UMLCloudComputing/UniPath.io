import { cookieBasedClient, runWithAmplifyServerContext } from '@/utils/amplifyServerUtils';
import { Box, Button, Input } from '@mui/material';
import { getCurrentUser } from 'aws-amplify/auth/server';
import Head from 'next/head';
import { cookies } from 'next/headers';
import React from 'react';

export default async function AdminPage() {
    //get the username of the current user using server side getCurrentUser
    const { username } = await runWithAmplifyServerContext({
        nextServerContext: { cookies },
        operation: contextSpec => getCurrentUser(contextSpec)
    });

    const createCourse = async (formData: FormData) => {
        'use server'

        const rawFormData = {
            name: formData.get('course_name'),
            num: formData.get('course_num'),
            credits: formData.get('course_credits')

        }

        if ((await cookieBasedClient.models.CourseCatalog.courses.list()).data.length === 0) {

        }

    }

    const createCourseCatalog = async (formData: FormData) => {
        'use server'

        const rawFormData = {
            name: formData.get('course_name'),
            num: formData.get('course_num'),
            credits: formData.get('course_credits')

        }

        if ((await cookieBasedClient.models.CourseCatalog.list()).data.length === 0) {

        }

    }

    const createOrganization = async (formData: FormData) => {
        'use server'

        const rawFormData = {
            name: formData.get('course_name'),
            num: formData.get('course_num'),
            credits: formData.get('course_credits')

        }

        if ((await cookieBasedClient.models.CourseCatalog.list()).data.length === 0) {

        }

    }

    // const institution = await cookieBasedClient.models.Organization.get({ id: })

    const fetchCourseCatalog = async () => {
        const { data, errors } = await cookieBasedClient.models.CourseCatalog.list()

        if (errors) {
            console.error(errors);
        }

        return data;
    }

    fetchCourseCatalog().then(data => console.log(data))


    return (
        <Box>
            <Head>
                <title>UniPath Admin</title>
            </Head>
            <Box style={{ fontSize: "40px" }}>UniPath.io Admin</Box>
            <Box>Welcome, {username}</Box>
            <Box sx={{
                display: 'flex',
            }}>
                <form action={createCourse}>
                    <Input name='course_name' placeholder='Name' />
                    <Input name='course_num' placeholder='Num' />
                    <Input name='course_credits' placeholder='Credits' />
                    <Button type='submit'>Add New Course to { } catalog</Button>
                </form>
                <form action={createCourseCatalog}>
                    <Input name='course_name' placeholder='Name' />
                    <Input name='course_num' placeholder='Num' />
                    <Input name='course_credits' placeholder='Credits' />
                    <Button type='submit'>Add New Course to { } catalog</Button>
                </form>
                <form action={createOrganization}>
                    <Input name='course_name' placeholder='Name' />
                    <Input name='course_num' placeholder='Num' />
                    <Input name='course_credits' placeholder='Credits' />
                    <Button type='submit'>Add New Course to { } catalog</Button>
                </form>


            </Box>
            <Box>
                {

                }
            </Box>

        </Box>
    )
}