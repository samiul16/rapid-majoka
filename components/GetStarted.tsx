"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";

const GetStarted = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const services = [
    "Contracting",
    "Testing",
    "Calibration",
    "Inspection",
    "Trading",
    "Hotel",
  ];

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative w-full min-h-[676px] overflow-hidden px-4 md:px-8 lg:px-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/getStart.png')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-stone-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 py-16 flex flex-col lg:flex-row justify-between items-start ">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 px-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-[-0.4px]">
            Ready To Get Started? Contact Us Today!
          </h2>
          <p className="text-xl md:text-2xl font-medium text-white mb-12 text-justify">
            Eager to kick off your next construction project? Reach out to us
            today! Our team is ready to assist you with all your needs and
            ensure a smooth process from start to finish.
          </p>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="w-11 h-11 rounded-full bg-white bg-opacity-100 backdrop-blur-sm flex items-center justify-center">
                <Mail className="w-5 h-5 text-stone-900" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-xl font-medium text-white">Email</h4>
                <a
                  href="mailto:info@smits-limited.com"
                  className="text-base font-medium text-white hover:underline"
                >
                  info@smits-limited.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="w-11 h-11 rounded-full bg-white bg-opacity-100 backdrop-blur-sm flex items-center justify-center">
                <Phone className="w-5 h-5 text-stone-900" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-xl font-medium text-white">Phone</h4>
                <a
                  href="tel:+9660503010184"
                  className="text-base font-medium text-white hover:underline"
                >
                  +966-0503010184
                </a>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-start space-x-4">
              <div className="w-11 h-11 rounded-full bg-white bg-opacity-100 backdrop-blur-sm flex items-center justify-center">
                <MapPin className="w-5 h-5 text-stone-900" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-xl font-medium text-white">Office</h4>
                <p className="text-base font-medium text-white">
                  Mecca, Saudi Arabia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Contact Form */}
        <div className="w-full lg:w-5/12 bg-white/20 bg-opacity-40 backdrop-blur-md rounded-[20px] p-12 lg:p-15 border border-gray-400">
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-6">
              {/* Name Input */}
              <div className="w-full h-[50px] border border-[#e9f5fb] rounded-xl px-4 py-4 flex items-center">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full bg-transparent text-[#e9f5fb] placeholder-[#e9f5fb] outline-none text-lg"
                />
              </div>

              {/* Phone Input */}
              <div className="w-full h-[50px] border border-[#e9f5fb] rounded-xl px-4 py-4 flex items-center">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent text-[#e9f5fb] placeholder-[#e9f5fb] outline-none text-lg"
                />
              </div>

              {/* Email Input */}
              <div className="w-full h-[50px] border border-[#e9f5fb] rounded-xl px-4 py-4 flex items-center">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent text-[#e9f5fb] placeholder-[#e9f5fb] outline-none text-lg"
                />
              </div>

              {/* Services Dropdown */}
              <div className="relative">
                <div
                  className="w-full h-[50px] border border-[#e9f5fb] rounded-xl px-4 py-4 flex items-center justify-between cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="text-[#e9f5fb] text-lg">
                    {selectedService || "Select Service"}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#e9f5fb] transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white/90 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg z-50 max-h-48 overflow-y-auto">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="px-4 py-3 text-gray-800 hover:bg-gray-100/50 cursor-pointer transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl"
                        onClick={() => handleServiceSelect(service)}
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Message Input */}
              <div className="w-full h-[50px] border border-[#e9f5fb] rounded-xl px-4 py-4 flex items-center">
                <input
                  type="text"
                  placeholder="Message"
                  className="w-full bg-transparent text-[#e9f5fb] placeholder-[#e9f5fb] outline-none text-lg"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full h-[50px] bg-primary hover:bg-primary/70 text-white font-bold text-xl rounded-full flex items-center justify-center cursor-pointer shadow">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
