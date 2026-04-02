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
            Three ways we help your <span className="text-blue-700">business stop being</span>
            <p>held back by its own systems</p>
          </motion.h2>

          <motion.p
            variants={slideLeft}
            className="text-lg text-neutral-600 max-w-3xl mx-auto"
          >
           Whether you need something built, something automated, or someone to sit alongside you and make the right technology calls — this is how we work.
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
                Systems and software that fit the way your business actually works — not the other way around.
                </p>
                

                {/* Bullet Points */}
                <ul className="text-gray-800 text-sm space-y-2 list-disc list-inside">
                  <li>Web & mobile applications — customer-facing or internal, built to your spec</li>
                  <li>CRM & ERP integrations — HubSpot, Salesforce, Xero, and more</li>
                  <li>Dashboards & reporting — real-time business insights</li>
                  <li>Customer portals — self-service tools to reduce team workload</li>
                  <li>Cloud infrastructure — scalable setup (GCP / AWS)</li>
                  <li>API connections — connect your existing tools seamlessly</li>
                </ul>
              </div>

              {/* Divider + Button */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link href="/services">
                  <button className="px-4 cursor-pointer text-black hover:text-gray-400 font-bold text-sm py-2.5 rounded-lg transition duration-300">
                  Talk to us about building something →
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
                Every hour your team spends on manual tasks is an hour not spent on your customers
                </p>

                {/* Bullet Points */}
                <ul className="text-gray-800 text-sm space-y-2 list-disc list-inside">
                  <li>Workflow automation — end-to-end processes</li>
                  <li>AI document processing — extract, classify, route data</li>
                  <li>Customer communication workflows — automated follow-ups & reminders</li>
                  <li>CRM automation — leads, tasks, pipeline updates</li>
                  <li>Reporting & data pipelines — automated dashboards & reports</li>
                  <li>Internal tooling — lightweight automation apps</li>
                </ul>
              </div>

              {/* Divider + Button */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link href="/services">
                  <button className="px-4 cursor-pointer text-black hover:text-gray-400 font-bold text-sm py-2.5 rounded-lg transition duration-300">
                  Show us what you're doing manually →
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
                You don't need a full-time CTO to make smart technology decisions. You need the right thinking, at the right time.
                </p>

                {/* Bullet Points */}
                <ul className="text-gray-800 text-sm space-y-2 list-disc list-inside">
                  <li>Fractional tech leadership</li>
                  <li>Technology roadmapping</li>
                  <li>Vendor & platform selection</li>
                  <li>Team support & mentoring</li>
                  <li>On-demand delivery</li>
                  <li>Monitoring & continuous improvement</li>
                </ul>
              </div>

              {/* Divider + Button */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link href="/services">
                  <button className="px-4 cursor-pointer text-black hover:text-gray-400 font-bold text-sm py-2.5 rounded-lg transition duration-300">
                  Talk to us about becoming your tech partner →
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
              HOW WE ENGAGE
            </motion.div>
          </div>
          <motion.h2
            variants={slideLeft}
            className="font-heading tracking-tight leading-tight text-4xl 2xl:text-5xl text-neutral-900 font-bold my-4"
          >
            Work with us the way that suits your business
          </motion.h2>

          <motion.p
            variants={slideLeft}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            No two businesses are the same. Whether you need us to take the wheel, top up your team, or deliver something specific — we'll find the right fit.
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
                  <div className="my-5">We run it for you</div>
                </h3>

                <p className="text-neutral-500 text-sm mb-4">
                You focus on the business. We own the technology end-to-end — strategy, build, testing, and launch. No project management overhead on your side.
                </p>


              </div>

              {/* Divider + Button */}
              <div className="pt-4 border-gray-200">
                <Link href="/services">
                  <button className="px-4 cursor-pointer text-blue-600 hover:text-blue-400 font-bold text-sm py-2.5 rounded-lg transition duration-300">
                  This sounds like me →
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
                  <div className="my-5">We plug into your team</div>
                </h3>

                <p className="text-neutral-500 text-sm mb-4">
                Already have a team but missing the technical depth? We embed with your people and fill the gaps — without the cost or commitment of a full-time hire.
                </p>


              </div>

              {/* Divider + Button */}
              <div className="pt-4 border-gray-200">
                <Link href="/services">
                  <button className="px-4 cursor-pointer text-blue-600 hover:text-blue-400 font-bold text-sm py-2.5 rounded-lg transition duration-300">
                  This sounds like me →
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
                  <div className="my-5">Deliver something specific</div>
                </h3>

                <p className="text-neutral-500 text-sm mb-4">
                Have a clearly defined project? We scope it, price it, and deliver it. Fixed timeline, fixed cost — you know exactly what you're getting before we start.
                </p>


              </div>

              {/* Divider + Button */}
              <div className="pt-4 border-gray-200">
                <Link href="/services">
                  <button className="px-4 cursor-pointer text-blue-600 hover:text-blue-400 font-bold text-sm py-2.5 rounded-lg transition duration-300">
                  This sounds like me →
                  </button>
                </Link>
              </div>

            </div>
          </motion.div>
        </motion.div>
        <div className="flex justify-center mt-12">
            <Link href="https://meet.ozgoat.com">
              <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition duration-300">
              Not sure which fits? Let's figure it out together →
              </button>
            </Link>
          </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
