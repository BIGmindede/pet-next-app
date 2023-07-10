'use client'

export default function ErrorComponent({error} : {error: Error}) {
    return (
        <h1>{error.message}</h1>
    )
}