"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Gradient text class
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
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6"
        >
          OUR{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEE140] to-[#FA709A]">
            Projects
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-lg text-white/80"
        >
          Explore real-world products we’ve designed and built for startups,
          enterprises, and growing brands.
        </motion.p>
      </section>

      {/* 🟣 Projects Grid */}
      <section className="py-24 px-6 md:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className={`text-4xl font-bold text-center mb-14 ${gradientText}`}>
            All Case Studies
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl
                transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-sm text-[#57007B] font-medium mb-2">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={`/casestudies/${project.slug}`}
                      className="inline-flex items-center gap-1 font-medium
                      bg-gradient-to-tr from-[#57007B] to-[#6675F7]
                      bg-clip-text text-transparent hover:underline"
                    >
                      View Case Study →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 🟣 CTA */}
      <section className="py-20 bg-gradient-to-r from-[#57007B] to-[#F76680] text-white text-center px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Amazing
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Have a project in mind? We’d love to help turn your idea into a
            powerful digital product.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#57007B] px-8 py-3 rounded-full
            font-semibold text-lg hover:bg-[#F8F7FC] transition"
          >
            Start Your Project →
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;
