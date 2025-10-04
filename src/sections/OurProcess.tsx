"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

import da_1 from "../assets/da_1.png";
import da_2 from "../assets/da_2.png";
import da_3 from "../assets/da_3.png";
import da_4 from "../assets/da_4.png";
import da_5 from "../assets/da_5.png";
import da_6 from "../assets/da_6.png";

const OurProcess = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  // ✅ ensures client-only rendering
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const cards = [
    {
      id: 1,
      icon: da_1,
      title: "Web Development",
      desc: `We build modern, responsive, and SEO-optimized websites using React, Next.js, and Tailwind CSS. Our web solutions are fast, scalable, and perfectly tailored to your brand.`,
      color: "from-[#27272E] to-[#29272E] text-[#27272E]",
    },
    {
      id: 2,
      icon: da_2,
      title: "Mobile App Development",
      desc: `We develop high-performance cross-platform mobile apps using React Native (Expo). Our apps deliver smooth user experiences on both Android and iOS platforms.`,
      color: "from-[#509CF5] to-[#68DBF2] text-[#68DBF2]",
    },
    {
      id: 3,
      icon: da_3,
      title: "UI/UX Design",
      desc: `Our design team creates clean, modern, and user-friendly interfaces in Figma. Every design is built around real user behavior and business goals.`,
      color: "from-[#FF3D9A] to-[#FF92AE] text-[#FF3D9A]",
    },
    {
      id: 4,
      icon: da_4,
      title: "Backend Development",
      desc: `We craft secure and scalable backends using Node.js, Express, and Python frameworks. From APIs to databases, we ensure strong architecture and smooth integration.`,
      color: "from-[#24E795] to-[#67E9F1] text-[#67E9F1]",
    },
    {
      id: 5,
      icon: da_5,
      title: "E-Commerce Solutions",
      desc: `From product management to payment gateways, we build complete e-commerce platforms that boost sales and enhance customer engagement.`,
      color: "from-[#F7936F] to-[#FFEF5E] text-[#FFEF5E]",
    },
    {
      id: 6,
      icon: da_6,
      title: "Maintenance & Support",
      desc: `We provide long-term technical support, security updates, and performance monitoring to keep your software reliable and up-to-date.`,
      color: "from-[#57007B] to-[#F76680] text-[#F76680]",
    },
  ];

  return (
    <section className="bg-[#F7F7FA] py-20 border-y border-[#E7DAED] overflow-x-hidden">
      {/* Heading */}
      <div
        ref={headerRef}
        className="flex flex-col justify-center items-center text-center"
      >
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={mounted && headerInView ? { scaleX: [0, 1, 0.6, 1] } : {}}
          transition={{ duration: 0.9, ease: "easeInOut" }} // slightly faster
          className="w-16 border-0 h-2 bg-gradient-to-tr from-[#57007B] to-[#F76680] mb-4 sm:mb-6 rounded-full origin-center"
        />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={mounted && headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }} // faster fade
          className="text-2xl sm:text-3xl md:text-4xl"
        >
          <strong>Services & <br /> Development Approach</strong>
        </motion.h1>
      </div>

      {/* Cards */}
      <div className="mt-20 px-4 sm:px-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl xl:mx-auto justify-items-center">
        {cards.map((card, idx) => (
          <AnimatedCard key={card.id} card={card} index={idx} mounted={mounted} />
        ))}
      </div>
    </section>
  );
};

const AnimatedCard = ({ card, index, mounted }: any) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }} // ⚡ faster card entry
      className="flex flex-col xl:flex-row justify-center gap-6 px-8 py-16 bg-[#FAFAFA] border-[1.8px] border-[#E7DAED] w-full max-w-2xl h-auto shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div>
        <div className={`bg-gradient-to-tr ${card.color} p-3 rounded-xl w-fit`}>
          <Image src={card.icon} alt={card.title} className="w-[40px]" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-[#1A202C] text-xl font-bold">{card.title}</h1>
        <p className="text-[#4A5568] max-w-[500px]">{card.desc}</p>
      </div>
    </motion.div>
  );
};

export default OurProcess;
