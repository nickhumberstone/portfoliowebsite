import NavBar from "../../app/components/NavBar"
import Footer from "../../app/components/Footer"

export default function about() {
    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#e8e8e8] to-[#ffffff] text-white">
            <NavBar />
            <div className="mt-16 mx-auto p-5 shadow-lg w-screen bg-gradient-to-b from-[#000000] to-[#1c1d1c]">
                <h1 className="text-center text-4xl mb-4">About</h1>
                <div className="flex flex-col items-center gap-4 text-lg">
                    <p className="md:w-1/2">I grew up in Billericay, Essex, UK.</p>
                    <p className="md:w-1/2">I then went on to attend Westcliff High School for Boys, a grammar school in Southend. I stayed on here through Sixth Form. My GCSEs and A-Levels focused on Maths and Science predominantly.</p>
                    <p className="md:w-1/2">I went to Brunel University to study Biomedical Sciences. While there, I volunteered for my students&apos; union and got involved in local, student politics. This was also when I first started playing Volleyball, and went on to manage and organise the entirety of the volleyball club in my second year. As part of this, I had my first experience of writing HTML and CSS, firstly through observing a friend that had to design a basic website for their course, and then to make some updated to the volleyball club&apos;s page.</p>
                    <p className="md:w-1/2">I went on a placement year where I was an e-Learning Technologist for St George&apos;s University of London. This was me taking one foot our of medicine, and putting one foot into tech. Whilst there, I built and deployed a PhoneGap app to both the Android and iOS stores to help students navigate the e-learning software the university used.</p>
                    <p className="md:w-1/2">I became involved in local politics, and concerned about the opportunities in biomedical sciences, particularly regarding the ethical tension of selling pharmaceuticals. I came across a job working for the Green Party in a tech-focussed role, and was successful. I&apos;ve been in that role for the past 7 years.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    )
}