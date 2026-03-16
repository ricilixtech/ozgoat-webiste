'use client';

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Linkedin } from "lucide-react";
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
    <section className="bg-gradient-to-br from-black via-blue-950 to-black pt-4 md:pt-8 xl:pt-10">
      <div className="max-w-8xl xl:max-w-none md:pt-6 pt-4 mx-auto">
        {/* ===== HERO GRID ===== */}
        <div className="grid md:grid-cols-2 gap-10 xl:gap-16 2xl:gap-24 items-center py-6 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20">
          {/* ================= TEXT SECTION ================= */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.div
              variants={slideInLeft}
              className="tracking-tight leading-tight font-heading text-white mb-2"
            >
              <div className="inline-flex text-[12px] xl:text-[15px] items-center text-blue-200 border border-gray-700 rounded-4xl px-3 py-2">
                <span className="mr-1 font-bold bg-blue-700 border border-blue-700 rounded-3xl px-2 text-white">
                  NEW
                </span>
                Value Driven, AI-Focused Development Company
              </div>
            </motion.div>
            <motion.h1 variants={slideInLeft} className="tracking-tight font-bold leading-tight font-heading text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl text-white mb-2">
              RELIABLE. SUSTAINABLE. AFFORDABLE
              <p className="text-blue-500">Digital Solutions </p> in Australia
            </motion.h1>
            <motion.p variants={slideInLeft} className="text-base font-vody md:text-lg xl:text-xl 2xl:w-3/5 text-neutral-400 mb-8">
              Smart Web & Software Development designed to win you more customers. We simplify your CRM Integration and Automation Services so your business stays productive and delivers results without the extra effort.
            </motion.p>
            <motion.div variants={slideInLeft} className="flex flex-col sm:flex-row gap-4">
              <Link href="https://meet.ozgoat.com">
                <button className="bg-blue-600 cursor-pointer font-bold text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-custom">
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
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[320px] md:h-[380px] xl:h-[420px] w-full rounded-xl bg-white shadow-[8px_8px_20px_rgba(59,130,246,0.35)]"
          >
            <Image
              src="/pictures/HomePage/imran.png"
              alt="Business Automation"
              fill
              className="object-contain rounded-xl"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>

            <div className="absolute bottom-4 left-4 p-3 rounded-md max-w-md z-10">
              <h1 className="text-xl font-bold text-white drop-shadow-lg">
                Imran Shaukat
              </h1>

              <div className="text-blue-800 text-sm md:text-base drop-shadow-lg">
                Founder & Tech Strategist
              </div>

              <p className="text-neutral-300 drop-shadow-md mt-2">
                With a belief in Strategy First, Build Second.
                <span className="font-bold"> 20+ years</span> helping businesses scale by
                leveraging the right technology the right way.
              </p>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/imranshaukatpo?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-bold px-4 py-2 rounded-md transition"
              >
                <Linkedin size={18} className="bg-white text-[#0A66C2] rounded-sm p-[2px]" />
                Meet me on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>



        {/* ================= STATS ================= */}
        <motion.div className="mt-8 text-center w-screen bg-white pt-4 overflow-hidden relative" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.p variants={slideInLeft} className="font-medium text-sm text-neutral-900 mb-4">
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