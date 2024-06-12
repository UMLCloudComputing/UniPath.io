import { NextResponse } from "next/server";
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils";
import { fetchAuthSession, fetchUserAttributes } from "aws-amplify/auth/server";

export async function middleware(request) {
  const response = NextResponse.next();
  const redirectPage = request.nextUrl.pathname;

  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        console.log(session);
        return session.tokens !== undefined;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  });

  // const isAdmin = await runWithAmplifyServerContext({
  //     nextServerContext: { request, response },
  //     operation: async (contextSpec) => {
  //         try {
  //             const attributes = await fetchAuthSession(contextSpec)
  //             console.log(attributes)
  //             return attributes
  //         } catch (error) {
  //             console.log(error)
  //             return false
  //         }
  //     }
  // })

  if (authenticated) {
    // if (request.nextUrl.pathname.startsWith("/admin") && !isAdmin) {
    //   console.log("User is not an admin. Not allowed");
    //   return NextResponse.redirect(new URL("/home", request.url));
    // }
    console.log("Authenticated");
    return response;
  } else if (!authenticated && !request.nextUrl.pathname.startsWith("/login")) {
    console.log("Not authenticated");
    return NextResponse.redirect(
      new URL(`/auth-redirect?next=${redirectPage}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?=tasks|pathways|admin).*)"],
};
