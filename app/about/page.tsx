import VisionPhilosophy from '@/components/about/VisionPhilosophy';
import Founders from '@/components/about/Founders';
import AboutHero from '@/components/about/AboutHero';
import TrustSection from '@/components/home/TrustSection';
import CTASection from '@/components/home/CTASection';

export default function AboutPage() {
  return (
    <>
      <AboutHero/>
      <VisionPhilosophy />
      <Founders />
      {/* <Values />
      <WhyDifferent /> */}
      {/* <TrustSection/> */}
      <CTASection/>
    </>
  );
}