import NavBar from '../components/archive/NavBar'
import Footer from '../components/MobileFooter'
import EmailSection from '../components/EmailSection'

export default function contact() {
    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#e8e8e8] to-[#ffffff]">
            <NavBar />
            <div className="mt-16 mx-auto p-5 shadow-lg w-screen text-primary">
                <EmailSection />
            </div>
            <Footer />
        </main>
    )
}