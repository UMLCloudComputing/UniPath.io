"use client"

import { useAuthenticator } from "@aws-amplify/ui-react"
import { signUp } from "aws-amplify/auth"
import { useRouter, useSearchParams } from "next/navigation"
import { FormEvent, useEffect } from "react"

interface SignUpFormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement
    password: HTMLInputElement
}

interface SignUpForm extends HTMLFormElement {
    readonly elements: SignUpFormElements
}


export default function TempLoginPage() {

    const router = useRouter()



    async function handleSubmit(event: FormEvent<SignUpForm>) {
        event.preventDefault()
        const form = event.currentTarget
        // ... validate inputs
        await signUp({
            username: form.elements.email.value,
            password: form.elements.password.value,
            "options": {
                "userAttributes": {
                    "custom:permissions": "standard"
                }
            }
        })
        router.replace("/confirmation")
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <input type="submit" />
        </form>
    )


}