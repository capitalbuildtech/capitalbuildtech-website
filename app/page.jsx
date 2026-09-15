import AnimatedPage from '@/components/AnimatedPage';
import ApproachSection from '@/components/ApproachSection';
import CinematicBanner from '@/components/CinematicBanner';
import ContactCTA from '@/components/ContactCTA';
import Hero from '@/components/Hero';
import HomeIntro from '@/components/HomeIntro';
import LargeTypography from '@/components/LargeTypography';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import ServicesPreview from '@/components/ServicesPreview';
import TeamPreview from '@/components/TeamPreview';
import Testimonials from '@/components/Testimonials';
import VisionMission from '@/components/VisionMission';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <AnimatedPage>
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
