"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import leftComma from "../assets/leftComma.png";
import rightComma from "../assets/rightComma.png";
import user1 from "../assets/tahir.jpg";
import user2 from "../assets/shahzad.jpeg"
import user3 from "../assets/wajid.png"
import user4 from "../assets/member1.jpg"
import user5 from "../assets/mateen.jpeg"
import user6 from "../assets/haris.jpeg"

const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  { id: 1, name: "Abdul Mateen", title: "Project Manager", img: user5 },
  { id: 2, name: "Shahzad Sohail", title: "Full Stack Developer", img: user2 },
  { id: 3, name: "Tahir Mehmood", title: "Product Manager", img: user1 },
  { id: 4, name: "Wajid", title: "UI/UX Designer", img: user3 },
  { id: 5, name: "Naqash Sohail", title: "Frontend Engenieer", img: user4 },
  { id: 5, name: "Haris Mehmood", title: "Social Media Manager ", img: user6 },
];

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border-2 border-purple-600 bg-white text-purple-600 flex items-center justify-center shadow-md z-10 hover:bg-purple-50 transition"
  >
    <FiChevronLeft size={24} />
  </button>
);

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border-2 border-purple-600 bg-white text-purple-600 flex items-center justify-center shadow-md z-10 hover:bg-purple-50 transition"
  >
    <FiChevronRight size={24} />
  </button>
);

const TeamSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) setItemsPerView(1);
      else if (w < 1280) setItemsPerView(3);
      else setItemsPerView(5);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const handleAfterChange = useCallback(
    (_: number, info: { currentSlide?: number }) => {
      if (typeof info?.currentSlide === "number") {
        setCurrentSlide(info.currentSlide);
      }
    },
    []
  );

  if (!mounted) return null;

  const normalizedIndex = currentSlide % testimonials.length;
  const centerOffset = Math.floor(itemsPerView / 2);
  const centerIndex =
    itemsPerView === 1
      ? normalizedIndex
      : (normalizedIndex + centerOffset) % testimonials.length;

  return (
    <section className="bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-12 lg:py-28 lg:pb-52 relative overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-center flex flex-col justify-center items-center"
      >
        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-16 border-2 h-2 bg-gradient-to-tr from-[#57007B] to-[#F76680] mb-4 sm:mb-6 origin-center"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-snug">
          Why customers love <br />
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#57007B] to-[#F76680]">
            working with us
          </span>
        </h1>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative flex items-center justify-center max-w-full sm:max-w-3xl mx-auto mt-12 sm:mt-20 text-center px-4"
      >
        <Image
          src={leftComma}
          alt="Left Comma"
          className="absolute left-0 sm:-left-10 top-0 w-2 h-4 md:h-7 md:w-4"
        />
        <p className="text-gray-600 text-sm md:text-lg leading-6 sm:leading-7 md:leading-9 max-w-full sm:max-w-xl mx-auto">
         At Hexagonix, our team is a group of passionate developers, designers, and strategists dedicated to building impactful digital solutions. We believe in collaboration, innovation, and attention to detail in every project we take on.
        </p>
        <Image
          src={rightComma}
          alt="Right Comma"
          className="absolute right-0 sm:-right-10 bottom-0 w-2 h-4 md:h-7 md:w-4"
        />
      </motion.div>

      {/* Carousel wrapper (fade-in when in view) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="w-full max-w-full sm:max-w-6xl mt-8 sm:mt-12 relative"
      >
        <Carousel
          responsive={{
            xl: { breakpoint: { max: 3000, min: 1280 }, items: 5 },
            lg: { breakpoint: { max: 1280, min: 640 }, items: 3 },
            sm: { breakpoint: { max: 640, min: 0 }, items: 1 },
          }}
          infinite
          arrows
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          itemClass="px-2 sm:px-4"
          afterChange={handleAfterChange}
        >
          {testimonials.map((item, index) => {
            const isActive = itemsPerView === 1 ? true : index === centerIndex;

            return (
              <div
                key={item.id}
                className={`flex flex-col items-center p-2 sm:p-4 w-full transition-all duration-500 transform ${
                  isActive ? "scale-105 sm:scale-110 opacity-100" : "scale-90 opacity-60"
                }`}
                aria-hidden={!isActive}
              >
                {/* Avatar */}
                <div
                  className={`relative w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden transition-all duration-500 ${
                    isActive ? "opacity-100 ring-4 ring-purple-600" : "opacity-60"
                  }`}
                  style={{
                    backgroundColor: isActive ? "transparent" : "#E7DAED99",
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Stars */}
                <div className="flex mt-2 sm:mt-3 space-x-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-xl transition-colors duration-300 ${
                          isActive ? "text-yellow-400" : "text-[#E7DAED99]"
                        }`}
                      />
                    ))}
                </div>

                {/* Name */}
                <h3
                  className={`mt-2 text-lg font-semibold transition-colors duration-500 ${
                    isActive ? "text-purple-700" : "text-[#E7DAED99]"
                  }`}
                >
                  {item.name}
                </h3>

                {/* Title */}
                <p
                  className={`text-sm transition-colors duration-500 ${
                    isActive ? "text-gray-600" : "text-[#E7DAED99]"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </Carousel>
      </motion.div>
    </section>
  );
};

export default TeamSection;
