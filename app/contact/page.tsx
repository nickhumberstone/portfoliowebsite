import NavBar from '../../app/components/NavBar'
import Footer from '../../app/components/Footer'
import EmailSection from '../components/EmailSection'

export default function contact() {
    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#e8e8e8] to-[#ffffff] text-white">
            <NavBar />
            <div className="mt-16 mx-auto p-5 shadow-lg w-screen bg-gradient-to-b from-[#000000] to-[#1c1d1c]">
                <EmailSection />
            </div>
            <Footer />
        </main>
    )
}