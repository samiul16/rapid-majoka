"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

interface ContactCard {
  id: number;
  icon: React.ElementType;
  title: string;
  content: string;
  link?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const contactInfo: ContactCard[] = [
    {
      id: 1,
      icon: Phone,
      title: "Phone",
      content: "+966-0503010184",
      link: "tel:+9660503010184",
    },
    {
      id: 2,
      icon: Mail,
      title: "Email",
      content: "info@smits-limited.com",
      link: "mailto:info@smits-limited.com",
    },
    {
      id: 3,
      icon: MapPin,
      title: "Location",
      content: "Mecca, Saudi Arabia",
      link: "https://maps.google.com/?q=Mecca+Saudi+Arabia",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          message: "",
        });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const formVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Page Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Side - Contact Info Cards */}
          <motion.div
            className="flex flex-col justify-between gap-6 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;

              return (
                <motion.div
                  key={info.id}
                  className="group flex-1"
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="bg-[#EDE8E9] rounded-xl shadow p-6 md:p-8 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:bg-red-900 transition-colors duration-300"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-7 h-7 text-red-900 group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {info.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex items-center">
                      {info.link ? (
                        <a
                          href={info.link}
                          target={
                            info.title === "Location" ? "_blank" : undefined
                          }
                          rel={
                            info.title === "Location"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-lg sm:text-xl font-bold text-gray-700 hover:text-red-900 transition-colors duration-300 block"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-lg sm:text-xl font-bold text-gray-700 leading-relaxed">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="bg-[#EDE8E9] rounded-xl shadow p-6 sm:p-8 lg:p-10 order-1 lg:order-2 flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={formVariants}
          >
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    className={`mb-5 p-4 rounded-lg flex items-start gap-3 ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm font-medium leading-relaxed">
                      {submitStatus.message}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Fields Container */}
              <div className="space-y-5 flex-1">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    disabled={isSubmitting}
                    className="w-full p-3.5 bg-white rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone"
                    required
                    disabled={isSubmitting}
                    className="w-full p-3.5 bg-white rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    disabled={isSubmitting}
                    className="w-full p-3.5 bg-white rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Message Textarea */}
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className="w-full h-full min-h-[120px] p-3.5 bg-white rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 bg-red-900 hover:bg-red-800 rounded-full text-white text-xl font-bold uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:shadow-xl"
                  }`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
