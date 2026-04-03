import Link from "next/link";

const SoftwareDevelopment = () => {
  const services = [
    {
      title: "Web & mobile applications",
      desc: "customer-facing or internal, built to your spec",
    },
    {
      title: "CRM & ERP integrations",
      desc: "HubSpot, Salesforce, Xero, and more",
    },
    {
      title: "Dashboards & reporting",
      desc: "real-time business insights",
    },
    {
      title: "Customer portals",
      desc: "self-service tools to reduce team workload",
    },
    {
      title: "Cloud infrastructure",
      desc: "scalable setup (GCP / AWS)",
    },
    {
      title: "API connections",
      desc: "connect your existing tools seamlessly",
    },
  ];

  return (
    <section id="software" className="scroll-mt-24 py-8 xl:py-12 px-4 md:px-10 md:py-10 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="font-heading text-blue-600 text-4xl xl:text-5xl font-extrabold mb-6">
          Build
        </div>

        <div className="md:w-2/3 xl:w-1/2 mb-12">

          <div className="py-4 text-neutral-600">
            <p>Systems and software that fit the way your business actually works — not the other way around.</p>

            <p className="py-5">We take the time to understand your operations first — how jobs move through your business, where the friction is, what your team actually needs day to day. Then we build or configure systems that slot into your workflow and grow with you.</p>
            <p>The goal isn't impressive technology. It's technology that makes your business run better.</p> </div>       </div>

        <div className="grid md:grid-cols-2 gap-6 xl:gap-8">
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
            Talk to us about building something →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SoftwareDevelopment;