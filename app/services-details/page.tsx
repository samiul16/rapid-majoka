"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonHeader from "@/components/Common/CommonHeader";
import MeetOurTeam from "@/components/Common/MeetOurTeam";
import ClientTestimonials from "@/components/ClientTestimonials";
import Question from "@/components/Question";

interface Service {
  id: number;
  name: string;
  title: string;
  description: string;
  highlights: string[];
  services: string[];
  image: string;
}

const ServicesContent = () => {
  const [activeService, setActiveService] = useState(1);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    // Get service ID from URL parameters
    const serviceId = searchParams.get("service");
    if (serviceId) {
      const id = parseInt(serviceId);
      if (id >= 1 && id <= 10) {
        setActiveService(id);
      }
    }
  }, [searchParams]);

  const servicesData: Service[] = [
    {
      id: 1,
      name: "Inspection",
      title: "Inspection",
      description:
        "Ensure the highest standards of quality, safety, and compliance with our comprehensive Inspection services. We cover a wide range of inspections across industries to help you identify risks, improve processes, and maintain operational excellence.",
      highlights: [
        "Wide Coverage: Mechanical, Electrical, Civil, Factory inspections & audits",
        "Expert Evaluation: Detect flaws and ensure compliance",
        "Auditor Training: Equip your team with effective inspection skills.",
      ],
      services: [
        "Vendor Inspection",
        "Mechanical Inspection",
        "Electrical Inspection",
        "Civil Inspection",
        "Factory Assessment",
        "Factory Audit",
        "Auditor Training",
      ],
      image: "Inspection",
    },
    {
      id: 2,
      name: "Force & Torque Calibration",
      title: "Force & Torque Calibration",
      description:
        "Our Force & Torque services provide accurate measurement, calibration, and testing solutions to ensure reliability and safety in industrial applications. Using advanced equipment and expert techniques, we help you maintain optimal performance and compliance.",
      highlights: [
        "Accurate Measurement: High-precision force and torque testing.",
        "Reliable Calibration: Ensure your tools meet standard specifications.",
        "Comprehensive Solutions: From gauges to universal testing machines, we cover it all.",
      ],
      services: [
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
      image: "Force",
    },
    {
      id: 3,
      name: "Process Control Instrumentation",
      title: "Process Control Instrumentation",
      description:
        "Our Process Control Instrumentation services offer accurate monitoring, measurement, and calibration solutions for industrial processes. We ensure your systems operate safely, efficiently, and within regulatory standards using state-of-the-art instruments and expert techniques.",
      highlights: [
        "Precise Monitoring: Accurate measurement of pressure, temperature, flow, and level.",
        "Reliable Calibration: Ensure all instruments meet industry standards.",
        "Comprehensive Solutions: Safety devices, detectors, converters, and testing facilities included.",
      ],
      services: [
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
      image: "Process Control Instrumentation",
    },
    {
      id: 4,
      name: "Electrical & Electronics",
      title: "Electrical & Electronics",
      description:
        "Our Electrical & Electronics services provide precise testing, measurement, and calibration for a wide range of electrical and electronic equipment. We help ensure safety, performance, and compliance using advanced instruments and expert techniques.",
      highlights: [
        "Accurate Testing: For all digital, analogue, and high-voltage equipment.",
        "Reliable Calibration: Maintain compliance and optimal performance.",
        "Comprehensive Solutions: Covering multimeters, testers, power supplies, and detectors.",
      ],
      services: [
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
      image: "Electrical-Electronics",
    },
    {
      id: 5,
      name: "Lifting & Non-Destructive Equipment",
      title: "Lifting & Non-Destructive Equipment",
      description:
        "Our Lifting & Non-Destructive Equipment services ensure safety, reliability, and accuracy in industrial operations. From crane certification to advanced non-destructive testing instruments, we provide expert inspection, testing, and calibration solutions to enhance operational efficiency and compliance.",
      highlights: [
        "Safe Lifting: Certification and inspection of cranes and lifting devices.",
        "Precise Testing: Non-destructive equipment for accurate measurement and evaluation.",
        "Comprehensive Solutions: Covering cranes, detectors, testers, meters, and instruments.",
      ],
      services: [
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
      image: "Lifting-Non-Destructive-Equipment",
    },
    {
      id: 6,
      name: "Pressure Systems",
      title: "Pressure Systems",
      description:
        "Our Pressure services offer precise measurement, monitoring, and calibration of pressure systems across industries. We help maintain operational efficiency, safety, and compliance using advanced instruments and expert techniques.",
      highlights: [
        "Precise Measurement: Accurate monitoring of pressure systems.",
        "Reliable Calibration: Ensure instruments meet industry standards.",
        "Comprehensive Solutions: Covering gauges, transmitters, valves, pumps, and compressors.",
      ],
      services: [
        "Pressure Elements",
        "Pressure Transmitters",
        "Pressure Gauges",
        "Pressure Safety Valves",
        "Manometers",
        "Pressure Recorders",
        "Hydraulic & Pneumatic Pumps",
        "Air Compressors",
      ],
      image: "Pressure Systems",
    },
    {
      id: 7,
      name: "Mechanical & Inspection Equipment",
      title: "Mechanical & Inspection Equipment",
      description:
        "Our Mechanical & Inspection Equipment services provide high-precision tools designed for testing, measurement, and inspection across industrial applications. From profile gauges to pressure testing facilities, we offer durable and accurate equipment to help maintain operational quality and compliance.",
      highlights: [
        "High Precision: Accurate tools for testing and inspection.",
        "Durable Equipment: Built for industrial performance.",
        "Wide Range: Covers gauges, testing tools, and inspection devices.",
      ],
      services: [
        "Mechanical Testing Equipment",
        "Mechanical Measuring Equipment",
        "Pressure Testing Facilities",
        "Inspection Tools",
        "Profile Gauges",
        "Gauge Block Sets",
        "Slip Gauges",
      ],
      image: "Mechanical-Inspection-Equipment",
    },
    {
      id: 8,
      name: "Weights",
      title: "Weights",
      description:
        "Our Weights service provides high-accuracy weighing scales, balances, and calibration weights for industrial, laboratory, and commercial use. We ensure precise measurements essential for testing, calibration, and quality control processes.",
      highlights: [
        "Accurate Weighing: Precision scales and balances.",
        "Reliable Calibration: Supports industrial & lab standards.",
        "Wide Variety: From top loads to dead weights.",
      ],
      services: [
        "Weights",
        "Weighing Scales",
        "Balances",
        "Top Loads",
        "Dead Weights",
        "Other Types of Balances",
      ],
      image: "Weights",
    },
    {
      id: 9,
      name: "Gauge (Dial & Digital)",
      title: "Gauge (Dial & Digital)",
      description:
        "Our Gauge (Dial & Digital) services include precise measurement tools for industrial and laboratory applications. From specific gravity gauges to digital indicators, we ensure accuracy, reliability, and compliance with calibration standards.",
      highlights: [
        "High Accuracy: Reliable dial & digital measurement tools.",
        "Wide Application: Supports pressure, load, and gravity testing.",
        "Calibrated Performance: Ensures compliance with industry standards.",
      ],
      services: [
        "Specific Gravity Gauges",
        "Load Gauges Calibration",
        "Pressure Calibration",
        "Dial Gauge Indicators",
        "Digital Gauge Indicators",
        "Others",
      ],
      image: "Gauge-Dial-Digital",
    },
    {
      id: 10,
      name: "Laboratories & Testing Services",
      title: "Laboratories & Testing Services",
      description:
        "Our Laboratory services provide complete testing, analysis, and evaluation for construction materials, soil, concrete, asphalt, water, and structural components. Using advanced equipment and internationally accepted standards, we deliver accurate and reliable results to support quality control, compliance, and project decision-making. We also provide specialized tests, field investigations, and non-destructive testing (NDT) services to assess material performance, structural integrity, durability, and site conditions.",
      highlights: [
        "Accurate Material Testing: Soil, concrete, asphalt, aggregates & more.",
        "Advanced NDT Solutions: Structural integrity & durability evaluation.",
        "Field & Site Expertise: On-site testing and investigation services.",
      ],
      services: [
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
      image: "Laboratories-Testing-Services",
    },
    {
      id: 11,
      name: "Calibration",
      title: "Calibration",
      description:
        "Our Calibration services ensure the accuracy, reliability, and compliance of your measurement instruments across mechanical, electrical, pressure, temperature, and industrial applications. Using certified equipment and international calibration standards, we provide precise results that help maintain product quality, safety, and operational efficiency. Whether it's gauges, electrical meters, measurement tools, or industrial testing devices—our expert calibration solutions guarantee consistent performance and full traceability.",
      highlights: [
        "High Accuracy: Certified calibration for industrial instruments.",
        "Wide Range: Mechanical, electrical, pressure, temperature & more.",
        "Compliance Ready: Meets international standards and traceability requirements.",
      ],
      services: [
        "Specific Gravity Gauges",
        "Load Gauges Calibration",
        "Pressure Calibration",
        "Dial Gauge Indicators",
        "Digital Gauge Indicators",
        "Others",
      ],
      image: "Calibration",
    },
  ];

  const currentService = servicesData.find((s) => s.id === activeService);

  return (
    <>
      <CommonHeader
        title={currentService?.title || "Services"}
        breadcrumb={`Services / ${currentService?.name || "Service Details"}`}
        imagePath="/about-us/about-us-1.png"
      />
      <div className="w-full min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar */}
            <div className="w-full lg:w-96 flex flex-col gap-6">
              {/* Service Categories */}
              <div
                className="bg-white rounded-3xl shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] overflow-hidden"
                data-aos="fade-right"
              >
                <div className="p-6 bg-stone-900 rounded-tl-3xl rounded-tr-3xl">
                  <h2 className="text-white text-xl sm:text-2xl font-bold leading-7">
                    Service Category
                  </h2>
                </div>
                <div className="p-4 pb-2">
                  {servicesData.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service.id)}
                      className={`w-full px-4 py-5 flex justify-between items-center transition-all duration-300 mb-2 rounded-2xl outline outline-1 outline-offset-[-1px] outline-pink-950 cursor-pointer ${
                        activeService === service.id
                          ? "bg-pink-950"
                          : "hover:bg-pink-950/10"
                      }`}
                    >
                      <span
                        className={`text-lg leading-7 text-left ${
                          activeService === service.id
                            ? "text-white font-bold"
                            : "text-stone-900 font-medium"
                        }`}
                      >
                        {service.id < 10 ? `0${service.id}` : service.id}.{" "}
                        {service.name}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex justify-center items-center transition-all duration-300 flex-shrink-0 ${
                          activeService === service.id
                            ? "bg-gray-200"
                            : "bg-pink-950"
                        }`}
                      >
                        <span
                          className={`text-lg font-medium leading-7 ${
                            activeService === service.id
                              ? "text-pink-950"
                              : "text-gray-200"
                          }`}
                        >
                          ➜
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Explore Documents */}
              <div
                className="bg-gray-200 rounded-3xl shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] p-6"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="flex flex-col items-center gap-10">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-3 bg-pink-950 rounded-2xl">
                      <div className="w-9 h-9 relative">
                        <Image
                          src="/csv/csv.svg"
                          alt="PDF Icon"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-stone-900 text-xl font-bold text-center">
                      Explore Our Documents
                    </h3>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                    <button className="px-4 py-2 bg-pink-950 rounded-[50px] shadow-[2px_3px_4px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-1px] outline-pink-950 hover:bg-pink-900 transition-colors duration-300 cursor-pointer">
                      <span className="text-white text-base font-bold leading-normal">
                        Download PDF
                      </span>
                    </button>
                    <button className="px-4 py-2 bg-white rounded-[50px] shadow-[2px_3px_4px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-1px] outline-pink-950 hover:bg-pink-950 transition-all duration-300 group cursor-pointer">
                      <span className="text-pink-950 text-base font-bold leading-normal group-hover:text-white">
                        Preview PDF
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div
                className="bg-gray-200 rounded-3xl shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] p-6"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="flex flex-col items-center gap-6">
                  <div className="p-3 bg-pink-950 rounded-2xl">
                    <div className="w-9 h-9 relative">
                      <Image
                        src="/csv/SVG.svg"
                        alt="Contact Icon"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-black text-base font-bold text-center">
                    We are always available to discuss with you
                  </p>
                  <a
                    href="mailto:info@majokaengineering.com"
                    className="text-black text-lg font-medium hover:text-pink-950 transition-colors duration-300 break-all text-center"
                  >
                    info@majokaengineering.com
                  </a>
                  <button
                    className="px-6 py-3 bg-pink-950 rounded-[50px] shadow-[2px_3px_4px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-1px] outline-pink-950 hover:bg-pink-900 transition-all duration-300 flex items-center gap-3 cursor-pointer"
                    onClick={() => router.push("/contact")}
                  >
                    <span className="text-white text-base font-bold leading-normal">
                      Contact Us
                    </span>
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Hero Image */}
              <div
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] 2xl:h-[600px] rounded-[40px] overflow-hidden relative"
                data-aos="fade-left"
              >
                <Image
                  fill
                  className="w-full h-full object-cover"
                  src={`/Catagory/${currentService?.image}.png`}
                  alt={currentService?.title || "Service"}
                />
              </div>

              {/* Service Title */}
              <h1
                className="text-stone-900 text-3xl sm:text-4xl font-bold"
                data-aos="fade-up"
              >
                {currentService?.title}
              </h1>

              {/* Service Description */}
              <div
                className="bg-gray-200/50 rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.12)] px-6 sm:px-8 py-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p className="text-stone-900/80 text-lg sm:text-xl lg:text-2xl font-normal text-justify mb-6">
                  {currentService?.description}
                </p>
                <div className="flex flex-col gap-4">
                  {currentService?.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                      data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-stone-900 text-lg sm:text-xl font-medium flex-1">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services List */}
              <div data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-stone-900 text-3xl sm:text-4xl font-medium mb-6">
                  Services
                </h2>
                <div className="bg-gray-200/50 rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.12)] px-6 sm:px-8 py-6">
                  <div className="flex flex-col gap-4">
                    {currentService?.services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3"
                        data-aos="fade-left"
                        data-aos-delay={index * 50}
                      >
                        <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="text-stone-900 text-lg sm:text-xl font-medium flex-1">
                          {service}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Question />
      <MeetOurTeam />
      <ClientTestimonials />
    </>
  );
};

const Services = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesContent />
    </Suspense>
  );
};

export default Services;
