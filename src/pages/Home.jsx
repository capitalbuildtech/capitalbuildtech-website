import AnimatedPage from '../components/AnimatedPage.jsx';
import ApproachSection from '../components/ApproachSection.jsx';
import CinematicBanner from '../components/CinematicBanner.jsx';
import ContactCTA from '../components/ContactCTA.jsx';
import Hero from '../components/Hero.jsx';
import HomeIntro from '../components/HomeIntro.jsx';
import LargeTypography from '../components/LargeTypography.jsx';
import ProjectsShowcase from '../components/ProjectsShowcase.jsx';
import SEO from '../components/SEO.jsx';
import ServicesPreview from '../components/ServicesPreview.jsx';
import TeamPreview from '../components/TeamPreview.jsx';
import Testimonials from '../components/Testimonials.jsx';
import VisionMission from '../components/VisionMission.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';

export default function Home() {
  return (
    <AnimatedPage>
      <SEO />
      <Hero />
      <HomeIntro />
      <LargeTypography />
      <ServicesPreview />
      <ApproachSection />
      <ProjectsShowcase />
      <WhyChooseUs />
      <CinematicBanner />
      <TeamPreview />
      <VisionMission />
      <Testimonials />
      <ContactCTA />
    </AnimatedPage>
  );
}
