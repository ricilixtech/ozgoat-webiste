import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative pt-10 overflow-hidden bg-gradient-to-br from-black via-blue-900 to-black">

      {/* Decorative Blur Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Glass Container */}
        <div className="  rounded-2xl p-10 md:p-14">

          <h2 className="font-heading font-bold tracking-tight leading-tight text-4xl md:text-5xl text-white mb-6">
          Not sure which one fits? <span className="text-blue-400">That's fine.</span> most businesses need a bit of all three.
          </h2>

          <p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto">
          Most engagements start with a conversation. We learn about your business, identify friction points, and guide you on the best approach — honestly and transparently.
          </p>

          <Link href="https://meet.ozgoat.com">
            <button className="group bg-blue-600 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
            Book a free strategy call →
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
