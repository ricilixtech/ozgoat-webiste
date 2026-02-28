import Link from "next/link";

const CaseStudyPreview = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-black to-blue-900">

      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="font-heading leading-tight tracking-tight font-bold text-white text-3xl md:text-4xl mb-4">
            Real <span className="text-blue-500">
              Results
            </span>{" "}, Real <span className="text-blue-500">
              Impact
            </span>{" "}
          </h2>

          <p className="text-lg text-neutral-400">
            See how we transform complex operations into scalable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 xl:gap-12">

          {/* EV Case Study Card */}
          <div className="
  bg-gradient-to-br from-blue-950 via-black to-black
  p-8
  rounded-2xl
  shadow-[10px_8px_25px_rgba(37,99,235,0.35)]
  transition-all duration-300
  border border-blue-800
">

            <div className="mb-6">
              <span className="text-sm text-blue-400 font-semibold uppercase tracking-widest">
                EV Infrastructure
              </span>
            </div>

            <h3 className="font-heading text-2xl text-white mb-4 leading-snug">
              Centralized CRM & Automation for EV Charger Operations
            </h3>

            <p className="text-neutral-400 mb-8 leading-relaxed">
              RICILIX consolidated fragmented systems into a unified HubSpot CRM architecture,
              reducing manual workload by 75% and enabling full operational visibility.
            </p>

            {/* 🔥 Metrics Section */}
            <div className="grid grid-cols-3 gap-6 mb-8 text-center">

              <div>
                <p className="text-3xl md:text-3xl font-bold text-blue-500">80%</p>
                <p className="text-xs md:text-sm text-neutral-400 mt-1">Automation Rate</p>
              </div>

              <div>
                <p className="text-3xl md:text-3xl font-bold text-blue-500">75%</p>
                <p className="text-xs md:text-sm text-neutral-400 mt-1">Manual Work Reduced</p>
              </div>

              <div>
                <p className="text-3xl md:text-3xl font-bold text-blue-500">100%</p>
                <p className="text-xs md:text-sm text-neutral-400 mt-1">Operational Visibility</p>
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
