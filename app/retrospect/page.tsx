import Footer from "../components/Footer"
import Image from "next/image"

export default function retrospect() {
    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#e8e8e8] to-[#ffffff]">
            <div className="mx-auto p-5 shadow-lg w-screen text-primary">
                <h1 className="text-center text-4xl m-2 font-bold">Retrospect App</h1>
                <div className="md:w-1/3 sm:w-4/5 text-center m-auto text-xl">
                    <p>Each day, you&apos;re prompted to answer a reflective question.
                    </p>
                    <p className="m-4">Upon answering, you can then view your answers to the same question from previous weeks. You can also view responses made today from the community. The questions are on a 28 day rotation.</p>
                    <div className="retrospect-button h-10 rounded-lg bg-primary text-secondary  m-2 p-4 justify-center items-center align-middle flex">
                        <a className="text-center" href="mailto:nickhumberstone@gmail.com?subject=Joining%20closed%20testing%20for%20Retrospect&body=Please%20add%20me%20to%20the%20testing%20group"><p className="text-center">Sign up for Retrospect App (Closed Testing)</p></a>
                    </div>
                </div>
                <div className="p-4">
                    <h2 className="text-4xl text-center m-4">Screenshots</h2>
                    <div className="flex flex-row gap-8 justify-center">
                        <Image className="" src="/images/RsQuestionAd.png" width={200} height={400} alt="Retrospect App Daily Question Screenshot" />
                        <Image className="" src="/images/RsCommunityAnswers.png" width={200} height={400} alt="Retrospect App Daily Question Screenshot" />
                        <Image className="" src="/images/RsMyAnswers.png" width={200} height={400} alt="Retrospect App Community Responses Screenshot" />
                    </div>
                    <p className="text-center p-5"><a href="https://docs.google.com/document/d/1U2mku0lRV51uN04d_WdtlobDEAfrdQFii-b59Z3PYSQ/edit?usp=sharing">Privacy Policy</a></p>
                </div>
            </div>
            <Footer />
        </main >
    )
}