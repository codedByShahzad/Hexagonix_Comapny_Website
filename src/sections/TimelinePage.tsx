"use client";

import React from "react";
import trophy from "../assets/trophy.png";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Assemble the Right Team",
    desc: "We carefully select skilled professionals who align with your vision and project goals.",
  },
  {
    id: 2,
    title: "Sprint Planning",
    desc: "Our team collaborates to define priorities, timelines, and deliverables for efficient execution.",
  },
  {
    id: 3,
    title: "Architecture & Tech Stack",
    desc: "We design scalable and maintainable architectures using the best technologies for your project.",
  },
  {
    id: 4,
    title: "Standups & Reviews",
    desc: "Regular check-ins ensure alignment, progress visibility, and early issue detection.",
  },
  {
    id: 5,
    title: "Code Reviews",
    desc: "We conduct thorough code reviews to maintain quality, performance, and security standards.",
  },
  {
    id: 6,
    title: "Iterative Delivery",
    desc: "Our iterative approach ensures continuous improvement, faster feedback, and timely delivery.",
  },
];

const TimelinePage = () => {
  const positions = steps.map((step, index) => {
    const isTop = index % 2 === 0;
    const left = `${10 + index * 15}%`;
    return { ...step, isTop, left };
  });

  return (
    <section className="flex flex-col overflow-x-hidden items-center justify-center px-4 lg:px-12 xl:px-28 py-12 sm:py-20 lg:py-28">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center flex flex-col justify-center items-center pb-8 sm:pb-14"
      >
        <hr className="w-16 border-0 h-1.5 bg-gradient-to-tr from-[#57007B] to-[#F76680] mb-4 sm:mb-6 rounded-full" />
        <h1 className="text-xl sm:text-3xl lg:text-4xl text-gray-900 leading-snug">
          How development <br />
          <span className="font-bold">at Hexagonix works</span>
        </h1>
      </motion.div>

      {/* Mobile Timeline */}
      <div className="relative w-full flex lg:hidden px-4">
        <div className="absolute right-4 top-0 bottom-6 w-0.5 bg-gradient-to-b from-[#57007B] to-[#F76680] rounded-full" />
        <div className="flex flex-col gap-12 w-full pr-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative"
            >
              <div className="absolute right-[-2.4rem] top-14 w-3 h-0.5 rounded-full bg-gradient-to-tr from-[#57007B] to-[#F76680]" />
              <div className="p-4 bg-white shadow-md rounded-lg text-left">
                <h3 className="text-[#57007B] font-bold mb-2">
                  #{step.id} {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute right-[-18px] bottom-[-47px] translate-y-full"
        >
          <Image src={trophy} width={60} height={60} alt="Trophy" />
        </motion.div>
      </div>

      {/* Desktop Timeline */}
      <div className="relative w-full h-[400px] hidden lg:block mx-32">
        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="origin-left absolute top-1/2 left-0 w-[97%] border-0 h-[2px] bg-gradient-to-tr from-[#57007B] to-[#F76680] rounded-full"
        />

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            top: "calc(50% - 28px)",
            right: "-30px",
            position: "absolute",
          }}
        >
          <Image src={trophy} width={60} height={60} alt="Trophy" />
        </motion.div>

        {positions.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: step.isTop ? -80 : 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.25 }}
            className="absolute top-1/2"
            style={{ left: step.left }}
          >
            <hr
              className={`absolute w-0.5 h-10 bg-gradient-to-tr from-[#57007B] to-[#F76680] rounded-full ${
                step.isTop ? "bottom-full" : "top-full"
              }`}
            />
            <div
              className={`absolute w-64 p-4 bg-white shadow-md rounded-lg text-center -translate-x-1/2 ${
                step.isTop
                  ? "bottom-[calc(100%+20px)]"
                  : "top-[calc(100%+20px)]"
              }`}
            >
              <h3 className="text-[#57007B] font-bold mb-2">
                #{step.id} {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelinePage;
