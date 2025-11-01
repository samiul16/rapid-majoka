"use client";
import React, { useState } from "react";
import { Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialData {
  id: number;
  name: string;
  title: string;
  image: string;
  testimonial: string;
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out hover:shadow hover:scale-105 hover:-translate-y-2 cursor-pointer group">
      <div className="relative h-[550px] bg-[#98D1EC]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[#333] z-0">
          <Image
            height={800}
            width={800}
            src={testimonial.image}
            alt="Testimonial background"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-l from-pink-950/10 to-pink-950" />

        {/* Content */}
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl mt-4 font-medium text-[#E9F5FB]">
              {testimonial.title}
            </h3>
            <Image
              height={800}
              width={800}
              src="/colon.svg"
              alt="Quote icon"
              className="w-7 h-7 object-cover"
            />
          </div>

          <p className="text-[#E9F5FB] text-sm md:text-base mb-8 mt-10">
            {testimonial.testimonial}
          </p>

          <div className="flex items-center mt-auto">
            <div className="w-5 h-[1px] bg-white"></div>
            <span className="ml-2 text-white opacity-90 text-sm">
              {testimonial.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Update cards per view based on screen size
  React.useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(3); // Desktop: 3 cards
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const testimonialsData: TestimonialData[] = [
    {
      id: 1,
      name: "Thomas smith, Francisco ",
      title: "Excellent Service! Car Rent Service",
      image: "/client/1.jpg",
      testimonial:
        "We are impressed by their ability to meet our specific needs and their strong customer service. We appreciated the high level of customer services.",
    },
    {
      id: 2,
      name: "Stella Smith, New York",
      title: "Outstanding Experience! Premium Service",
      image: "/client/2.jpg",
      testimonial:
        "Majoka Engineering delivered exactly what we expected — professional work, timely completion, and great communication from start to finish",
    },
    {
      id: 3,
      name: "Ernest Smith, New York",
      title: "Reliable & Professional Service",
      image: "/client/3.jpg",
      testimonial:
        "Their technical expertise and dedication to quality truly set them apart. Every step of our project was handled with professionalism and care.",
    },
    {
      id: 4,
      name: "David Brown",
      title: "Top Quality Fleet & Service",
      image: "/client/1.jpg",
      testimonial:
        "Exceptional service quality and an impressive fleet of vehicles. The booking process is straightforward, and the customer service team is always available to help. Will definitely use their services again.",
    },
    {
      id: 5,
      name: "Emma Davis",
      title: "Perfect for Business Travel",
      image: "/client/2.jpg",
      testimonial:
        "As a frequent business traveler, I need reliable transportation. This service has never let me down. Professional drivers, clean vehicles, and always on time. Perfect for corporate needs.",
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Luxury Cars, Great Prices",
      image: "/client/3.jpg",
      testimonial:
        "Great selection of luxury vehicles at competitive prices. The staff is knowledgeable and helpful in choosing the right car for your needs. The entire experience from booking to return is smooth and professional.",
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, testimonialsData.length - cardsPerView);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, testimonialsData.length - cardsPerView);
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };
  return (
    <div className="bg-white flex flex-col items-center w-full py-20 gap-16 px-4 md:px-8 lg:px-8">
      <div className="flex flex-col items-center gap-4 max-w-xl mx-auto text-center">
        <span className="text-4xl text-stone-900 font-semibold">
          Client Testimonials
        </span>

        <p className="text-stone-900 text-xl!">
          Discover how we can elevate your experience
        </p>
      </div>

      <div className="relative w-full max-w-[1800px] mx-auto rounded-xl -mt-6">
        <div className="overflow-hidden px-4 py-6 ">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              gap: cardsPerView === 1 ? "0px" : "24px",
            }}
          >
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0"
                style={{
                  width:
                    cardsPerView === 1
                      ? "100%"
                      : cardsPerView === 2
                      ? "calc((100% - 24px) / 2)"
                      : "calc((100% - 48px) / 3)",
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="w-[50px] h-[50px] rounded-full bg-rose-800 hover:bg-rose-800/70 flex items-center justify-center transform cursor-pointer"
          >
            <Image
              src="/arrowL.svg"
              alt="Previous"
              width={24}
              height={24}
              className="w-6 h-6 sm:w-8 sm:h-8 text-white"
            />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="w-[50px] h-[50px] rounded-full bg-rose-800 hover:bg-rose-800/70 flex items-center justify-center transform cursor-pointer"
          >
            <Image
              src="/arrowR.svg"
              alt="Previous"
              width={24}
              height={24}
              className="w-6 h-6 sm:w-8 sm:h-8 text-white"
            />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {Array.from({
            length: Math.max(1, testimonialsData.length - cardsPerView + 1),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out hover:scale-125 active:scale-90 ${
                currentIndex === index
                  ? "bg-[#BC2B2B] shadow-lg scale-110"
                  : isAnimating
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#EAB5B5] hover:bg-[#BC2B2B]/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
