import NavBar from "../../app/components/NavBar"
import Footer from "../../app/components/Footer"
import Image from "next/image"

export default function retrospect() {
    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#e8e8e8] to-[#ffffff]">
            <NavBar />
            <div className="mt-16 mx-auto p-5 shadow-lg w-screen text-primary">
                <h1 className="text-center text-4xl m-2 font-bold">Retrospect App</h1>
                <div className="md:w-1/3 sm:w-4/5 text-center m-auto text-xl">
                    <p>Each day, you&apos;re prompted to answer a reflective question.
                    </p>
                    <p className="m-4">Upon answering, you can then view your answers to the same question from previous weeks. You can also view responses made today from the community. The questions are on a 7 day rotation.</p>
                    <p>Sign up below to join the waiting list.</p>
                </div>

                <iframe src="https://cdn.forms-content-1.sg-form.com/f66779a0-1288-11ef-aa14-fab44ede40b0" className="w-screen h-[530px]" />
                <div className="">
                    <h2 className="text-4xl text-center m-4">Screenshots</h2>
                    <div className="flex flex-row gap-8 justify-center">
                        <Image className="" src="/images/RetroHome.jpeg" width={200} height={400} alt="Retrospect App Daily Question Screenshot" />
                        <Image className="" src="/images/RetroDailyQuestion.jpeg" width={200} height={400} alt="Retrospect App Daily Question Screenshot" />
                        <Image className="" src="/images/RetroCommunityAnswers.jpeg" width={200} height={400} alt="Retrospect App Community Responses Screenshot" />
                    </div>
                </div>


                {/* <div className="flex flex-1 p-5 gap-4 justify-center items-center md:flex-row flex-col-reverse">
                    <Image className="md:block" src="/images/RetroHome.jpeg" width={200} height={400} alt="Retrospect App Daily Question Screenshot" />

                    <div className="container w-1/2 p-4 text-xl text-center">
                        <h2 className="text-4xl text-center mb-4 hidden md:block">The Hype</h2>
                        <p className="mb-4">I built an app. It&apos;s called Retrospect.
                        </p>
                        <p>Coming soon to the Google Play Store.</p>

                    </div>
                </div>

                <div className="w-64 mx-auto my-10 h-2 rounded-lg bg-[#ffffff] opacity-5 lg:w-8/12"></div>



                <div className="flex flex-1 p-5 gap-4 justify-center items-center">
                    <Image className="hidden md:block" src="/images/RetroDailyQuestion.jpeg" width={200} height={400} alt="Retrospect App Daily Question Screenshot" />
                    <div className="container md:w-1/2 p-4 text-xl">
                        <h2 className="text-4xl text-center mb-4">The Sell</h2>
                        <p className="mb-4"> Journalling and self reflection are recognised as hugely beneficial activities, but finding the time is hard.
                        </p>
                        <p>Retrospect introduces you to regular journalling and self reflection by asking you a single short question each day, on a 7 day rotation. Once you answer the question for the day, you can then view responses from the community, and see your previous responses to that same question. </p>
                    </div>
                </div>





                <div className="w-64 mx-auto my-10 h-2 rounded-lg bg-[#ffffff] opacity-5 lg:w-8/12"></div>
                <div className="flex flex-1 p-5 gap-4 justify-center items-center">
                    <Image className="hidden md:block" src="/images/RetroCommunityAnswers.jpeg" width={200} height={400} alt="Retrospect App Community Responses Screenshot" />
                    <div className="container md:w-1/2 p-4 text-xl">
                        <h2 className="text-4xl text-center mb-4">The Motivation</h2>
                        <p className="mb-4"> Like most coding projects, this app was developed with a loved-one in mind. My partner enjoys maintaining and has completed a 5 year journal which has a 365 day rotation of questions. One of the challenges of doing this is accidentally peeking at a previous response to a question, which then prevents you from answering the question with an unclouded mind.
                        </p>
                        <p>Retrospect takes that concept, simplifies it down to a weekly rotation, adds community perspectives and responses, and prevents you from seeing your previous responses until you&apos;ve answered the question that day.</p>
                    </div>
                </div>
                <div className="w-64 mx-auto my-10 h-2 rounded-lg bg-[#ffffff] opacity-5 lg:w-8/12"></div>


                <div className="flex flex-1 p-5 gap-4 justify-center items-center">
                    <Image className="hidden md:block" src="/images/RetroHome.jpeg" width={200} height={400} alt="Retrospect App Daily Question Screenshot" />
                    <div className="container md:w-1/2 p-4 text-xl">
                        <h2 className="text-4xl text-center mb-4">The Technical Stuff</h2>
                        <p>Retrospect is a React Native Expo app developed individually by Nick Humberstone. It is integrated with Auth0 for user management and secure login. The backend consists of Node JS, Express, and MySQL to store responses, user accounts info, and the weekly rotation of questions. </p>
                    </div>
                </div> */}
            </div>
            <Footer />
        </main >
    )
}