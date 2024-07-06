import { NextRequest, NextResponse } from "next/server";
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils";
import {
  fetchAuthSession,
  fetchUserAttributes,
  getCurrentUser,
} from "aws-amplify/auth/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const redirectPage = request.nextUrl.pathname;

  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return session.tokens !== undefined;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  });

  const isInternal = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const userAttributes = await fetchUserAttributes(contextSpec);
        return userAttributes["custom:permissions"] === "internal";
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  });

  if (authenticated) {
    console.log("Authenticated");
    if (request.nextUrl.pathname.startsWith("/internal")) {
      if (isInternal) {
        console.log("Internal Unipath user");
        return response;
      }
      return NextResponse.redirect(new URL("/home", request.url));
    }
    return response;
  } else if (
    !authenticated &&
    !request.nextUrl.pathname.startsWith("/login") &&
    !request.nextUrl.pathname.startsWith("/temp-login") &&
    !request.nextUrl.pathname.startsWith("/temp-sign-up")
  ) {
    console.log("Not authenticated");
    return NextResponse.redirect(
      new URL(`/auth-redirect?next=${redirectPage}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?=tasks|pathways|internal).*)"],
};
