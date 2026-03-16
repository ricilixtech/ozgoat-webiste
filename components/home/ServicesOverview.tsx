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
    <section className="py-16 md:py-20 bg-gray-100">

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
            className="font-heading tracking-tight leading-tight text-sm text-gray-500 mb-4"
          >
            WHAT WE DO
          </motion.div>
          <motion.h2
            variants={slideLeft}
            className="font-heading tracking-tight leading-tight text-4xl 2xl:text-5xl text-neutral-900 font-bold mb-4"
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
            className="w-full shadow-[0_-8px_20px_rgba(59,130,246,0.45)] rounded-xl"
          >
            <div className="bg-white border border-gray-300 p-6 sm:p-8 rounded-xl h-full flex flex-col justify-between">

              {/* Icon + Heading */}
              <div>
                <h3 className="text-blue-600 font-bold font-heading text-2xl mb-3">
                  <span className="text-2xl mb-4">🔧</span> Build
                </h3>

                <p className="text-neutral-500 text-sm mb-4">
                  Custom software and integrations that fit your workflow not the other way around.
                </p>

                {/* Bullet Points */}
                <ul className="text-gray-800 text-sm space-y-2 list-disc list-inside">
                  <li>Web & mobile apps</li>
                  <li>CRM/ERP integrations</li>
                  <li>Dashboards & reporting</li>
                  <li>Cloud deployments (GCP/AWS)</li>
                </ul>
              </div>

              {/* Divider + Button */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link href="/services">
                  <button className="px-4 cursor-pointer text-black hover:text-gray-400 font-bold text-sm py-2.5 rounded-lg transition duration-300">
                    Explore Develpoment →
                  </button>
                </Link>
              </div>

            </div>
          </motion.div>


          {/* CARD 2 */}
          <motion.div
            variants={slideUp}
            className="w-full shadow-[0_-8px_20px_rgba(59,130,246,0.45)] rounded-xl"
          >
            <div className="bg-white border border-gray-300 p-6 sm:p-8 rounded-xl h-full flex flex-col justify-between">

              {/* Icon + Heading */}
              <div>
                <h3 className="text-blue-600 font-bold font-heading text-2xl mb-3">
                  <span className="text-2xl mb-4">⚙️</span> Automate
                </h3>

                <p className="text-neutral-500 text-sm mb-4">
                  Remove repetitive admin with automation and AI so your team can focus on work that matters.
                </p>

                {/* Bullet Points */}
                <ul className="text-gray-800 text-sm space-y-2 list-disc list-inside">
                  <li>Zapier & low-code workflows</li>
                  <li>AI document processing</li>
                  <li>Chatbots & internal tools</li>
                  <li>Reporting automation</li>
                </ul>
              </div>

              {/* Divider + Button */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link href="/services">
                  <button className="px-4 cursor-pointer text-black hover:text-gray-400 font-bold text-sm py-2.5 rounded-lg transition duration-300">
                    Explore Automation →
                  </button>
                </Link>
              </div>

            </div>
          </motion.div>
          {/* CARD 3 */}
          <motion.div
            variants={slideUp}
            className="w-full shadow-[0_-8px_20px_rgba(59,130,246,0.45)] rounded-xl"
          >
            <div className="bg-white border border-gray-300 p-6 sm:p-8 rounded-xl h-full flex flex-col justify-between">

              {/* Icon + Heading */}
              <div>
                <h3 className="text-blue-600 font-bold font-heading text-2xl mb-3">
                  <span className="text-2xl mb-4">📈</span> Scale
                </h3>

                <p className="text-neutral-500 text-sm mb-4">
                  We step in as your tech arm without full-time overheads: the right expertise, when you need it.
                </p>

                {/* Bullet Points */}
                <ul className="text-gray-800 text-sm space-y-2 list-disc list-inside">
                  <li>Staff augmentation</li>
                  <li>Offshore delivery pods</li>
                  <li>Product & delivery support</li>
                  <li>Monitoring & improvements</li>
                </ul>
              </div>

              {/* Divider + Button */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link href="/services">
                  <button className="px-4 cursor-pointer text-black hover:text-gray-400 font-bold text-sm py-2.5 rounded-lg transition duration-300">
                    Explore Support →
                  </button>
                </Link>
              </div>

            </div>
          </motion.div>

          {/*------------------------------------------------------ below section */}

        </motion.div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:mt-40 lg:px-8">

        {/* ================= HEADING SECTION ================= */}
        <motion.div
          className="text-center mt-20 mb-12"
          variants={leftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex justify-center">
            <motion.div
              variants={slideLeft}
              className="font-heading rounded-2xl bg-gray-200 text-blue-500 font-medium text-sm px-6 py-1"
            >
              HOW WE WORK
            </motion.div>
          </div>
          <motion.h2
            variants={slideLeft}
            className="font-heading tracking-tight leading-tight text-4xl 2xl:text-5xl text-neutral-900 font-bold my-4"
          >
            <p>Flexible Engagement Models</p>
            to Suit Your Needs
          </motion.h2>

          <motion.p
            variants={slideLeft}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Find the perfect solution for your project: whether you need a fully managed team, staff augmentation, or a fixed-price approach.
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
            className="w-full  rounded-xl"
          >
            <div className="bg-white border border-gray-300 hover:border-blue-500 hover:bg-blue-100 p-6 sm:p-8 rounded-xl h-full flex flex-col justify-between">

              {/* Icon + Heading */}
              <div>
                <h3 className="text-black font-bold font-heading text-2xl mb-3">
                  <a className="text-3xl mb-4">🧩</a>
                  <div className="my-5">Managed Team</div>
                </h3>

                <p className="text-neutral-500 text-sm mb-4">
                  Your product, our dedicated team. From concept to completion, we handle it all: design, development, QA, and deployment.
                </p>


              </div>

              {/* Divider + Button */}
              <div className="pt-4 border-gray-200">
                <Link href="/services">
                  <button className="px-4 cursor-pointer text-blue-600 hover:text-blue-400 font-bold text-sm py-2.5 rounded-lg transition duration-300">
                    Contact Us For More Details →
                  </button>
                </Link>
              </div>

            </div>
          </motion.div>


          {/* CARD 2 */}
          <motion.div
            variants={slideUp}
            className="w-full  rounded-xl"
          >
            <div className="bg-white border border-gray-300 hover:border-blue-500 hover:bg-blue-100 p-6 sm:p-8 rounded-xl h-full flex flex-col justify-between">

              {/* Icon + Heading */}
              <div>
                <h3 className="text-black font-bold font-heading text-2xl mb-3">
                  <a className="text-3xl mb-4">🔌</a>
                  <div className="my-5">Staff Augmentation</div>
                </h3>

                <p className="text-neutral-500 text-sm mb-4">
                  Need extra hands? Our experts seamlessly join your team, providing the skills you need, exactly when you need them.
                </p>


              </div>

              {/* Divider + Button */}
              <div className="pt-4 border-gray-200">
                <Link href="/services">
                  <button className="px-4 cursor-pointer text-blue-600 hover:text-blue-400 font-bold text-sm py-2.5 rounded-lg transition duration-300">
                    Contact Us For More Details →
                  </button>
                </Link>
              </div>

            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={slideUp}
            className="w-full  rounded-xl"
          >
            <div className="bg-white border border-gray-300 hover:border-blue-500 hover:bg-blue-100 p-6 sm:p-8 rounded-xl h-full flex flex-col justify-between">

              {/* Icon + Heading */}
              <div>
                <h3 className="text-black font-bold font-heading text-2xl mb-3">
                  <a className="text-3xl mb-4">📋</a>
                  <div className="my-5">Fixed Cost</div>
                </h3>

                <p className="text-neutral-500 text-sm mb-4">
                  Upfront price or Hourly rates, guaranteed delivery. Your project completed on time and within budget: no surprises, ever.
                </p>


              </div>

              {/* Divider + Button */}
              <div className="pt-4 border-gray-200">
                <Link href="/services">
                  <button className="px-4 cursor-pointer text-blue-600 hover:text-blue-400 font-bold text-sm py-2.5 rounded-lg transition duration-300">
                    Contact Us For More Details →
                  </button>
                </Link>
              </div>

            </div>
          </motion.div>
        </motion.div>
        <div className="flex justify-center mt-12">
            <Link href="https://meet.ozgoat.com">
              <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition duration-300">
                Book A Discovery Call →
              </button>
            </Link>
          </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
