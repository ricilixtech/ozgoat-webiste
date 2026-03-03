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

const ServicesOverview = () => {
  return (
    <section className="py-16 md:py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
            className="font-heading tracking-tight leading-tight text-sm text-neutral-400 font-bold mb-4"
          >
            WHAT WE DO
          </motion.div>
          <motion.h2
            variants={slideLeft}
            className="font-heading tracking-tight leading-tight text-4xl md:text-4xl text-neutral-900 font-bold mb-4"
          >
            Three Ways We Help Your <span className="text-blue-600 ">Business Grow</span>{" "}
          </motion.h2>

          <motion.p
            variants={slideLeft}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Whether you need something built from scratch, your operations streamlined, or a tech team to grow with you: we've got you covered.
          </motion.p>
        </motion.div>

        {/* ================= CARDS SECTION ================= */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* CARD 1 */}
          <motion.div
            variants={slideUp}
            className="w-full shadow-[8px_8px_20px_rgba(59,130,246,0.35)] "
          >
           
              <div className="bg-gradient-to-br from-black to-blue-900 border border-blue-900 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transform hover:scale-105 transition duration-300 cursor-pointer h-full flex flex-col justify-between">

                {/* Icon + Heading */}
                <div>
                  <div className="text-3xl mb-4">🔧</div>

                  <h3 className="text-white font-bold font-heading text-xl mb-3">
                    Build
                  </h3>

                  <p className="text-neutral-400 text-sm mb-4">
                    Custom software and integrations that fit your workflow not the other way around.
                  </p>

                  {/* Bullet Points */}
                  <ul className="text-neutral-300 text-sm space-y-2 list-disc list-inside">
                    <li>Web & mobile apps</li>
                    <li>CRM/ERP integrations</li>
                    <li>Dashboards & reporting</li>
                    <li>Cloud deployments (GCP/AWS)</li>
                  </ul>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <Link href="/services">
                    <button className="px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition duration-300">
                      Explore Deployment →
                    </button>
                  </Link>
                </div>

              </div>
            
          </motion.div>


          {/* CARD 2 */}
          <motion.div
            variants={slideUp}
            className="w-full shadow-[8px_8px_20px_rgba(59,130,246,0.35)] "
          >
            
              <div className="bg-gradient-to-br from-black to-blue-900 border border-blue-900 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transform hover:scale-105 transition duration-300 cursor-pointer h-full flex flex-col justify-between">

                {/* Icon + Heading */}
                <div>
                  <div className="text-3xl mb-4">⚙️</div>

                  <h3 className="text-white font-bold font-heading text-xl mb-3">
                  Automate
                  </h3>

                  <p className="text-neutral-400 text-sm mb-4">
                  Remove repetitive admin with automation and AI so your team can focus on work that matters.
                  </p>

                  {/* Bullet Points */}
                  <ul className="text-neutral-300 text-sm space-y-2 list-disc list-inside">
                    <li>Zapier & low-code workflows</li>
                    <li>AI document processing</li>
                    <li>Chatbots & internal tools</li>
                    <li>Reporting automation</li>
                  </ul>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <Link href="/services">
                    <button className="px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition duration-300">
                      Explore Automation →
                    </button>
                  </Link>
                </div>

              </div>
            
          </motion.div>


          {/* CARD 3 */}
          <motion.div
            variants={slideUp}
            className="w-full shadow-[8px_8px_20px_rgba(59,130,246,0.35)] "
          >
            
              <div className="bg-gradient-to-br from-black to-blue-900 border border-blue-900 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transform hover:scale-105 transition duration-300 cursor-pointer h-full flex flex-col justify-between">

                {/* Icon + Heading */}
                <div>
                  <div className="text-3xl mb-4">📈
                  </div>

                  <h3 className="text-white font-bold font-heading text-xl mb-3">
                  Scale
                  </h3>

                  <p className="text-neutral-400 text-sm mb-4">
                  We step in as your tech arm without full-time overheads: the right expertise, when you need it.
                  </p>

                  {/* Bullet Points */}
                  <ul className="text-neutral-300 text-sm space-y-2 list-disc list-inside">
                    <li>Staff augmentation</li>
                    <li>Offshore delivery pods</li>
                    <li>Product & delivery support</li>
                    <li>Monitoring & improvements</li>
                  </ul>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <Link href="/services">
                    <button className="px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition duration-300">
                      Explore Support →
                    </button>
                  </Link>
                </div>

              </div>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
