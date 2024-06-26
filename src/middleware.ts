import { NextRequest, NextResponse } from "next/server";
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils";
import { fetchAuthSession, fetchUserAttributes } from "aws-amplify/auth/server";

export async function middleware(request: NextRequest) {
  await authCheck(request);
  await adminCheck(request);
}

export const config = {
  matcher: ["/((?=tasks|pathways|admin).*)"],
};

const authCheck = async (request: NextRequest) => {
  const response = NextResponse.next();
  const redirectPage = request.nextUrl.pathname;

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

  if (authenticated) {
    console.log("Authenticated");
    return response;
  } else if (!authenticated && !request.nextUrl.pathname.startsWith("/login")) {
    console.log("Not authenticated");
    return NextResponse.redirect(
      new URL(`/auth-redirect?next=${redirectPage}`, request.url)
    );
  }
};

const adminCheck = async (request: NextRequest) => {
  const response = NextResponse.next();

  const isAdmin = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const userAttributes = await fetchAuthSession(contextSpec);
        const userGroupAttribute = userAttributes.tokens.accessToken.payload[
          "cognito:groups"
        ] as string[];
        return userGroupAttribute.includes("ADMIN");
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  });

  if (isAdmin) {
    console.log("is admin");
    return response;
  } else {
    console.log("Not an admin");
    return NextResponse.redirect(new URL(`/home`, request.url));
  }
};
