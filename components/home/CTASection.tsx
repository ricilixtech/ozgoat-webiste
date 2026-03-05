import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative pt-20 overflow-hidden bg-blue-600">

      {/* Decorative Blur Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Glass Container */}
        <div className="  rounded-2xl p-10 md:p-14">

          <h2 className="font-heading font-bold tracking-tight leading-tight text-4xl md:text-5xl text-white mb-6">
          Ready to Build Something
          Extraordinary?
          </h2>

          <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
          At OZGOAT, we act as your technology arm: building solutions that automate, optimise and accelerate growth.
          </p>

          <Link href="/contact">
            <button className="group bg-white text-blue-600 font-semibold px-10 py-4 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
              Book Free Consultation 
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
