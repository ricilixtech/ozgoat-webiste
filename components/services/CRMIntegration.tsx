import Link from "next/link";

const CRMIntegration = () => {
  const services = [
    {
      title: "CRM Implementation",
      desc: "Set up and configure CRM systems tailored to your sales and customer management processes.",
    },
    {
      title: "HubSpot Integration",
      desc: "Integrate HubSpot with marketing, support, and sales tools for seamless data flow.",
    },
    {
      title: "Salesforce Integration",
      desc: "Connect Salesforce with other business tools to automate and optimize workflows.",
    },
    {
      title: "Lead Management Automation",
      desc: "Automatically capture, track, and nurture leads across your marketing channels.",
    },
    {
      title: "Customer Data Synchronization",
      desc: "Keep customer information updated across all platforms in real time.",
    },
    {
      title: "CRM Customization",
      desc: "Customize CRM dashboards, workflows, and reports according to business needs.",
    },
  ];

  return (
    <section id="crm" className="scroll-mt-24 py-16 px-4 md:px-10 md:py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="font-heading text-blue-600 text-5xl font-extrabold mb-6">
          CRM Integration
        </div>

        <div className="md:w-1/3 mb-12">
          <p className="text-neutral-600">
            We connect your CRM with the tools you use every day to create a unified customer management system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <div key={index} className="p-6 border rounded-lg border-gray-300 bg-gray-100 shadow-[-8px_0_12px_-2px_rgba(37,99,235,0.6)]">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-neutral-600">{item.desc}</p>
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