import {generateClient} from "aws-amplify/data";
import {NextResponse} from "next/server";
import {fetchAuthSession, getCurrentUser} from "aws-amplify/auth";
import {generateServerClientUsingCookies} from "@aws-amplify/adapter-nextjs/api";
import amplifyConfig from "MAIN/amplify_outputs.json" assert {type: "json"};
import {cookies} from "next/headers";
import {cookieBasedClient} from "@/utils/amplifyServerUtils";

export async function GET(request) {
    const res = await fetchPathways()
    return NextResponse.json({data: res.pathways, errors: res.errors});
}

export async function POST(request) {
    console.log(JSON.stringify(request.body))
    return NextResponse.json({data: "POST request received"});
}


const fetchPathways = async () => {
    const {data: pathways, errors} = await cookieBasedClient.models.Pathway.list();
    return {pathways, errors};

}