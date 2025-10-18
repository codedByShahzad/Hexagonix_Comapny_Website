"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import contactIllustration from "@/assets/contactUs.jpg"; // ✅ Illustration image

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: <Mail size={24} />, title: "Email", desc: "info@hexagonix.com" },
    { icon: <Phone size={24} />, title: "Phone", desc: "+1 234 567 890" },
    { icon: <MapPin size={24} />, title: "Location", desc: "123 Digital Street, Tech City" },
  ];

  return (
    <div className="overflow-hidden">
      {/* 🌆 Hero Section with Themed Gradient Background */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center text-white bg-gradient-to-tr from-[#57007B] via-[#7B2CBF] to-[#F76680] px-6 sm:px-12 md:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
            Contact{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FEE140] to-[#FA709A]">
              Us
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Let’s collaborate and bring your ideas to life. We’d love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* 🌐 Contact Info Cards */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative py-20 px-6 sm:px-12 md:px-20 bg-[#F9F8FC]"
      >
        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-[#E7DAED]/60 hover:shadow-2xl transition-all"
            >
              <div className="mb-4 p-4 bg-gradient-to-tr from-[#F76680] to-[#7B2CBF] rounded-full text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#57007B]">{item.title}</h3>
              <p className="text-[#4A5568] text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 📝 Contact Form Section - Form Left, Image Right */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6 sm:px-12 md:px-20 bg-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Form */}
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl font-bold mb-8 text-[#1A202C] text-center md:text-left">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="grid gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-4 border border-[#E7DAED] rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7B2CBF]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 border border-[#E7DAED] rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7B2CBF]"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full p-4 border border-[#E7DAED] rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7B2CBF]"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="w-full p-4 border border-[#E7DAED] rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7B2CBF]"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-[#57007B] via-[#7B2CBF] to-[#F76680] text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right - Illustration */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center md:justify-end"
          >
            <Image
              src={contactIllustration}
              alt="Contact Illustration"
              className="w-[90%] max-w-md object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
