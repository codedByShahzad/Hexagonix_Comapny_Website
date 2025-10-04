"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import projectImg from "@/assets/caseStudy3.png";
import caseStudy1 from "@/assets/caseStudy1.png";
import caseStudy2 from "@/assets/caseStudy2.png";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Gradient text class reused across headings
const gradientText =
  "bg-gradient-to-r from-[#57007B] via-[#FFD700] to-[#F76680] text-transparent bg-clip-text";

const CaseStudiesPage = () => {
  return (
    <main className="bg-[#F8F7FC] text-[#4A5568] overflow-hidden">
      {/* 🟣 Hero Section */}
      <section className="text-center py-24 bg-gradient-to-r from-[#57007B] to-[#F76680] text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide mb-6"
        >
          OUR{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEE140] to-[#FA709A]">
            Case Studies
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-lg text-white/80"
        >
          Explore how we’ve helped clients achieve remarkable digital
          transformations through design and innovation.
        </motion.p>
      </section>

      {/* 🟣 Project Overview */}
      <section className="py-20 px-8 md:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className={`text-4xl font-bold mb-6 ${gradientText}`}>
            Project Overview
          </h2>
          <p className="text-lg text-[#718096] leading-relaxed">
            Our client approached us to build a scalable, user-friendly web
            platform that enhances customer engagement and simplifies internal
            processes. We delivered a complete digital solution that elevated
            their online presence.
          </p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 flex justify-center"
          >
            <Image
              src={projectImg}
              alt="Project Preview"
              className="rounded-2xl shadow-xl w-full max-w-3xl"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* 🟣 Challenges & Solutions */}
      <section className="py-20 bg-white px-8 md:px-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl font-bold mb-6 ${gradientText}`}>
              Challenges
            </h2>
            <p className="text-[#718096] text-lg leading-relaxed">
              The existing system lacked performance, had a poor UI/UX, and was
              not optimized for scalability. Integration between modules was
              slow and inefficient.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl font-bold mb-6 ${gradientText}`}>
              Our Solutions
            </h2>
            <p className="text-[#718096] text-lg leading-relaxed">
              We redesigned the user flow, built reusable UI components, and
              optimized backend APIs. The result was a faster, intuitive, and
              highly responsive application across devices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🟣 Design Showcase */}
      <section className="py-20 px-8 md:px-20 bg-[#F8F7FC]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className={`text-4xl font-bold mb-8 ${gradientText}`}>
            Design Showcase
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[caseStudy1, caseStudy2, projectImg, caseStudy1, caseStudy2, projectImg].map(
              (img, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 p-4"
                >
                  <Image
                    src={img}
                    alt={`Case Study ${i + 1}`}
                    className="rounded-xl object-cover w-full h-[180px]"
                  />
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </section>

      {/* 🟣 Results & CTA */}
      <section className="py-20 bg-gradient-to-r from-[#57007B] to-[#F76680] text-white text-center px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className={`text-4xl font-bold mb-6 ${gradientText}`}>
            Impact & Results
          </h2>
          <p className="text-lg text-white/90 mb-10 leading-relaxed">
            Post-launch, the client experienced a 65% boost in user engagement
            and a 40% improvement in operational efficiency. The revamped design
            elevated their brand identity across all platforms.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#57007B] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#F8F7FC] transition-all duration-300"
          >
            Start Your Project →
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;
