"use client";
// React
import * as React from "react";

// Next.js
import {useRouter, useSearchParams} from "next/navigation";

// AWS
import {Authenticator, useAuthenticator, withAuthenticator} from "@aws-amplify/ui-react";

// Page: SignInPage;
function SignInPage({user, signOut}) {
    const router = useRouter();
    const nextQuery = useSearchParams()
    const redirectPage = nextQuery.get("next")

    const { route } = useAuthenticator((context) => [context.route]);
    React.useEffect(() => {
        if (route === "authenticated") {
            router.replace(redirectPage || "/");
        }
    }, [route, router, redirectPage]);

    return <Authenticator
        socialProviders={["google"]}
        initialState={"signIn"} />;

}

export default SignInPage
