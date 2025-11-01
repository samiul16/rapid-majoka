import React from "react";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Contracting",
      description:
        "Majoka delivers high-quality contracting solutions, ensuring precision and reliability in every project.",
      icon: "/landing/services/6.svg",
      featured: true,
    },
    {
      id: 2,
      title: "Testing",
      description:
        "Majoka delivers high-quality contracting solutions, ensuring precision and reliability in every project.",
      icon: "/landing/services/1.svg",
      featured: false,
    },
    {
      id: 3,
      title: "Calibration",
      description:
        "Majoka delivers high-quality contracting solutions, ensuring precision and reliability in every project.",
      icon: "/landing/services/2.svg",
      featured: false,
    },
    {
      id: 4,
      title: "Inspection",
      description:
        "Majoka delivers high-quality contracting solutions, ensuring precision and reliability in every project.",
      icon: "/landing/services/3.svg",
      featured: false,
    },
    {
      id: 5,
      title: "Trading",
      description:
        "Majoka delivers high-quality contracting solutions, ensuring precision and reliability in every project.",
      icon: "/landing/services/4.svg",
      featured: false,
    },
    {
      id: 6,
      title: "Hotel",
      description:
        "Majoka delivers high-quality contracting solutions, ensuring precision and reliability in every project.",
      icon: "/landing/services/5.svg",
      featured: false,
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
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
              className={`
                rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 border border-stone-400
                ${
                  service.featured
                    ? "bg-pink-950 text-white"
                    : "bg-white text-gray-900 border border-gray-200"
                }
              `}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className={`
                  w-16 h-16 rounded-full flex items-center justify-center
                  ${service.featured ? "bg-white/20" : "bg-pink-950/80"}
                `}
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                    className={`
                      ${
                        service.featured
                          ? "filter brightness-0 invert"
                          : "filter brightness-0 invert"
                      }
                    `}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              {/* Description */}
              <p
                className={`
                text-base leading-relaxed mb-8
                ${service.featured ? "text-white/90" : "text-gray-600"}
              `}
              >
                {service.description}
              </p>

              {/* Read More Button */}
              <button
                className={`
                px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer
                ${service.featured ? " text-white " : " text-pink-950"}
              `}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
