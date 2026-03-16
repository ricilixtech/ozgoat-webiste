import Link from "next/link";
const AboutHero = () => {
    return (
      <section className="pt-16 md:pt-24 bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
            className="font-heading t py-2 justify-between item-center text-center text-sm text-blue-400 font-medium mb-4"
          ><a className="rounded-2xl px-3 py-2 bg-blue-950">
              WHO WE ARE</a>
          </div>
        
          <h1 className="font-heading text-4xl md:text-5xl leading-tight tracking-tight text-white mb-6">
          Strategy-Led,
<p className="text-blue-400"> Technology Driven </p>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">OZGOAT is a Melbourne-based software development company trusted by startups and enterprises across Australia, the UK, the USA and the Middle East. We believe in Strategy First, Build Second.
          </p>
          <div className="text-center mt-12">
          <Link
            href="https://meet.ozgoat.com"
            className="inline-block bg-blue-600 text-white px-6 mx-4 py-3 rounded-lg font-semivold hover:bg-blue-700 transition"
          >
            Book a Free Discovery Call →
          </Link>
          <Link
            href="/portfolio"
            className="inline-block  text-white px-6 py-3 mx-4 rounded-lg font-semivold border border-neutral-600 hover:border-neutral-400 transition"
          >
            See Our Work
          </Link>
        </div>
        
        </div>
                  {/* ===== STATS BOXES ===== */}
                  <div className="bg-blue-600 text-white mt-10 py-8 xl:mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 text-center">
                {[
                  { number: "45+", label: "Skilled Experts" },
                  { number: "120+", label: "Projects" },
                  { number: "50+", label: "Technologies" },
                  { number: "20+", label: "Years Experience" },
                  { number: "4.9+", label: "Ratings / Reviews" },
                  { number: "4", label: "Development Centers" },
                  { number: "2", label: "Global Awards" },
                ].map((stat, idx) => (
                  <div key={idx} className="border border-white rounded-lg p-4 flex flex-col items-center justify-center">
                    <span className="text-3xl md:text-4xl font-bold">{stat.number}</span>
                    <span className="text-sm md:text-base mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>
    );
  };
  
  export default AboutHero;