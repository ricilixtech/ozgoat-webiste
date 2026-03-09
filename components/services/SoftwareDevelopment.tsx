import Link from "next/link";

const SoftwareDevelopment = () => {
  const services = [
    {
      title: "Custom Software Development",
      desc: "Build scalable software solutions designed specifically for your business processes.",
    },
    {
      title: "Enterprise Software",
      desc: "Develop robust enterprise-grade systems that streamline operations and improve efficiency.",
    },
    {
      title: "Cloud-Based Applications",
      desc: "Create secure and scalable cloud applications accessible anytime and anywhere.",
    },
    {
      title: "Software Modernization",
      desc: "Upgrade legacy systems with modern technologies to improve performance and security.",
    },
    {
      title: "System Architecture Design",
      desc: "Design reliable and scalable software architectures for long-term growth.",
    },
    {
      title: "Maintenance & Support",
      desc: "Ensure your software runs smoothly with ongoing monitoring, updates, and support.",
    },
  ];

  return (
    <section id="software" className="scroll-mt-24 py-16 px-4 md:px-10 md:py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="font-heading text-blue-600 text-5xl font-extrabold mb-6">
          Software Development
        </div>

        <div className="md:w-1/3 mb-12">
          <p className="text-neutral-600">
            We build powerful, scalable software solutions tailored to your business goals and operational needs.
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

export default SoftwareDevelopment;