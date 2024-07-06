"use client"

import { signIn } from "aws-amplify/auth"
import { FormEvent, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuthenticator } from "@aws-amplify/ui-react"


interface LoginFormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement
    password: HTMLInputElement
}

interface LoginForm extends HTMLFormElement {
    readonly elements: LoginFormElements
}


export default function TempLoginPage() {

    const router = useRouter()

    const nextQuery = useSearchParams()
    const redirectPage = nextQuery.get("next")

    const { route } = useAuthenticator((context) => [context.route]);
    useEffect(() => {
        if (route === "authenticated") {
            router.replace(redirectPage || "/");
        }
    }, [route, router, redirectPage]);
    async function handleSubmit(event: FormEvent<LoginForm>) {
        event.preventDefault()
        const form = event.currentTarget
        // ... validate inputs
        await signIn({
            username: form.elements.email.value,
            password: form.elements.password.value,
        })
        router.replace(redirectPage || "/")
    }

    const redirectToSignUpPage = () => {
        router.replace("/temp-sign-up")
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />

            <button type="submit">Log in</button>
            <br />
            <button onClick={redirectToSignUpPage}>No account? Sign Up</button>
        </form>
    )


}