import Link from "next/link";

const MobileWebDevelopment = () => {
  const services = [
    {
      title: "Custom Web Applications",
      desc: "Scale your business with high-performance web apps built for your specific requirements. We focus on speed, security, and a flawless user experience.",
    },
    {
      title: "Mobile App Development",
      desc: "Build powerful native or cross-platform mobile apps for iOS and Android. We use modern frameworks to ensure your app is fast, reliable, and user-friendly.",
    },
    {
      title: "Progressive Web Apps",
      desc: "Combine the best of web and mobile. We create PWAs that deliver an app-like experience on any device, even with slow internet—perfect for on-the-go Aussie users.",
    },
    {
      title: "Frontend Development",
      desc: "Stunning, responsive interfaces that captivate your audience. We use React and Next.js to build modern UIs that look great on everything from iPhones to desktops.",
    },
    {
      title: "Backend Development",
      desc: "The powerhouse behind your app. We develop secure, scalable APIs and robust backend systems that handle your data and business logic without a hitch.",
    },
    {
      title: "Full Stack Development",
      desc: "End-to-end solutions from UI design to database management. Our full-stack experts ensure every part of your application works together perfectly.",
    },
  ];

  return (
    <section id="apps" className="scroll-mt-24 py-8 xl:py-12 px-4 md:px-10 md:py-10 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="font-heading text-blue-600 text-4xl xl:text-5xl font-extrabold mb-6">
        High-Performance Mobile & Web App Development
        </div>

        <div className="md:w-2/3 xl:w-1/2 mb-12">
          <p className="text-neutral-600">
          Deliver seamless user experiences with scalable web and mobile applications. From custom portals to high-traffic apps, we build tech that helps Aussie SMEs compete on a global scale.
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

export default MobileWebDevelopment;