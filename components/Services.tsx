"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  const handleReadMore = (serviceId: number) => {
    router.push(`/services-details?service=${serviceId}`);
  };

  const services = [
    {
      id: 1,
      title: "Inspection",
      description: [
        "Vendor Inspection",
        "Mechanical Inspection",
        "Electrical Inspection",
        "Civil Inspection",
        "Factory Assessment",
        "Factory Audit",
        "Auditor Training",
      ],
      icon: "/landing/services/6.svg",
      featured: true,
    },
    {
      id: 2,
      title: "Force & Torque Calibration",
      description: [
        "Torque Calibrators",
        "Torque Wrenches",
        "Torque Gauges",
        "Load Cells",
        "Force Gauges",

        "Tension Gauges",
        "Compression Machines",
        "Tensile Testing Machines",
        "Hydraulic Jacks",
        "Universal Testing machines up to 60T",
      ],
      icon: "/landing/services/1.svg",
      featured: true,
    },
    {
      id: 3,
      title: "Process Control Instrumentation",
      description: [
        "Pressure Transmitters",
        "Temperature Transmitters",
        "Level Transmitters",
        "Flow Transmitters",
        "Volumetric Measurements",
        "Auto Label",
        "Safety Relief Valves",
        "I/P Converters",
        "Multi gas Detectors",
        "Anemometers",
        "Tachometers",
        "Densitometers",
        "Hydro testing Facilities",
        "Tension & Accessory Calibrators",
      ],
      icon: "/landing/services/2.svg",
      featured: true,
    },
    {
      id: 4,
      title: "Electrical & Electronics",
      description: [
        "Digital & Analogue multimeters",
        "Clamp meters",
        "Insulation testers",
        "Earth resistance testers",
        "Ohm meters",
        "Ampere meters",
        "High voltage testers",
        "Frequency meters",
        "Volt meters",
        "Power supplies",
        "Digital Earth Testers",
        "Megger Testers",
        "High Voltage Porosity Detectors",
      ],
      icon: "/landing/services/3.svg",
      featured: true,
    },
    {
      id: 5,
      title: "Lifting & Non-Destructive Equipment",
      description: [
        "Crane Certification",
        "JIB Cranes",
        "Ultrasonic Flow Detectors",
        "Hardness Testers",
        "MPT Yokes",
        "PMI Equipment",
        "Lux Meters",
        "Stop Watches",
        "Sound Level Meters",
      ],
      icon: "/landing/services/4.svg",
      featured: true,
    },
    {
      id: 6,
      title: "Pressure Systems",
      description: [
        "Pressure Elements",
        "Pressure Transmitters",
        "Pressure Gauges",
        "Pressure Safety Valves",
        "Manometers",
        "Pressure Recorders",
        "Hydraulic & Pneumatic Pumps",
        "Air Compressors",
      ],
      icon: "/landing/services/5.svg",
      featured: true,
    },
    {
      id: 7,
      title: "Mechanical & Inspection Equipment",
      description: [
        "Mechanical Testing Equipment",
        "Mechanical Measuring Equipment",
        "Pressure Testing Facilities",
        "Inspection Tools",
        "Profile Gauges",
        "Gauge Block Sets",
        "Slip Gauges",
      ],
      icon: "/landing/services/6.svg",
      featured: true,
    },
    {
      id: 8,
      title: "Weights",
      description: [
        "Weights",
        "Weighing Scales",
        "Balances",
        "Top Loads",
        "Dead Weights",
        "Other Types of Balances",
      ],
      icon: "/landing/services/1.svg",
      featured: true,
    },
    {
      id: 9,
      title: "Gauge (Dial & Digital)",
      description: [
        "Specific Gravity Gauges",
        "Load Gauges Calibration",
        "Pressure Calibration",
        "Dial Gauge Indicators",
        "Digital Gauge Indicators",
        "Others",
      ],
      icon: "/landing/services/2.svg",
      featured: true,
    },
    {
      id: 10,
      title: "Laboratories & Testing Services",
      description: [
        "Soil Testing",
        "Aggregate Testing",
        "Concrete Testing",
        "Cement Testing",
        "Asphalt and Binder Testing",
        "Chemical & Water Testing",
        "Petro graphic Analysis",
        "Rock and Rock Foundation Testing",
        "Mortar Testing",
        "Bitumen Testing",
        "Super pave Testing",
        "Field Testing by NDG",
        "Field Testing by Electrical Density Gauge",
        "Pavement Investigation",
        "Asphalt Mix Design",
        "Other special test based on client requirements",
        "Concrete Structure Inspection and failure assessment",
        "Structural Integrity, defect and voids in concrete & rock",
        "Durability Assessment of Reinforced concrete Structure",
        "NDT Compression test by Schmidt Hammer",
        "NDT by Pulse Velocity for concrete",
        "Core Drilling",
        "Steel Rebar Testing",
        "Rebar Locator & cover distance measurement",
        "Pull off Test",
        "Concrete coating Thickness measurement",
        "Concrete Mix Design",
        "Structure and Foundation Testing",
        "Brick & Block Testing",
        "Site Investigation",
      ],
      icon: "/landing/services/3.svg",
      featured: true,
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-950 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-stone-900 max-w-2xl mx-auto">
            Discover how we can elevate your experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl p-6 text-center transition-all duration-500 hover:shadow-2xl hover:scale-105 border border-stone-400 bg-white hover:bg-pink-950 cursor-pointer flex flex-col h-full"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-pink-950/80 group-hover:bg-white/20 transition-all duration-500">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={28}
                    height={28}
                    className="filter brightness-0 invert transition-all duration-500"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-500">
                {service.title}
              </h3>

              {/* Description */}
              <div className="flex-grow">
                <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm leading-relaxed mb-6 text-gray-800 group-hover:text-white/90 transition-colors duration-500">
                  {Array.isArray(service.description) ? (
                    service.description.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-left"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-pink-700 group-hover:bg-white flex-shrink-0"></span>
                        <span className="text-md">{point}</span>
                      </li>
                    ))
                  ) : (
                    <li>{service.description}</li>
                  )}
                </ul>
              </div>

              {/* Get Started Button */}
              <div className="mt-auto">
                <button
                  onClick={() => handleReadMore(service.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-pink-950 group-hover:text-white cursor-pointer text-sm"
                >
                  Get Started
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
