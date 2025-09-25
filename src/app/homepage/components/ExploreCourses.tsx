"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { CourseOptions } from "./CourseOption";
import { MERNSTACK, NEXTBTN, PREVIOUSBTN, TIMEDURATION } from "@/assets";

export const ExploreCourses = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollAmount = 300;

  const handleScroll = (direction: "next" | "prev") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const newScroll =
      direction === "next"
        ? container.scrollLeft + scrollAmount
        : container.scrollLeft - scrollAmount;

    container.scrollTo({ left: newScroll, behavior: "smooth" });
    setTimeout(updateScrollButtons, 200);
  };

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const threshold = 5;

    setCanScrollPrev(scrollLeft > threshold);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - threshold);
  };

  useEffect(() => {
    updateScrollButtons();
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const courses = [
    { id: 1, title: "Mernstack development" },
    { id: 2, title: "Mernstack development" },
    { id: 3, title: "Mernstack development" },
    { id: 4, title: "Mernstack development" },
    { id: 5, title: "Mernstack development" },
  ];

  return (
    <main className="mt-[30px] max-w-[1200px] mx-auto px-4">
      {/* Course options */}
      <CourseOptions />

      {/* Carousel section */}
      <section className="relative mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col items-center">
        {/* Prev Button (only visible on >=1536px at the left side) */}
        <button
          onClick={() => handleScroll("prev")}
          disabled={!canScrollPrev}
          className={`hidden 2xl:flex absolute top-1/2 left-[-72] -translate-y-1/2 z-10
            w-14 h-14 rounded-full items-center justify-center transition hover:scale-105 hover:shadow-lg
            ${!canScrollPrev ? "opacity-30 cursor-not-allowed" : "opacity-100"}`}
        >
          <Image src={PREVIOUSBTN} alt="Previous" width={80} height={80} />
        </button>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 md:gap-12 scroll-smooth overflow-x-auto md:overflow-x-hidden
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 md:scrollbar-none p-6 w-full "
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="w-[300px] sm:w-[300px] md:w-[300px] lg:w-[320px] xl:w-[320px]
              bg-white rounded-[12px] border-[3px] border-transparent overflow-hidden
              shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex-shrink-0
              transition-all duration-300
              hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]
              hover:scale-[1.02]
              hover:z-10"
            >
              <Image
                src={MERNSTACK}
                alt="Course"
                className="w-full h-[170px] lg:h-[170px] object-contain"
              />
              <div className="p-3 sm:p-4 ">
                <p className="block md:hidden px-2 py-1 mb-2 bg-[#0E90CF] text-white rounded-[6px] text-[12px] font-semibold w-fit leading-5">
                  Beginner to advanced
                </p>
                <h3 className="text-[15px] sm:text-[16px] font-semibold mb-2 leading-snug">
                  {course.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#939191] leading-6 mb-2">
                  The MERN stack is a popular technology stack used for building
                  web applications. It consists of nodejs, mongodb, express...
                </p>
                <div className="flex flex-wrap gap-2 mb-4 mt-4">
                  <span className="px-2 py-1 bg-[#d4f1ff] text-[#0E90CF] text-[12px] rounded-[8px] font-semibold leading-5">
                    React js
                  </span>
                  <span className="px-2 py-1 bg-[#d4f1ff] text-[#0E90CF] text-[12px] rounded-[8px] font-semibold leading-5">
                    Node js
                  </span>
                  <span className="px-2 py-1 bg-[#d4f1ff] text-[#0E90CF] text-[12px] rounded-[8px] font-semibold leading-5">
                    Mongo DB
                  </span>
                </div>
                <div className="flex items-center justify-between text-[12px] text-gray-500 mb-4 leading-5">
                  <p className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-[6px]">
                    <Image src={TIMEDURATION} alt="time" width={16} height={16} />
                    6 months
                  </p>
                  <p className="hidden md:block px-2 py-1 bg-[#F3F3F4] text-[#695F5F] rounded-[6px] leading-5">
                    Beginner to advanced
                  </p>
                </div>
                <div className="flex items-center justify-between leading-6">
                  <p className="text-[18px] sm:text-[20px] bg-gradient-to-r from-[#00AEFF] to-[#006899] bg-clip-text text-transparent font-semibold">
                    ₹ 32000
                  </p>
                  <button className="bg-gradient-to-r from-[#00AEFF] to-[#006899] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-[8px] text-[13px] sm:text-[14px] font-semibold flex items-center gap-1.5 hover:opacity-90 transition">
                    Enroll →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button (only visible on >=1536px at the right side) */}
        <button
          onClick={() => handleScroll("next")}
          disabled={!canScrollNext}
          className={`hidden 2xl:flex absolute top-1/2 right-[-72] -translate-y-1/2 z-10
            w-14 h-14 rounded-full items-center justify-center transition hover:scale-105 hover:shadow-lg
            ${!canScrollNext ? "opacity-30 cursor-not-allowed" : "opacity-100"}`}
        >
          <Image src={NEXTBTN} alt="Next" width={80} height={80} />
        </button>

        {/* Buttons below cards for <1536px (tablet + mobile) */}
        <div className="w-full flex justify-center gap-6 mt-6  2xl:hidden max-sm:hidden">
          <button
            onClick={() => handleScroll("prev")}
            disabled={!canScrollPrev}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition hover:scale-105 hover:shadow-lg
              ${!canScrollPrev ? "opacity-30 cursor-not-allowed" : "opacity-100"}`}
          >
            <Image src={PREVIOUSBTN} alt="Previous" width={60} height={60} />
          </button>
          <button
            onClick={() => handleScroll("next")}
            disabled={!canScrollNext}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition hover:scale-105 hover:shadow-lg
              ${!canScrollNext ? "opacity-30 cursor-not-allowed" : "opacity-100"}`}
          >
            <Image src={NEXTBTN} alt="Next" width={60} height={60} />
          </button>
        </div>
      </section>
    </main>
  );
};
