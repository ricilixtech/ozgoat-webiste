import Link from "next/link";

const CaseStudyPreview = () => {
  return (
    <section className="py-16 md:py-20 bg-white">

      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div
            className="font-heading tracking-tight py-2 justify-between item-center text-center leading-tight text-sm text-neutral-400 font-bold mb-4"
          ><a className="rounded-2xl px-2 py-2 bg-gray-100 text-blue-600">
              OUR WORK</a>
          </div>
          <h2 className="font-heading font-bold tracking-tight text-4xl md:text-5xl text-black mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Real-world results for real businesses. Explore how we've solved complex challenges across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 xl:gap-12">

          {/* EV Case Study Card */}
          <div className="
  bg-neutral-100
  p-8
  rounded-2xl
  shadow-[10px_8px_25px_rgba(37,99,235,0.35)]
  transition-all duration-300
  border border-gray-600
">

            <div className="mb-6">
              <span className="text-sm text-blue-600 font-semibold uppercase tracking-widest">
                EV Infrastructure
              </span>
            </div>

            <h3 className="font-heading text-2xl text-neutral-900 mb-4 leading-snug">
              Centralized CRM & Automation for EV Charger Operations
            </h3>

            <p className="text-neutral-600 mb-8 leading-relaxed">
              OzGoat consolidated fragmented systems into a unified HubSpot CRM architecture,
              reducing manual workload by 75% and enabling full operational visibility.
            </p>

            {/* 🔥 Metrics Section */}
            <div className="grid grid-cols-3 gap-6 mb-8 text-center">

              <div>
                <p className="text-3xl md:text-3xl font-bold text-blue-500">80%</p>
                <p className="text-xs md:text-sm text-neutral-500 mt-1">Automation Rate</p>
              </div>

              <div>
                <p className="text-3xl md:text-3xl font-bold text-blue-500">75%</p>
                <p className="text-xs md:text-sm text-neutral-500 mt-1">Manual Work Reduced</p>
              </div>

              <div>
                <p className="text-3xl md:text-3xl font-bold text-blue-500">100%</p>
                <p className="text-xs md:text-sm text-neutral-500 mt-1">Operational Visibility</p>
              </div>

            </div>

            <Link
              href="/case-studies/ev-crm-automation"
              className="inline-block text-white font-medium hover:text-blue-300 transition"
            >
              Read Full Case Study →
            </Link>

          </div>
  
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;
