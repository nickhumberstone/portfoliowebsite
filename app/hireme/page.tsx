"use client"

import { useSearchParams } from 'next/navigation'
import EmailSection from '../components/EmailSection'

export default function Retrospectloginsplash() {
    const searchParams = useSearchParams()
    const url = searchParams.get('state') ?? ''

    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#e8e8e8] to-[#ffffff]">

            <div className="mt-16 mx-auto p-5 shadow-lg w-screen text-primary">
                <h1 className="text-primary text-2xl lg:text-4xl font-extrabold">You&apos;re almost done!</h1>
                <div className='text-primary mb-2 opacity-50 text-lg lg:text-2xl py-2'>
                    <p className='mb-2'>Hire me</p>
                    <EmailSection />
                </div>
            </div>
        </main >
    )
}