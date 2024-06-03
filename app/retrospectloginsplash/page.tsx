"use client"

import { useSearchParams } from 'next/navigation'

export default function Retrospectloginsplash() {
    const searchParams = useSearchParams()
    const url = searchParams.get('state') ?? ''

    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#e8e8e8] to-[#ffffff]">

            <div className="mt-16 mx-auto p-5 shadow-lg w-screen text-primary">
                <h1 className="text-primary text-2xl lg:text-4xl font-extrabold">You&apos;re almost done!</h1>
                <div className='text-primary mb-2 opacity-50 text-lg lg:text-2xl py-2'>
                    <p className='mb-2'>Make sure to save your password so you can log in more easily in future.</p>
                </div>

                <a className="text-secondary bg-[#4763d2] p-4 w-64" href={`https://dev-questionanswer.uk.auth0.com/continue?state=${url}`}>Complete login</a>

                <div className="mt-5 opacity-50">

                    <p>Privacy policy can be viewed here: <a href="https://docs.google.com/document/d/1U2mku0lRV51uN04d_WdtlobDEAfrdQFii-b59Z3PYSQ/edit?usp=sharing">Privacy Policy</a></p>
                </div>

            </div>
        </main >
    )
}