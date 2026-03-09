import Link from "next/link";

const MobileWebDevelopment = () => {
  const services = [
    {
      title: "Custom Web Applications",
      desc: "Develop high-performance web applications tailored to your business requirements.",
    },
    {
      title: "Mobile App Development",
      desc: "Build powerful mobile apps for iOS and Android with modern frameworks.",
    },
    {
      title: "Progressive Web Apps",
      desc: "Create web apps that deliver app-like experiences across all devices.",
    },
    {
      title: "Frontend Development",
      desc: "Build modern responsive interfaces using React, Next.js, and modern UI frameworks.",
    },
    {
      title: "Backend Development",
      desc: "Develop secure and scalable APIs and backend systems for your applications.",
    },
    {
      title: "Full Stack Development",
      desc: "End-to-end development from UI to database ensuring seamless application performance.",
    },
  ];

  return (
    <section id="apps" className="scroll-mt-24 py-16 px-4 md:px-10 md:py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="font-heading text-blue-600 text-5xl font-extrabold mb-6">
          Mobile & Web App Development
        </div>

        <div className="md:w-1/3 mb-12">
          <p className="text-neutral-600">
            We create high-quality web and mobile applications that deliver seamless user experiences and scalable performance.
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

export default MobileWebDevelopment;