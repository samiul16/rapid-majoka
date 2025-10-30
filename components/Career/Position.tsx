import Image from "next/image";
import React from "react";

interface JobPosition {
  id: number;
  title: string;
  description: string;
  jobType: string;
  location: string;
  experience: string;
  deadline: string;
}

const Position = () => {
  const jobPositions: JobPosition[] = [
    {
      id: 1,
      title: "Team Lead Civil Engineer",
      description:
        "We are seeking a Team Lead Civil Engineer to guide our dynamic engineering team. The ideal candidate will possess exceptional leadership abilities, a knack for project management, and innovative thinking in design and construction. Key responsibilities include supervising project execution, ensuring compliance with safety regulations, and fostering a collaborative work environment. Join us to shape the future of infrastructure!",
      jobType: "Full Time",
      location: "Remote",
      experience: "1-5 Years",
      deadline: "14 November 2023",
    },
    {
      id: 2,
      title: "Senior Architecture Engineer",
      description:
        "We are looking for a Senior Architectural Engineer to lead our talented team. The perfect candidate will have strong leadership skills, excellent project management experience, and a creative approach to design. Responsibilities include overseeing project implementation, ensuring safety standards are met, and promoting teamwork. Be part of our mission to innovate in architecture!",
      jobType: "Full Time",
      location: "Remote",
      experience: "1-5 Years",
      deadline: "14 November 2023",
    },
    {
      id: 3,
      title: "Senior Architecture Engineer",
      description:
        "We are looking for a Senior Architectural Engineer to lead our talented team. The perfect candidate will have strong leadership skills, excellent project management experience, and a creative approach to design. Responsibilities include overseeing project implementation, ensuring safety standards are met, and promoting teamwork. Be part of our mission to innovate in architecture!",
      jobType: "Full Time",
      location: "Remote",
      experience: "1-5 Years",
      deadline: "14 November 2023",
    },
    {
      id: 4,
      title: "Team Lead Civil Engineer",
      description:
        "We are seeking a Team Lead Civil Engineer to guide our dynamic engineering team. The ideal candidate will possess exceptional leadership abilities, a knack for project management, and innovative thinking in design and construction. Key responsibilities include supervising project execution, ensuring compliance with safety regulations, and fostering a collaborative work environment. Join us to shape the future of infrastructure!",
      jobType: "Full Time",
      location: "Remote",
      experience: "1-5 Years",
      deadline: "14 November 2023",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Current Open Position
        </h2>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobPositions.map((job) => (
            <div
              key={job.id}
              className="bg-[#EDE8E9] shadow rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              {/* Company Logo/Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center">
                  <Image
                    src="/q.svg"
                    alt="Company Logo"
                    width={50}
                    height={50}
                  />
                </div>
              </div>

              {/* Job Details */}
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {job.description}
                </p>

                {/* Job Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-300">
                    Job Type : {job.jobType}
                  </span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-300">
                    Location : {job.location}
                  </span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-300">
                    Experience : {job.experience}
                  </span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-300">
                    Deadline : {job.deadline}
                  </span>
                </div>
              </div>

              {/* Apply Button */}
              <div className="flex-shrink-0">
                <button className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg cursor-pointer">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Position;
