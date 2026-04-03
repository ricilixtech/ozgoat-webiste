

import Link from "next/link";
const BusinessAutomation = () => {
  const services = [
    {
      title: "Workflow Automation",
      desc: "end-to-end processes",
    },
    {
      title: "AI document processing",
      desc: "extract, classify, route data",
    },
    {
      title: "Customer communication workflows",
      desc: "automated follow-ups & reminders",
    },
    {
      title: "CRM automation",
      desc: "leads, tasks, pipeline updates",
    },
    {
      title: "Reporting & data pipelines",
      desc: "automated dashboards & reports",
    },
    {
      title: "Internal tooling",
      desc: "lightweight automation apps",
    },
  ];

  return (
    <section id="automation" className="scroll-mt-24 py-8 xl:py-12 px-4 md:px-10 md:py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="inline-block font-heading text-blue-600 py-2 text-4xl xl:text-5xl font-extrabold mb-6">
        Automate
        </div>

        <div className="md:w-2/3 xl:w-1/2 mb-12 font-body text-neutral-600">
          <p className="">
          Every hour your team spends on manual tasks is an hour not spent on your customers.
          </p>
          <p className="py-3">We identify repetitive, time-consuming tasks and automate them reliably. Not because automation is trendy, but because freeing your team from low-value work improves efficiency and morale.</p>
          <p>We start with problems, not tools, then match the right platform (Zapier, Make, n8n, or custom workflows).</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-4 xl:p-6 border rounded-lg border-gray-300 bg-gray-100 
      shadow-[-8px_0_12px_-2px_rgba(37,99,235,0.6)]"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-neutral-600 text-[12px] xl:text-[15px]">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="pt-6 text-center justify-between item-center border-gray-200">
                <Link href="/contact">
                  <button className="bg-blue-600 hover:bg-blue-500 px-3 cursor-pointer mt-3 text-white hover:text-blue-100 font-bold text-sm py-2.5 rounded-lg transition duration-300">
                  Show us what you're doing manually →
                  </button>
                </Link>
              </div>
      </div>
    </section>
  );
};

export default BusinessAutomation;