

import Link from "next/link";
const BusinessAutomation = () => {
  const services = [
    {
      title: "Workflow Automation",
      desc: "Automate repetitive business workflows to save time, reduce errors, and improve team productivity.",
    },
    {
      title: "CRM & Sales Automation",
      desc: "Automatically manage leads, follow-ups, and sales pipelines to improve customer relationships.",
    },
    {
      title: "API Integrations",
      desc: "Connect multiple tools and platforms together so your business systems work seamlessly.",
    },
    {
      title: "Data Synchronization",
      desc: "Keep data consistent across apps, databases, and systems in real time without manual work.",
    },
    {
      title: "Reporting & Analytics Automation",
      desc: "Generate automated reports and dashboards to track performance and business insights.",
    },
    {
      title: "Custom Business Applications",
      desc: "Build tailored software solutions designed specifically around your company workflows.",
    },
  ];

  return (
    <section id="automation" className="scroll-mt-24 py-16 px-4 md:px-10 md:py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="inline-block font-heading text-blue-600 py-2 text-5xl font-extrabold mb-6">
          Business Process Automation
        </div>

        <div className="md:w-1/3 mb-12">
          <p className="text-neutral-600">
            We design and build software shaped around your exact workflows —
            from standalone apps to complex multi-system integrations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg border-gray-300 bg-gray-100 
      shadow-[-8px_0_12px_-2px_rgba(37,99,235,0.6)]"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="pt-6 text-center justify-between item-center border-gray-200">
                <Link href="/contact">
                  <button className="bg-blue-600 hover:bg-blue-500 px-3 cursor-pointer mt-3 text-white hover:text-blue-100 font-bold text-sm py-2.5 rounded-lg transition duration-300">
                    Contact Us For More Details →
                  </button>
                </Link>
              </div>
      </div>
    </section>
  );
};

export default BusinessAutomation;