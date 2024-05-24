"use client"
import { useEffect } from "react"


export default function retrospect() {
    let URL = ""
    useEffect(() => {
        URL = window.location.href
    })

    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#e8e8e8] to-[#ffffff]">
            <div className="mt-16 mx-auto p-5 shadow-lg w-screen text-primary">
                <a href="com.nickhumberstone.retrospectapp.auth0://dev-questionanswer.uk.auth0.com/android/com.nickhumberstone.retrospectapp/callback">GO BACK TO APP</a>
                <p></p>
                <a href="https://dev-questionanswer/continue?state=THE_ORIGINAL_STATE">GO BACK TO APP</a>
                <p></p>
                <div className="">
                    <p>{URL}</p>
                    <p>Privacy policy can be viewed here: <a href="https://docs.google.com/document/d/1U2mku0lRV51uN04d_WdtlobDEAfrdQFii-b59Z3PYSQ/edit?usp=sharing">Privacy Policy</a></p>
                </div>

                <div className="w-64 mx-auto my-10 h-2 rounded-lg bg-[#ffffff] opacity-5 lg:w-8/12"></div>




            </div>
        </main >
    )
}