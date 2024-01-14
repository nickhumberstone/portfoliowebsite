import HeroSection from '../app/components/HeroSection'
import NavBar from '../app/components/NavBar'
import AboutSection from '../app/components/AboutSection'
import ProjectSection from '../app/components/ProjectsSection'
import EmailSection from '../app/components/EmailSection'
import AchievementsSection from '../app/components/AchievementsSection'
import Footer from '../app/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className=" container mt-16 p-5 mx-auto border">
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
