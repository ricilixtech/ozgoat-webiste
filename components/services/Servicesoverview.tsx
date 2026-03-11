"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

/* =========================
   Animation Variants
========================= */

const leftContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // ✅ FIXED
    },
  },
};

const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1], // ✅ FIXED
    },
  },
};

const Servicesoverview = () => {
  return (
    <section className="py-12 md:py-14 bg-gray-100">

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADING SECTION ================= */}
        <motion.div
          className="text-center mb-12"
          variants={leftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={slideLeft}
            className="font-heading  text-sm text-blue-600 font-semibold mb-4"
          >
            OUR SERVICES
          </motion.div>
          <motion.h2
            variants={slideLeft}
            className="font-heading tracking-tight leading-tight text-4xl 2xl:text-5xl text-neutral-900 font-bold mb-4"
          >
            BUILD, Automate & <span className="text-blue-600 "> Scale your Business</span>{" "}
          </motion.h2>

          <motion.p
            variants={slideLeft}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
           Smart Web Development, Custom Software, and CRM Automation tailored for Aussie SMEs. We build the tech so you can focus on growing your business without the overhead.
          </motion.p>
        </motion.div>

        {/* ================= CARDS SECTION ================= */}
      </div>
    </section>
  );
};

export default Servicesoverview;
