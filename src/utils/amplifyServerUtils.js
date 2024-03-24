import {createServerRunner} from "@aws-amplify/adapter-nextjs";
import config from "MAIN/amplifyconfiguration.json";
import {generateServerClientUsingCookies} from "@aws-amplify/adapter-nextjs/api";
import {cookies} from "next/headers";

export const {runWithAmplifyServerContext} = createServerRunner({
    config
})

export const cookieBasedClient = generateServerClientUsingCookies({
    config: config,
    cookies
})