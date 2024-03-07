"use client";
// React
import * as React from "react";

// Next.js
import { useRouter } from "next/navigation";

// AWS
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

// Page: SignInPage;
export default function SignInPage() {
    const router = useRouter();

    const { route } = useAuthenticator((context) => [context.route]);
    React.useEffect(() => {
        if (route === "authenticated") {
            router.replace("/home");
        }
    }, [route, router]);

    return <Authenticator
        socialProviders={["google"]}
        initialState={"signIn"} />;
}
