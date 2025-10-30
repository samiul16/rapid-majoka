"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface ProjectCard {
  id: number;
  contractNo: string;
  contractTitle: string;
  location: string;
  client: string;
  startEndDate: string;
  status: string;
  image: string;
}

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  const projects: ProjectCard[] = [
    {
      id: 1,
      contractNo: "4212400",
      contractTitle:
        "Construction of an 720 square meter office building in Dhahran Aramco",
      location: "Dhahran",
      client: "S. Aramco-TND Dept.",
      startEndDate: "Mar, 1998 - Aug, 1999",
      status: "Completed",
      image: "/project/1.jpg",
    },
    {
      id: 2,
      contractNo: "4212400",
      contractTitle:
        "Construction of an 720 square meter office building in Dhahran Aramco",
      location: "Dhahran",
      client: "S. Aramco-TND Dept.",
      startEndDate: "Mar, 1998 - Aug, 1999",
      status: "Completed",
      image: "/project/2.jpg",
    },
    {
      id: 3,
      contractNo: "4212400",
      contractTitle:
        "Construction of an 720 square meter office building in Dhahran Aramco",
      location: "Dhahran",
      client: "S. Aramco-TND Dept.",
      startEndDate: "Mar, 1998 - Aug, 1999",
      status: "Completed",
      image: "/project/3.jpg",
    },
    {
      id: 4,
      contractNo: "4212400",
      contractTitle:
        "Construction of an 720 square meter office building in Dhahran Aramco",
      location: "Dhahran",
      client: "S. Aramco-TND Dept.",
      startEndDate: "Mar, 1998 - Aug, 1999",
      status: "Completed",
      image: "/project/4.jpg",
    },
    {
      id: 5,
      contractNo: "4212401",
      contractTitle:
        "Renovation of the main terminal at King Fahd International Airport",
      location: "Dammam",
      client: "Saudi Airports Authority",
      startEndDate: "Jan, 2000 - Dec, 2001",
      status: "Completed",
      image: "/project/5.jpg",
    },
    {
      id: 6,
      contractNo: "4212402",
      contractTitle: "Development of a new commercial complex in Jeddah",
      location: "Jeddah",
      client: "Jeddah Real Estate Co.",
      startEndDate: "Feb, 2002 - May, 2004",
      status: "Ongoing",
      image: "/project/1.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
            Majoka Project Portfolio
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Completed 6 major construction and infrastructure projects for Saudi
            Aramco and SCECO, totaling SR 18 million, with 100% on-time delivery
            across Dhahran, Jubail, and Rastanura.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Image */}
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Project ${project.id}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Contract Number - Top Right */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white text-sm font-semibold">
                    {project.contractNo}
                  </span>
                </div>

                {/* Project Details - Bottom Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="space-y-3">
                    {/* Contract Title */}
                    <div>
                      <span className="block text-white/80 text-base font-semibold mb-1">
                        Contract Title:
                      </span>
                      <span className="text-white text-sm font-semibold leading-tight line-clamp-2">
                        {project.contractTitle}
                      </span>
                    </div>

                    {/* Location and Client */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-white/80 text-base font-semibold mb-1">
                          Location:
                        </span>
                        <span className="text-white text-sm font-semibold">
                          {project.location}
                        </span>
                      </div>
                      <div>
                        <span className="block text-white/80 text-base font-semibold mb-1">
                          Client:
                        </span>
                        <span className="text-white text-sm font-semibold">
                          {project.client}
                        </span>
                      </div>
                    </div>

                    {/* Start & End Date and Status */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-white/80 text-base font-semibold mb-1">
                          Start & End Date:
                        </span>
                        <span className="text-white text-sm font-semibold">
                          {project.startEndDate}
                        </span>
                      </div>
                      <div>
                        <span className="block text-white/80 text-base font-semibold mb-1">
                          Status:
                        </span>
                        <span className="text-white text-sm font-semibold">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
