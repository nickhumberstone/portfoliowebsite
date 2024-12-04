import Footer from './components/Footer';
import ShopperToggleBar from './components/ShopperToggleBar';
import BasketButton from './components/BasketButton';
import IntroductionSection from './components/sections/IntroductionSection';
import CategorySection from './components/sections/CategorySection';
import LinkBlock from './components/blocks/LinkBlock';
import Title from './components/blocks/Title';

export default function Home() {
  return (
    <main className="w-screen h-full bg-brand-bg-dark pt-20 sm:pt-20 flex flex-col items-center">
      <ShopperToggleBar />
      <div className="phone-screen bg-brand-bg-alt sm:w-4/5 max-w-3xl p-6 rounded-3xl sm:mt-10 mt-16 mx-auto shadow-lg">
        <IntroductionSection />
      </div>
      <div className="phone-screen bg-brand-bg-alt sm:w-4/5 max-w-3xl p-6 rounded-3xl mt-4 mx-auto shadow-lg">
        <h2 className="text-center text-2xl bg-brand-primary rounded-lg text-brand-text-inverse p-2 my-2">
          My Experience
        </h2>
        <CategorySection title="Technologies" category="technologies" />
        <CategorySection title="Agile" category="agile" />
        <CategorySection title="Experience" category="experience" />
        <CategorySection title="Projects" category="projects" />
        <CategorySection title="Education" category="education" />
        <CategorySection title="Volunteering" category="volunteering" />
      </div>

      <div className="phone-screen bg-brand-bg-alt sm:w-4/5 max-w-3xl p-6 rounded-3xl mt-10 mx-auto shadow-lg">
        <LinkBlock
          linkText="Download Retrospect from the Google Play Store"
          href="https://play.google.com/store/apps/details?id=com.nickhumberstone.retrospectapp"
        />

        <div className="buttons-container text-brand-text-secondary flex flex-wrap gap-4 justify-center mt-2">
          <LinkBlock
            linkText="Email"
            href="mailto:nickhumberstone@gmail.com"
          />
          <LinkBlock
            linkText="GitHub"
            href="https://github.com/nickhumberstone"

          />
          <LinkBlock
            linkText="LinkedIn"
            href="https://linkedin.com/in/nickhumberstone"

          />
        </div>
      </div>


      <Footer />
      <BasketButton />
    </main>
  );
}
