import ServicesHero from '@/components/services/ServicesHero';
import BusinessAutomation from '@/components/services/BusinessAutomation';
import CRMSolutions from '@/components/services/CRMSolutions';
import WebsiteSolutions from '@/components/services/WebsiteSolutions';
import CustomWorkflows from '@/components/services/CustomWorkflows';
import AIIntegration from '@/components/services/AIIntegration';
import ServicesCTA from '@/components/services/ServicesCTA';
import Delivery from '@/components/services/Delivery';
import TrustSection from '@/components/home/TrustSection';

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <BusinessAutomation />
      <CRMSolutions />
      <WebsiteSolutions />
      <CustomWorkflows />
      <AIIntegration />
      <Delivery/>
      <TrustSection/>
    </>
  );
}