import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Image from "next/image"

export default function retrospect() {
    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#e8e8e8] to-[#ffffff]">
            <div className="mt-16 mx-auto p-5 shadow-lg w-screen text-primary">
                <div className="">
                    <h2 className="text-4xl text-center m-4">Screenshots</h2>
                    <div className="flex flex-row gap-8 justify-center">
                        <Image className="" src="/images/RetroHome.jpeg" width={200} height={400} alt="Retrospect App Daily Question Screenshot" />
                        <Image className="" src="/images/RetroDailyQuestion.jpeg" width={200} height={400} alt="Retrospect App Daily Question Screenshot" />
                        <Image className="" src="/images/RetroCommunityAnswers.jpeg" width={200} height={400} alt="Retrospect App Community Responses Screenshot" />
                        <a href="com.nickhumberstone.retrospectapp.auth0://dev-questionanswer.uk.auth0.com/android/com.nickhumberstone.retrospectapp/callback">GO BACK TO APP</a>
                    </div>
                    <p>Privacy policy can be viewed here: <a href="https://docs.google.com/document/d/1U2mku0lRV51uN04d_WdtlobDEAfrdQFii-b59Z3PYSQ/edit?usp=sharing">Privacy Policy</a></p>
                </div>

                <div className="w-64 mx-auto my-10 h-2 rounded-lg bg-[#ffffff] opacity-5 lg:w-8/12"></div>
                <div className="flex flex-1 p-5 gap-4 justify-center items-center">
                    <Image className="hidden md:block" src="/images/RetroCommunityAnswers.jpeg" width={200} height={400} alt="Retrospect App Community Responses Screenshot" />

                </div>
            </div>
        </main >
    )
}