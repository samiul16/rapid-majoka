"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const AboutUsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-between">
          {/* Left Content Section */}
          <div
            className="w-full flex flex-col gap-7"
            data-aos="fade-right"
          >
            {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              <span className="text-stone-900">
                Building a Brighter Future: Our Commitment to{" "}
              </span>
              <span className="text-red-900">Construction</span>
              <span className="text-stone-900"> Excellence</span>
            </h2> */}

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-900">
              CEO Message
            </h2>
            <p className="text-justify text-stone-600 text-base sm:text-lg lg:text-3xl font-normal leading-7 sm:leading-8 lg:leading-9">
              At Majoka, our commitment to excellence extends beyond technical
              expertise to encompass exceptional customer service and unwavering
              integrity. When you choose Majoka, you’re choosing a trusted ally
              dedicated to the success of your project and the safety of your
              community
            </p>

            {/* Download Button */}
            {/* <button
              className="mt-4 h-12 sm:h-14 px-6 sm:px-10 py-3 bg-pink-950 rounded-[30px] inline-flex justify-center items-center gap-3 hover:bg-pink-900 transition-colors cursor-pointer w-full sm:w-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="text-indigo-50 text-base sm:text-lg lg:text-xl font-bold leading-loose">
                Download Company Profile
              </span>
              <Download className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-50" />
            </button> */}
          </div>

          {/* Right Image Section */}
          <div
            className="w-full  flex justify-center"
            data-aos="fade-left"
          >
            <div className="w-full max-w-[500px] aspect-square rounded-[20px] overflow-hidden relative">
              <Image
                src="/ceo.jpeg"
                alt="CEO Message"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
