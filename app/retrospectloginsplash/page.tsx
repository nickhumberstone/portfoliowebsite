"use client"

import { useSearchParams } from 'next/navigation'

export default function retrospectloginsplash() {
    const searchParams = useSearchParams()
    const url = searchParams.get('state') ?? ''

    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#e8e8e8] to-[#ffffff]">
            <div className="mt-16 mx-auto p-5 shadow-lg w-screen text-primary">
                <a href="com.nickhumberstone.retrospectapp.auth0://dev-questionanswer.uk.auth0.com/android/com.nickhumberstone.retrospectapp/callback">GO BACK TO APP</a>
                <p></p>
                <a href={`https://dev-questionanswer.uk.auth0.com/continue?state=${url}`}>GO BACK TO APP Original state</a>
                <p></p>
                <div className="">

                    <p>STATE = {url}</p>
                    <p>Privacy policy can be viewed here: <a href="https://docs.google.com/document/d/1U2mku0lRV51uN04d_WdtlobDEAfrdQFii-b59Z3PYSQ/edit?usp=sharing">Privacy Policy</a></p>
                </div>

                <div className="w-64 mx-auto my-10 h-2 rounded-lg bg-[#ffffff] opacity-5 lg:w-8/12"></div>

                {/* 
use effect doesn't work here, and this is probably not he best way to pull the url. The url from auth0 redirect will contain state that I need to extract/read in order to properly have a button to take users back to continuing registration. Otherwise they have no opportunity to save their password to the browser that auth0 is opened with.

https://community.auth0.com/t/browser-closing-too-quickly-and-cant-save-password-when-logging-into-mobile-application/101498

https://auth0.com/docs/customize/actions/flows-and-triggers/login-flow/redirect-with-actions - the docs here don't have good enough examples of how to do it

 */}
            </div>
        </main >
    )
}