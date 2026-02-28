import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-950 via-black to-black">

      {/* Decorative Blur Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Glass Container */}
        <div className=" backdrop-blur-md border border-blue-500 shadow-xl rounded-2xl p-10 md:p-14">

          <h2 className="font-heading font-bold tracking-tight leading-tight text-3xl md:text-4xl text-white mb-6">
            Lets Build Something <span className="text-blue-500">
              Extraordinary
            </span>{" "} Together
          </h2>

          <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation and discover how intelligent automation,
            AI integration, and workflow optimization can accelerate your growth.
          </p>

          <Link href="/contact">
            <button className="group bg-blue-600 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
              Book Free Consultation 
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
