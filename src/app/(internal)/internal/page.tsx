"use client"

import { generateClient } from "aws-amplify/api"
import type { Schema } from "MAIN/amplify/data/resource"
import { useState, useEffect } from "react"

const client = generateClient<Schema>({
    authMode: "userPool"
})

export default function InternalHomePage() {

    const [orgs, setOrgs] = useState<Schema["Organization"]["type"]>()

    const fetchOrgs = async () => {
        const { data, errors } = await client.models.Organization.list()
        if (errors) console.error(errors)
        console.log(data)
        return
    }

    useEffect(() => {
        fetchOrgs()
    })

    return (
        <div>
            <h1>Organizations</h1>
            {/* <ul>
                {orgs.map((organization) => (
                    <li key={organization.id}>
                        <h2>{organization.name}</h2>
                        <p>{organization.description}</p>
                    </li>
                ))}
            </ul> */}
        </div>
    )

}