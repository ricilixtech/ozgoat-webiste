import Link from "next/link";

const SoftwareDevelopment = () => {
  const services = [
    {
      title: "Custom Software Development",
      desc: "Get a competitive edge with tailor-made software solutions designed for your specific business processes. We build apps that solve your unique challenges and grow as you do.",
    },
    {
      title: "Enterprise Software",
      desc: "Scale your operations with robust enterprise-grade systems. We streamline complex workflows and improve cross-department efficiency for growing Australian SMEs.",
    },
    {
      title: "Cloud-Based Applications",
      desc: "Access your business anywhere with secure cloud solutions. We create scalable cloud applications that offer high availability, top-tier security, and seamless remote access.",
    },
    {
      title: "Software Modernization",
      desc: "Dont let old tech hold you back. We upgrade legacy systems with modern technologies to boost performance, tighten security, and reduce maintenance costs.",
    },
    {
      title: "System Architecture Design",
      desc: "Future-proof your business with scalable system architecture. We design reliable frameworks that support long-term growth and handle high traffic without a hitch.",
    },
    {
      title: "Maintenance & Support",
      desc: "Keep your software running perfectly with 24/7 ongoing support. From monitoring to regular updates, we ensure your tech stays fast, secure, and bug-free.",
    },
  ];

  return (
    <section id="software" className="scroll-mt-24 py-8 xl:py-12 px-4 md:px-10 md:py-10 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="font-heading text-blue-600 text-4xl xl:text-5xl font-extrabold mb-6">
        Custom Software Development Australia
        </div>

        <div className="md:w-2/3 xl:w-1/2 mb-12">
          <p className="text-neutral-600">
          Build powerful, scalable software solutions tailored to your unique business goals. From Brisbane to Perth, we help Aussie companies modernize their tech stack with secure, high-performing applications that drive real results.
          </p>
        </div>

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
              Contact Us For More Details →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SoftwareDevelopment;