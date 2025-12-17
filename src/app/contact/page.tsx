"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import contactIllustration from "@/assets/contactUs.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@hexagonix.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      desc: "info@hexagonix.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      desc: "+1 234 567 890",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      desc: "Tech City, Digital Street",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-center text-white bg-gradient-to-tr from-[#57007B] via-[#7B2CBF] to-[#F76680] px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Contact{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
              Us
            </span>
          </h1>
          <p className="text-lg text-white/90">
            Let’s collaborate and build something amazing together.
          </p>
        </motion.div>
      </section>

      {/* Contact Info */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6 bg-[#F9F8FC]"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {contactInfo.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="inline-flex p-4 mb-4 rounded-full bg-gradient-to-tr from-[#F76680] to-[#7B2CBF] text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#57007B] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Form Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="grid gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="p-4 border rounded-xl focus:ring-2 focus:ring-[#7B2CBF]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="p-4 border rounded-xl focus:ring-2 focus:ring-[#7B2CBF]"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="p-4 border rounded-xl focus:ring-2 focus:ring-[#7B2CBF]"
              />
              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="p-4 border rounded-xl focus:ring-2 focus:ring-[#7B2CBF]"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                className="bg-gradient-to-r from-[#57007B] to-[#F76680] text-white py-4 rounded-xl font-semibold shadow-lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <Image
              src={contactIllustration}
              alt="Contact Illustration"
              className="max-w-md w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </motion.section>

      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
};

export default ContactPage;
