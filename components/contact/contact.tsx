"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          className="bg-[#EDE8E9] rounded-3xl p-8 lg:p-12 shadow-lg"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content and Image */}
            <div className="space-y-8">
              {/* Header */}
              <div data-aos="fade-right" data-aos-delay="200">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Contact <span className="text-red-950">Us</span>
                </h2>

                {/* Benefits List */}
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/tickmar.svg"
                        alt="Check Icon"
                        width={25}
                        height={25}
                      />
                    </div>
                    <span className="text-lg">
                      Expect a response from us within 24 hours
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/tickmar.svg"
                        alt="Check Icon"
                        width={25}
                        height={25}
                      />
                    </div>
                    <span className="text-lg">Fast project delivery</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/tickmar.svg"
                        alt="Check Icon"
                        width={25}
                        height={25}
                      />
                    </div>
                    <span className="text-lg">
                      Get access to a team of dedicated product specialists.
                    </span>
                  </div>
                </div>
              </div>

              {/* Construction Worker Image */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-orange-200">
                  {/* Placeholder for construction worker image */}
                  <Image
                    src="/contact.jpg"
                    alt="Construction Worker"
                    width={800}
                    height={900}
                    className="mx-auto w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div
              className="space-y-6"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-base font-semibold text-red-950 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Jessica"
                    className="w-full px-4 py-3 bg-[#EDE8E9] border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-red-800 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-semibold text-red-950 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="sdcknon@gmail.com"
                      className="w-full px-4 py-3 bg-[#EDE8E9] border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-red-800 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-base font-semibold text-red-950 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="6389106439"
                      className="w-full px-4 py-3 bg-[#EDE8E9] border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-red-800 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-base font-semibold text-red-950 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="I want to do this on my project......"
                    rows={5}
                    className="w-full px-4 py-3 bg-[#EDE8E9] border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-red-800 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#4F1724] hover:bg-red-900 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 group cursor-pointer"
                >
                  <span>Let&apos;s Connect</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
