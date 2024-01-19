import HeroSection from '../app/components/HeroSection'
import NavBar from '../app/components/NavBar'
import AboutSection from '../app/components/AboutSection'
import ProjectSection from '../app/components/ProjectsSection'
import EmailSection from '../app/components/EmailSection'
import AchievementsSection from '../app/components/AchievementsSection'
import Footer from '../app/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col bg-gradient-to-b from-[#143313] to-[#65f063]">
      <NavBar />
      <div className="container mt-16 p-5 border shadow-md bg-gradient-to-b from-[#040a04] to-[#c6ffc5]">
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />

    </main>
  )
}
