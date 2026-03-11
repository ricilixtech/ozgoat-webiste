import Link from "next/link";

const CRMIntegration = () => {
  const services = [
    {
      title: "CRM Implementation",
      desc: "Expertly set up and configure CRM systems built around your unique sales process. We ensure your team hits the ground running with a platform that actually works.",
    },
    {
      title: "HubSpot Integration",
      desc: "Connect HubSpot with your marketing, support, and sales tools. We ensure a seamless data flow so you never lose track of customer interaction again.",
    },
    {
      title: "Salesforce Integration",
      desc: "Maximize your ROI with custom Salesforce solutions. We integrate Salesforce with your existing business apps to automate workflows and optimize performance.",
    },
    {
      title: "Lead Management Automation",
      desc: "Don't let leads go cold. Automatically capture, track, and nurture leads across all marketing channels to turn more prospects into loyal customers.",
    },
    {
      title: "Customer Data Synchronization",
      desc: "Don't let leads go cold. Automatically capture, track, and nurture leads across all marketing channels to turn more prospects into loyal customers.",
    },
    {
      title: "CRM Customization",
      desc: "Standard CRMs don't fit every business. We customize dashboards, reports, and workflows to match your specific operational needs and growth goals.",
    },
  ];

  return (
    <section id="crm" className="scroll-mt-24 py-8 xl:py-12 px-4 md:px-10 md:py-10 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="font-heading text-blue-600 text-4xl xl:text-5xl font-extrabold mb-6">
        Expert CRM Integration & Sales Automation
        </div>

        <div className="md:w-2/3 xl:w-1/2 mb-12">
          <p className="text-neutral-600">
          We connect your CRM with the tools you use every day to create a unified customer management system. Boost your sales efficiency with seamless HubSpot and Salesforce integrations tailored for Australian businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <div key={index} className="p-4 xl:p-6 border rounded-lg border-gray-300 bg-gray-100 shadow-[-8px_0_12px_-2px_rgba(37,99,235,0.6)]">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-neutral-600 text-[12px] xl:text-[15px]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-6 text-center">
          <Link href="/contact">
            <button className="bg-blue-600 hover:bg-blue-500 px-3 mt-3 text-white font-bold text-sm py-2.5 rounded-lg transition">
              Contact Us For More Details →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CRMIntegration;