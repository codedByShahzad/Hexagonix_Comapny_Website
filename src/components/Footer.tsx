"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import ft_google from "../assets/ft_google.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const footerLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/casestudies" },
    { label: "Careers", href: "/hire" },
  ];

  return (
    <footer className="bg-[#F8F7FC] text-[#4A5568]">
      <div className="pt-20 px-10 xl:px-20 flex flex-col lg:flex-row justify-between gap-10">
        {/* 🔹 Left Section */}
        <div className="flex flex-col items-center lg:items-start gap-8">
          <Image src={logo} alt="logo" width={150} height={150} />
          <p className="text-center lg:text-left text-lg max-w-[400px] text-[#718096]">
            Building meaningful digital experiences that inspire innovation and
            drive growth.
          </p>
          <div>
            <Image src={ft_google} alt="Play Store" className="w-[180px]" />
          </div>
        </div>

        {/* 🔹 Links Section */}
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-2xl text-[#4A5568] font-bold mb-6">Links</h1>
          <ul className="flex flex-col items-center lg:items-start gap-4 text-lg">
            {footerLinks.map((link, i) => (
              <li key={i} className="relative group">
                <Link
                  href={link.href}
                  className="text-[#718096] hover:text-[#57007B] transition-colors duration-300"
                >
                  {link.label}
                </Link>
                {/* 🟣 Animated underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#57007B] to-[#F76680] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔹 Contact Section */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-2xl text-[#4A5568] font-bold mb-6">Contact Us</h1>
          <p className="text-[#718096] text-lg max-w-[330px] text-center lg:text-left">
            Have a project in mind? Let's create something amazing together.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <FaPhoneAlt className="text-[#57007B] text-xl" />
            <p className="text-[#718096] text-lg font-semibold">
              +92 318 3561921
            </p>
          </div>
        </div>

        {/* 🔹 Social Icons */}
        <div className="flex items-end gap-4 pb-10 justify-center lg:justify-end">
          {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedin].map((Icon, i) => (
            <div
              key={i}
              className="bg-white p-3 shadow-md rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            >
              <Icon className="text-[#57007B] group-hover:text-[#F76680] transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Divider + Copyright */}
      <hr className="mt-6 border-[#E2E8F0]" />
      <p className="text-center py-8 text-[#4A5568] text-sm">
        © {year ?? ""} Copyright by{" "}
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#57007B] to-[#F76680]">
          Hexagonix
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
