

import Link from "next/link";
const BusinessAutomation = () => {
  const services = [
    {
      title: "Workflow Automation",
      desc: "Say goodbye to boring, repetitive tasks. We automate your manual workflows to save time, eliminate human error, and boost your team's daily output.",
    },
    {
      title: "CRM & Sales Automation",
      desc: "Never miss a lead again. Automatically track follow-ups and manage your sales pipeline so you can close deals faster and keep your customers happy.",
    },
    {
      title: "API Integrations",
      desc: "Make your tools talk to each other. We connect your existing platforms seamlessly so your data flows exactly where it needs to be, without the mess.",
    },
    {
      title: "Data Synchronization",
      desc: "Keep your info consistent across all apps and databases in real-time. No more manual data entry or double-handling—just one source of truth.",
    },
    {
      title: "Reporting & Analytics Automation",
      desc: "Get real-time insights with automated dashboards. Track your performance and make smarter, data-backed decisions without spending hours on spreadsheets.",
    },
    {
      title: "Custom Business Applications",
      desc: "Software built specifically for YOU. We design tailored applications that solve your unique business problems and scale as you grow.  ",
    },
  ];

  return (
    <section id="automation" className="scroll-mt-24 py-8 xl:py-12 px-4 md:px-10 md:py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="inline-block font-heading text-blue-600 py-2 text-4xl xl:text-5xl font-extrabold mb-6">
        Smart Business Process Automation
        </div>

        <div className="md:w-2/3 xl:w-1/2 mb-12">
          <p className="text-neutral-600">
          We build custom software that fits your business like a glove. From simple apps to complex multi-system integrations, we automate your daily tasks so your team can focus on what really matters—growing your business in Australia.
          </p>
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
                    Contact Us For More Details →
                  </button>
                </Link>
              </div>
      </div>
    </section>
  );
};

export default BusinessAutomation;