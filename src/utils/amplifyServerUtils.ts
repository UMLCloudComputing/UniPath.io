import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import config from "ROOT/amplify_outputs.json";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";
import { Schema } from "ROOT/amplify/data/resource";

export const { runWithAmplifyServerContext } = createServerRunner({
  config,
});

export const cookieBasedClient = generateServerClientUsingCookies<Schema>({
  config: config,
  cookies,
});
