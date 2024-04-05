import {NextResponse} from "next/server";
import {runWithAmplifyServerContext} from "@/utils/amplifyServerUtils";
import {fetchAuthSession} from "aws-amplify/auth/server";

export async function middleware(request) {
    const response = NextResponse.next()
    const redirectPage = request.nextUrl.pathname;

    const authenticated = await runWithAmplifyServerContext({
        nextServerContext: {request, response},
        operation: async (contextSpec) => {
            try {
                const session = await fetchAuthSession(contextSpec)
                return session.tokens !== undefined
            } catch (error) {
                console.log(error)
                return false
            }
        }
    })


    if (authenticated) {
        console.log('Authenticated');
        return response
    }
    else if (!authenticated && !request.nextUrl.pathname.startsWith('/login')) {
        console.log('Not authenticated');
        return NextResponse.redirect(new URL(`/auth-redirect?next=${redirectPage}`, request.url))
    }
}

export const config = {
    matcher: [
        '/((?=tasks|pathways).*)'
    ]
}