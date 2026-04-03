import ServicesHero from '@/components/services/ServicesHero';
import BusinessAutomation from '@/components/services/BusinessAutomation';
import Delivery from '@/components/services/Delivery';
import TrustSection from '@/components/home/TrustSection';
import SoftwareDevelopment from '@/components/services/SoftwareDevelopment';
import CRMIntegration from '@/components/services/CRMIntegration';
import MobileWebDevelopment from '@/components/services/MobileWebDevelopment';

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      {/* <BusinessAutomation /> */}
      <SoftwareDevelopment/>
      <CRMIntegration/>
      <MobileWebDevelopment/>

      <Delivery/>
      {/* <TrustSection/> */}
    </>
  );
}