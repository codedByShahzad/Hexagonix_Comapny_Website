"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import leftPointer from "../assets/leftPointer.png";
import rightPointer from "../assets/rightPointer.png";
import Sphere2 from "@/components/Sphere2";

// ✅ IMPORT YOUR DATA
import { projects } from "@/data/projects";
const bgVariants = ["bg-[#F9F5FF]", "bg-[#FFF8E6]", "bg-[#F0FFF4]"];

const RecentWorkSection = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="recent-case-studies"
      className="relative bg-[#F7F7FA] flex flex-col items-center justify-center px-4 md:px-10 lg:px-24 py-12 sm:py-20 lg:py-28 overflow-x-hidden"
    >
      {/* Left Pointer */}
      <Image
        src={leftPointer}
        alt="Left Pointer"
        className="hidden md:block absolute md:-top-16 lg:-top-28 left-6
        w-20 h-20 md:w-40 md:h-40 lg:w-56 lg:h-56 xl:w-60 xl:h-60"
      />

      {/* Right Pointer */}
      <Image
        src={rightPointer}
        alt="Right Pointer"
        className="hidden md:block absolute md:-top-16 lg:-top-28 right-6
        w-20 h-20 md:w-40 md:h-40 lg:w-56 lg:h-56 xl:w-60 xl:h-60"
      />

      {/* Sphere */}
      <Sphere2 className="hidden md:block absolute top-20 left-[30%] p-2" />

      {/* Header */}
      <div
        ref={headerRef}
        className="text-center flex flex-col justify-center items-center pb-8 sm:pb-14"
      >
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: [0, 1, 0.5, 1] } : {}}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-16 border-0 h-1.5 bg-gradient-to-tr from-[#57007B] to-[#F76680]
          mb-4 sm:mb-6 rounded-full origin-center"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-3xl lg:text-4xl text-gray-900 leading-snug"
        >
          Our recent <br />
          <span className="font-bold">Case Studies</span>
        </motion.h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-10 w-full max-w-6xl">
        {projects.slice(0, 3).map((project, index) => (
          <CaseCard
            key={project.slug}
            project={project}
            index={index}
            bg={bgVariants[index % bgVariants.length]}
          />
        ))}
      </div>
    </section>
  );
};

type CaseCardProps = {
  project: (typeof projects)[number];
  index: number;
  bg: string;
};

const CaseCard = ({ project, index, bg }: CaseCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`${bg} rounded-2xl flex flex-col lg:flex-row
      items-center lg:items-start gap-6 lg:gap-10 shadow-sm overflow-hidden`}
    >
      {/* Image */}
      <div className="flex-shrink-0 w-full lg:w-1/2">
        <div className="relative w-full aspect-[600/416]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="rounded-xl object-fit"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>

      {/* Content */}
<div className="flex flex-col justify-between h-full px-6 lg:px-5 xl:px-16 py-6 lg:py-6 xl:py-12 w-full lg:w-1/2">
  {/* Top Content */}
  <div>
    <h2 className="text-base sm:text-2xl xl:text-2xl font-bold text-gray-900 mb-4">
      {project.title}
    </h2>
    <p className="text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0 text-sm xl:text-base">
      {project.description}
    </p>
  </div>

  {/* Bottom Button */}
  <div className="mt-auto flex justify-center lg:justify-end">
    <Link
      href={`/casestudies/${project.slug}`}
      className="inline-flex items-center gap-2 px-4 py-2
                 font-medium text-white rounded-lg
                 bg-gradient-to-r from-[#57007B] to-[#F76680]
                 hover:scale-105 transition-transform duration-300 shadow-md shadow-[#57007B]/30"
    >
      Read more →
    </Link>
  </div>
</div>

    </motion.div>
  );
};

export default RecentWorkSection;
