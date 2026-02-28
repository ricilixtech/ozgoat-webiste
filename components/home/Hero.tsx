"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";


// Import 3D Model (disable SSR)
const RicilixModel = dynamic(() => import("./RicilixModel"), {
  ssr: false,
});

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
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // ✅ FIXED (valid cubic-bezier)
    },
  },
};
const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80, // 👈 positive value = comes from right
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
// html + css+ js = react                                welcome sharjeel don  ---------------------------------------

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-black py-4 md:py-8 xl:py-10">

      <div className="max-w-7xl xl:max-w-none md:py-6 py-4 mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">

        {/* ===== HERO GRID ===== */}
        <div className="grid md:grid-cols-2 gap-10 xl:gap-16 2xl:gap-24 items-center">

          {/* ================= TEXT SECTION ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              variants={slideInLeft}
              className="tracking-tight font-bold leading-tight font-heading text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-white mb-6"
            >
              AUSSIE BUSINESSES,
              <p className="text-blue-400">REIMAGINED</p>
              WITH VALUE DRIVEN TECH.
            </motion.h1>

            <motion.p
              variants={slideInLeft}
              className="text-base md:text-lg xl:text-xl text-neutral-400 mb-8"
            >
              Your technology arm. We build what matters, automate what slows you down, and scale what drives growth. Software development company trusted by Aussie businesses and SMEs.
            </motion.p>

            <motion.div
              variants={slideInLeft}
              className="flex flex-col sm:flex-row gap-4"
            >
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
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[320px] md:h-[380px] xl:h-[420px] w-full rounded-xl  bg-black shadow-[8px_8px_20px_rgba(59,130,246,0.35)]"
          >
            {/* Founder Image */}
            <Image
              src="/pictures/HomePage/imran pic.png"
              alt="Business Automation"
              fill
              className="object-contain rounded-xl"
              priority
            />

            {/* Overlay text */}
            <div className="absolute bottom-4 left-4 p-3 rounded-md max-w-xs">
              {/* Founder Name */}
              <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                IMRAN SHAUKAT
              </h1>

              {/* Subtitle */}
              <h2 className="text-blue-300 text-sm md:text-base font-medium drop-shadow-lg mt-1">
                Founder & Tech Strategist
              </h2>

              {/* Description */}
              <p className="text-white text-sm md:text-base drop-shadow-md mt-2">
                With a belief in Strategy First, Build Second.{" "}
                <span className="font-bold">20+ years</span> helping businesses scale by leveraging the right technology the right way.
              </p>
            </div>
          </motion.div>


        </div>

        {/* ================= LOGO ================= */}
        <motion.div
          className="m-4 md:m-6 flex justify-center"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className="
              relative
              w-[220px] h-[95px]
              sm:w-[260px] sm:h-[115px]
              md:w-[400px] md:h-[175px]
              lg:w-[480px] lg:h-[210px]
              xl:w-[560px] xl:h-[240px]
              2xl:w-[620px] 2xl:h-[260px]
            "
          >
            <Image
              src="/pictures/HomePage/logo.png"
              alt="Ricilix Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* ================= STATS ================= */}
        <motion.div
          className="mt-4 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={slideInLeft}
            className="text-sm md:text-base text-neutral-300 font-medium"
          >
            <span className="font-heading font-semibold text-blue-500">
              60%
            </span>{" "}
            Less Manual Work •{" "}
            <span className="font-heading font-semibold text-blue-500">
              40%
            </span>{" "}
            Better Pipeline Visibility •{" "}
            <span className="font-heading font-semibold text-blue-500">
              2× Faster Operations
            </span>
          </motion.p>
        </motion.div>

      </div>

      {/* ===== 3D MODEL (Optional) ===== */}
      {/* 
      <div className="mt-6 w-full">
        <RicilixModel />
      </div> 
      */}

    </section>
  );
};

export default Hero;
