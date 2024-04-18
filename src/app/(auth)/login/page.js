"use client";
// React
import * as React from "react";

// Next.js
import { useRouter, useSearchParams } from "next/navigation";

// AWS
import { Authenticator, useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Copyright from "@/components/Layouts/Copyright";

// Page: SignInPage;
function SignInPage() {
    const router = useRouter();
    const nextQuery = useSearchParams()
    const redirectPage = nextQuery.get("next")

    const { route } = useAuthenticator((context) => [context.route]);
    React.useEffect(() => {
        if (route === "authenticated") {
            router.replace(redirectPage || "/");
        }
    }, [route, router, redirectPage]);

    //Custom Authenticator Styling
    const components = {
        Header() {
            const theme = useTheme();
            return (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: theme.spacing(2),
                    }}
                >
                    <Image
                        src={"/logo.png"}
                        width={200}
                        height={50}
                        alt={"logo"}
                    />
                </Box>
            )
        },
        Footer() {
            return (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 2,

                    }}
                >
                    <Copyright />
                </Box>
            )
        }
    }

    return (
        <Authenticator
            socialProviders={["google"]}
            initialState={"signIn"}
            components={components}
        />
    )
}

export default SignInPage
