import HeroSection from '../app/components/HeroSection'
import NavBar from '../app/components/NavBar'
import AboutSection from '../app/components/AboutSection'
import ProjectSection from '../app/components/ProjectsSection'
import EmailSection from '../app/components/EmailSection'
import AchievementsSection from '../app/components/AchievementsSection'
import Footer from '../app/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-gradient-to-b from-[#e8e8e8] to-[#ffffff]">
      <NavBar />
      <div className="container mt-16 m-auto p-5 border shadow-md bg-gradient-to-b from-[#2d2d2d] to-[#6dce6d]">
        <HeroSection />
      </div>
      <div className="container mt-16 m-auto p-5 border shadow-md bg-gradient-to-b from-[#2d2d2d] to-[#6dce6d]">
        <AboutSection />
      </div>
      <div className="container mt-16 m-auto p-5 border shadow-md bg-gradient-to-b from-[#2d2d2d] to-[#6dce6d]">
        <AchievementsSection /></div>
      <ProjectSection />
      <EmailSection />
      <Footer />

    </main>
  )
}
