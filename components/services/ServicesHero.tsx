import Link from "next/link";
import Servicesoverview from "./Servicesoverview";
const ServicesHero = () => {
  return (
    <section className="pt-16 md:pt-24 bg-gradient-to-r from-black via-blue-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="font-heading t py-2 justify-between item-center text-center text-sm text-blue-400 font-medium mb-4"
        ><a className="rounded-2xl px-3 py-2 bg-blue-950">
            🛠 Strategy First. Build Second.</a>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl leading-tight tracking-tight text-white mb-6">
          Three ways we help your <span className="text-blue-500">business stop</span> being held back by its own systems
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">
          Whether you need something built, something automated, or someone to sit alongside you and make the right technology calls — this is how we work.
        </p>
        <div className="text-center mt-12">
          <Link
            href="https://meet.ozgoat.com"
            className="inline-block mt-2 bg-blue-600 text-white px-6 mx-4 py-3 rounded-lg font-semivold hover:bg-blue-700 transition"
          >
            Book a Free Discovery Call →
          </Link>
          <Link
            href="/portfolio"
            className="inline-block mt-2 text-white px-6 py-3 mx-4 rounded-lg font-semivold border border-neutral-600 hover:border-neutral-400 transition"
          >
            See Our Work
          </Link>
        </div>

      </div>
      {/* ===== STATS BOXES ===== */}
      <div className="text-white mt-10 py-8 xl:mt-12 text-center justify center font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-neutral-300 lg:px-8">
          <p>We believe technology should be an enabler, not a driver. Before we recommend anything, we understand your business.</p>
          <p className="font-bold text-4xl pt-2 text-blue-500">Strategy first. Build second.</p>
        </div>
      </div>
      {/* <Servicesoverview /> */}
    </section>
  );
};

export default ServicesHero;