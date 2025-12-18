"use client";

import React, { useEffect, useRef, useState } from "react";
import Sphere1 from "@/components/Sphere1";
import gsap from "gsap";
import Image from "next/image";
import team from "../assets/teamWorking.jpg"

const TrustSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  /* ---------- Client Guard ---------- */
  useEffect(() => {
    setIsClient(true);
  }, []);

  /* ---------- GSAP Animation ---------- */
  useEffect(() => {
    if (!isClient) return;

    const initAnimation = async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });

        tl.fromTo(".trust-hr", { width: 0 }, { width: "100%", duration: 1 })
          .to(".trust-hr", { width: "4rem", duration: 0.6 })
          .from(
            ".trust-heading span",
            { opacity: 0, y: 40, stagger: 0.15, duration: 0.8 },
            "-=0.3"
          )
          .fromTo(
            ".trust-para",
            { opacity: 0, y: 40, filter: "blur(6px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 },
            "-=0.4"
          )
          .from(
            ".trust-link",
            { opacity: 0, x: -20, duration: 0.6 },
            "-=0.5"
          );
      }, sectionRef);

      return () => ctx.revert();
    };

    initAnimation();
  }, [isClient]);

  if (!isClient) return null;

  return (
    <section
      ref={sectionRef}
      className="xl:px-24 mx-auto px-4 sm:px-6 py-20 lg:py-44
                 min-h-[60vh] md:min-h-[70vh]
                 grid grid-cols-1 md:grid-cols-2 gap-12 items-center
                 relative overflow-hidden"
    >
      {/* ---------------- Left Content ---------------- */}
      <div>
        <hr className="trust-hr w-16 h-2 border-2 bg-gradient-to-tr from-[#57007B] to-[#F76680] mb-6" />

        <h1 className="trust-heading text-2xl sm:text-3xl lg:text-4xl mb-8">
          <span>Leading companies trust us </span>
          <span className="font-bold">to develop software</span>
        </h1>

        <p className="trust-para text-gray-600 mb-8 max-w-md">
          We <span className="text-pink-600">add development capacity</span> to
          tech teams. Our value isn’t limited to building teams but is equally
          distributed across the project lifecycle.
        </p>

        <a
          href="/services"
          className="trust-link text-[#57007B] font-semibold inline-flex items-center hover:underline"
        >
          See more information <span className="ml-3">→</span>
        </a>
      </div>

      {/* ---------------- Image ---------------- */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
  <Image
    src={team}
    alt="Team working together"
    className="w-full h-auto object-cover"
    priority
  />
</div>


      {/* ---------------- Decoration ---------------- */}
      <Sphere1 className="absolute hidden md:flex top-[-83px] left-[10%] w-20" />
    </section>
  );
};

export default TrustSection;
