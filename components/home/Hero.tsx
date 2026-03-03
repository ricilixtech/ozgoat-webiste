'use client';

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";

// Import 3D Model (disable SSR)
const RicilixModel = dynamic(() => import("./RicilixModel"), { ssr: false });

/* =========================
   Animation Variants
========================= */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

// List of clients/words
const slidingWords = [
  "TELENOR",
  "EASYPASA",
  "M-FAISA",
  "AREA SPECIALIST",
  "ELMO SOFTWARE",
  "THE AMERICAN LYCTUFF",
];

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-black via-blue-950 to-black py-4 md:py-8 xl:py-10">
      <div className="max-w-8xl xl:max-w-none md:py-6 py-4 mx-auto">
        {/* ===== HERO GRID ===== */}
        <div className="grid md:grid-cols-2 gap-10 xl:gap-16 2xl:gap-24 items-center px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px">
          {/* ================= TEXT SECTION ================= */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.h1 variants={slideInLeft} className="tracking-tight leading-tight font-heading text-1px text-white mb-2">
              <p className="text-blue-400 border border-gray-700 rounded-4xl px-2 py-1">
                <span className="mr-1 font-bold bg-blue-700 border border-blue-700 rounded-3xl px-1 text-white">new</span>{" "}
                Value Driven, AI-Focused Development Company
              </p>
            </motion.h1>
            <motion.h1 variants={slideInLeft} className="tracking-tight font-bold leading-tight font-heading text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl text-white mb-2">
              Expert AI Solutions & Custom <p className="text-blue-400">Automation Services</p> in Australia
            </motion.h1>
            <motion.p variants={slideInLeft} className="text-base md:text-lg xl:text-xl 2xl:w-3/5 text-neutral-400 mb-8">
              We are a premier Software Development Company specializing in Custom CRM Development, AI Chatbot Integration, and Enterprise Software Systems. Trusted by Aussie businesses and SMEs. 45+ experts, 50+ technologies, delivering innovation since 2020.
            </motion.p>
            <motion.div variants={slideInLeft} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="bg-blue-600 font-bold text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-custom">
                  Book a Free Consultation
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-gray-600 font-bold text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition shadow-custom">
                  See Our Work
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* ================= IMAGE SECTION ================= */}
          <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="relative h-[320px] md:h-[380px] xl:h-[420px] w-full rounded-xl bg-black shadow-[8px_8px_20px_rgba(59,130,246,0.35)]">
            <Image src="/pictures/HomePage/imran pic.png" alt="Business Automation" fill className="object-contain rounded-xl" priority />
            <div className="absolute bottom-4 left-4 p-3 rounded-md max-w-xs">
              <h1 className="text-xl md:text-3xl font-bold text-white drop-shadow-lg">Imran Shaukat</h1>
              <h2 className="text-blue-300 text-sm md:text-base font-medium drop-shadow-lg mt-1">Founder & Tech Strategist</h2>
              <p className="text-white text-sm md:text-base drop-shadow-md mt-2">
                With a belief in Strategy First, Build Second. <span className="font-bold">20+ years</span> helping businesses scale by leveraging the right technology the right way.
              </p>
            </div>
          </motion.div>
        </div>

        

        {/* ================= STATS ================= */}
        <motion.div className="mt-8 text-center w-screen bg-white pt-4 overflow-hidden relative" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.p variants={slideInLeft} className="text-sm md:text-base text-neutral-900 font-medium mb-4">
            GLOBAL ENTERPRISE EXPERIENCE - STARTUP AGILITY
          </motion.p>

          {/* ===== Sliding Words (Continuous Infinite Scroll) ===== */}
          <div className="overflow-hidden whitespace-nowrap relative mb-12">
            <motion.div
              className="inline-flex"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...slidingWords, ...slidingWords].map((word, idx) => (
                <span key={idx} className="mx-10 font-bold text-neutral-700 text-lg md:text-xl">
                  {word}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ===== STATS BOXES ===== */}
          <div className="bg-blue-600 text-white py-12">
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
        </motion.div>
      
      </div>
      {/* <motion.div className="m-5  flex justify-center" variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <div className="relative w-[220px] h-[95px] sm:w-[260px] sm:h-[115px] md:w-[400px] md:h-[175px] lg:w-[480px] lg:h-[210px] xl:w-[560px] xl:h-[240px] 2xl:w-[620px] 2xl:h-[260px]">
            <Image src="/pictures/HomePage/logo.png" alt="Ricilix Logo" fill className="object-contain" priority />
          </div>
        </motion.div> */}

    </section>
  );
};

export default Hero;