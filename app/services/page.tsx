import ServicesHero from '@/components/services/ServicesHero';
import BusinessAutomation from '@/components/services/BusinessAutomation';
import Delivery from '@/components/services/Delivery';
import TrustSection from '@/components/home/TrustSection';
import SoftwareDevelopment from '@/components/services/SoftwareDevelopment';
import CRMIntegration from '@/components/services/CRMIntegration';
import MobileWebDevelopment from '@/components/services/MobileWebDevelopment';
import CTASection from '@/components/home/CTASection';

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <SoftwareDevelopment />
      <BusinessAutomation />
      <CRMIntegration />
      {/* <MobileWebDevelopment/> */}
      <CTASection />
      {/* <Delivery /> */}
      {/* <TrustSection/> */}
    </>
  );
}