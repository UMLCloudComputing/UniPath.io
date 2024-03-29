"use client";

import React from 'react';
import {useAuthenticator} from "@aws-amplify/ui-react";
import {CircularProgress} from "@mui/material";
import {useRouter} from "next/navigation";

// Material UI
{/* Should it look like the Microsoft sign out page?*/ }
// Page: SignOutPage
export default function SignOutPage() {
    const { signOut } = useAuthenticator(
        (context) => [context.user],
    );
    const router = useRouter()

    signOut()
    setTimeout(() => {
        router.push('/home')
    }, 1000)

    return (
        <div>
            Successfully signed out... Redirecting to the home page
        </div>
    );
}