import { NextRequest, NextResponse } from "next/server";
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils";
import { fetchAuthSession } from "aws-amplify/auth/server";
import { fetchUserAttributes } from "aws-amplify/auth/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const redirectPage = request.nextUrl.pathname;

  //this function checks if the user is authenticated
  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return session.tokens !== undefined;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  });

  //this function checks if the user is an admin
  const isAdmin = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const userAttr = await fetchUserAttributes(contextSpec);
        return userAttr["custom:role"] === "admin";
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  });

  //check if user is signed in
  if (authenticated) {
    console.log("Authenticated");
    if (request.nextUrl.pathname.startsWith("/admin")) {
      if (isAdmin) {
        console.log("Admin successfully authenticated");
        return response;
      } else {
        console.log("User is not an admin");
        return NextResponse.redirect(new URL("/home", request.url));
      }
    }
    return response;
  } else if (!authenticated && !request.nextUrl.pathname.startsWith("/login")) {
    console.log("Not authenticated");
    return NextResponse.redirect(
      new URL(`/auth-redirect?next=${redirectPage}`, request.url)
    );
  }
}

//add pages here to be processed by the middleware
export const config = {
  matcher: ["/((?=tasks|my-pathways|admin).*)"],
};
