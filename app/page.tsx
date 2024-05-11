import HeroSection from '../app/components/HeroSection'
import NavBar from '../app/components/NavBar'
import AboutSection from '../app/components/AboutSection'
import ProjectSection from '../app/components/ProjectsSection'
import EmailSection from '../app/components/EmailSection'
import Footer from '../app/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="mt-16 mx-auto p-5 w-screen bg-secondary">
        <HeroSection />
        <div className='w-64 mx-auto my-10 h-2 rounded-lg  opacity-5 lg:w-8/12'></div>
        <AboutSection />
        <div className='w-64 mx-auto my-10 h-2 rounded-lg  opacity-5 lg:w-8/12'></div>
        <ProjectSection />
        <div className='w-64 mx-auto my-10 h-2 rounded-lg opacity-5 lg:w-8/12'></div>
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
