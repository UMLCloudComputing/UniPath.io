"use client";
// React
import * as React from "react";

/* Original Template: 
https://github.com/mui/material-ui/blob/v5.14.18/docs/data/material/getting-started/templates/sign-in/SignIn.js*/

// Material UI
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";

// Next.js
import {useRouter} from "next/navigation";

// AWS
import {signIn} from "aws-amplify/auth";
import {Authenticator, useAuthenticator} from "@aws-amplify/ui-react";


const defaultTheme = createTheme();

// Page: SignInPage;
export default function SignInPage() {
    const router = useRouter();

    const {route} = useAuthenticator((context) => [context.route]);
    React.useEffect(() => {
        if (route === "authenticated") {
            router.replace("/home");
        }
    }, [route]);

    return (

        <Authenticator
            initialState={"signIn"}
        />

    );
}
