"use client"
import { confirmSignUp } from "aws-amplify/auth"
import { useRouter, useSearchParams } from "next/navigation"
import { FormEvent } from "react"

interface ConfirmSignUpFormElements extends HTMLFormControlsCollection {
    confirmationCode: HTMLInputElement
    email: HTMLInputElement
}

interface ConfirmSignUpForm extends HTMLFormElement {
    readonly elements: ConfirmSignUpFormElements
}

export default function TempConfirmationPage() {
    const router = useRouter()

    const nextQuery = useSearchParams()
    const redirectPage = nextQuery.get("next")
    async function handleSubmit(event: FormEvent<ConfirmSignUpForm>) {
        event.preventDefault()
        const form = event.currentTarget
        // ... validate inputs
        await confirmSignUp({
            username: form.elements.email.value,
            confirmationCode: form.elements.confirmationCode.value,
        })
        router.replace(redirectPage || "/")
    }

    return (
        <div>
            <h1>Confirmation</h1>
            <p>Your account has been created. Please check your email for a confirmation link.</p>
            <form onSubmit={handleSubmit}>
                <input name="email"></input>
                <input name="confirmationCode"></input>
                <button type="submit">Confirm</button>
            </form>
        </div>
    )
}