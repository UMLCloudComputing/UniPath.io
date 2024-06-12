import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import outputs from "MAIN/amplify_outputs.json";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";
import { Schema } from "MAIN/amplify/data/resource";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
});

export const cookieBasedClient = generateServerClientUsingCookies<Schema>({
  config: outputs,
  cookies,
});
