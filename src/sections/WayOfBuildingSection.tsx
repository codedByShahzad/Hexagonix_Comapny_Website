"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import ceo1 from "../assets/ceo-1.png";
import ceo2 from "../assets/ceo-2.png";
import ceo3 from "../assets/ceo-3.png";

import gt1 from "../assets/gt-1.jpg";
import gt2 from "../assets/gt-2.jpg";
import gt3 from "../assets/gt-3.jpg";

import Sphere1 from "@/components/Sphere1";
import Sphere2 from "@/components/Sphere2";

const WayOfBuildingSection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const blocks = [
    {
      id: 1,
      img: gt1,
      ceo: ceo1,
      reverse: false,
      content: {
        title: "Build the right team to scale",
        desc1:
          "We help you assemble dedicated teams aligned with your business goals and technical needs.",
        desc2:
          "Our delivery model ensures long-term collaboration, transparency, and cost efficiency.",
        quote:
          "Hexagonix helped us identify challenges early and scale our product with confidence.",
        name: "Jeewa Markram",
        role: "CEO",
      },
    },
    {
      id: 2,
      img: gt2,
      ceo: ceo2,
      reverse: true,
      content: {
        title: "Agile & transparent development",
        desc1:
          "We follow agile methodologies to ensure flexibility, faster delivery, and continuous improvement.",
        desc2:
          "You stay involved at every stage with clear communication and measurable progress.",
        quote:
          "Their agile approach kept everything clear, fast, and perfectly aligned with our vision.",
        name: "Sarah Collins",
        role: "Product Head",
      },
    },
    {
      id: 3,
      img: gt3,
      ceo: ceo3,
      reverse: false,
      content: {
        title: "Quality-driven delivery",
        desc1:
          "Quality is embedded into every phase of our development lifecycle.",
        desc2:
          "From testing to deployment, we ensure performance, security, and scalability.",
        quote:
          "Hexagonix delivered a rock-solid product that exceeded our quality expectations.",
        name: "Daniel Foster",
        role: "CTO",
      },
    },
  ];

  return (
    <section className="px-4 sm:px-6 mb-36 mt-20 overflow-x-hidden">
      {/* Heading */}
      <div ref={headerRef} className="text-center flex flex-col items-center">
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={mounted && headerInView ? { scaleX: [0, 1, 0.6, 1] } : {}}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-16 h-2 bg-gradient-to-tr from-[#57007B] to-[#F76680] mb-6 rounded-full"
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={mounted && headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl"
        >
          Way of building <br /> <strong>Great Software</strong>
        </motion.h1>
      </div>

      {/* Content blocks */}
      {blocks.map((block, idx) => (
        <Block key={block.id} {...block} index={idx} mounted={mounted} />
      ))}
    </section>
  );
};

const Block = ({ img, ceo, reverse, index, mounted, content }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`flex flex-col mt-20 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-14 xl:gap-20 items-center max-w-7xl mx-auto`}
    >
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        animate={mounted && isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-md xl:max-w-xl flex flex-col gap-6"
      >
        <h2 className="text-xl sm:text-2xl xl:text-3xl font-semibold">
          {content.title}
        </h2>

        <p className="xl:text-lg text-[#2D3748]">{content.desc1}</p>
        <p className="xl:text-lg text-[#2D3748]">{content.desc2}</p>

        <div className="flex items-center gap-4">
          <hr className="h-20 w-[5px] bg-gradient-to-t from-[#57007B] to-[#F76680]" />
          <p className="text-sm sm:text-base italic bg-gradient-to-tr from-[#57007B] to-[#F76680] bg-clip-text text-transparent">
            “{content.quote}”
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <Image
            src={ceo}
            alt="ceo image"
            className="w-12 sm:w-[50px] rounded-full"
          />
          <div>
            <h3 className="text-[#1A202C] sm:text-lg">{content.name}</h3>
            <span className="text-xs text-[#718096]">{content.role}</span>
          </div>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -100 : 100 }}
        animate={mounted && isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
      >
        {index === 0 && (
          <>
            <Sphere1 className="absolute -z-10 -translate-y-[40%] -left-6" />
            <Sphere2 className="absolute -z-10 bottom-0 translate-y-1/2 left-[45%]" />
          </>
        )}
        {index === 1 && (
          <>
            <Sphere2 className="absolute -z-10 -translate-y-[40%] -right-3" />
            <Sphere1 className="absolute -z-10 bottom-0 translate-y-1/2 left-[15%]" />
          </>
        )}
        {index === 2 && (
          <>
            <Sphere2 className="absolute -z-10 -translate-y-[50%] right-[43%]" />
            <Sphere1 className="absolute -z-10 bottom-0 translate-y-[30%] -left-4" />
          </>
        )}

        <Image
          src={img}
          alt="image"
          className="rounded-lg w-full max-w-[800px]"
        />
      </motion.div>
    </div>
  );
};

export default WayOfBuildingSection;
