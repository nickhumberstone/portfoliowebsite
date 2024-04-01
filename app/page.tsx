import HeroSection from '../app/components/HeroSection'
import NavBar from '../app/components/NavBar'
import AboutSection from '../app/components/AboutSection'
import ProjectSection from '../app/components/ProjectsSection'
import EmailSection from '../app/components/EmailSection'
import Footer from '../app/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#e8e8e8] to-[#ffffff]">
      <NavBar />
      <div className="mt-16 mx-auto p-5 shadow-lg w-screen bg-gradient-to-b from-[#000000] to-[#1c1d1c]">
        <HeroSection />
        <div className='w-64 mx-auto my-10 h-2 rounded-lg bg-[#ffffff] opacity-5 lg:w-8/12'></div>
        <AboutSection />
        <div className='w-64 mx-auto my-10 h-2 rounded-lg bg-[#ffffff] opacity-5 lg:w-8/12'></div>
        <ProjectSection />
        <div className='w-64 mx-auto my-10 h-2 rounded-lg bg-[#ffffff] opacity-5 lg:w-8/12'></div>
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
