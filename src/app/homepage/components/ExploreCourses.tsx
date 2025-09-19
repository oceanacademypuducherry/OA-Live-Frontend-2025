"use client";

import Image from "next/image";
import { useRef } from "react";
import { CourseOptions } from "./CourseOption";
import { MERNSTACK, NEXTBTN, PREVIOUSBTN, TIMEDURATION } from "@/assets";



export const ExploreCourses = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "next" | "prev") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "next" ? 300 : -300,
        behavior: "smooth",
      });
    }
  };

  const courses = [
    { id: 1, title: "Mernstack development" },
    { id: 2, title: "Mernstack development" },
    { id: 3, title: "Mernstack development" },
    { id: 4, title: "Mernstack development" },
    { id: 5, title: "Mernstack development" },
  ];

  return (
    <main className="mt-[30px] max-w-[1200px] mx-auto px-4">
      {/* Buttons / Course Options */}
      <CourseOptions />

      {/* Horizontal Scroll Section */}
      <section className="relative mt-6 sm:mt-8 md:mt-10 lg:mt-12">
        <div
          ref={scrollRef}
          className="
            flex gap-4 sm:gap-5 md:gap-6
            scroll-smooth overflow-x-auto md:overflow-x-hidden
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100
            md:scrollbar-none
          "
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="
                w-[220px] sm:w-[240px] md:w-[260px] lg:w-[300px] xl:w-[320px]
                bg-white rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.1)]
                flex-shrink-0
              "
            >
              <Image
                src={MERNSTACK}
                alt="Course"
                className="w-full h-[150px] sm:h-[170px] md:h-[180px] lg:h-[200px] object-cover rounded-t-[12px]"
              />

              {/* Content */}
              <div className="p-3 sm:p-4 bg-[#F9FDFF]">
                {/* Level (mobile only) */}
                <p className="block md:hidden px-2 py-1 mb-2 bg-[#0E90CF] text-white rounded-[6px] text-[12px] font-semibold w-fit">
                  Beginner to advanced
                </p>

                {/* Heading */}
                <h3 className="text-[15px] sm:text-[16px] font-semibold mb-2">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] sm:text-[14px] text-[#939191] leading-[1.5] mb-2">
                  The MERN stack is a popular technology stack used for building
                  web applications. It consists of nodejs, mongodb, express...
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-2 py-1 bg-[#d4f1ff] text-[#0E90CF] text-[12px] rounded-[8px] font-semibold">
                    React js
                  </span>
                  <span className="px-2 py-1 bg-[#d4f1ff] text-[#0E90CF] text-[12px] rounded-[8px] font-semibold">
                    Node js
                  </span>
                  <span className="px-2 py-1 bg-[#d4f1ff] text-[#0E90CF] text-[12px] rounded-[8px] font-semibold">
                    Mongo DB
                  </span>
                </div>

                {/* Duration & Level (desktop only) */}
                <div className="flex items-center justify-between text-[12px] text-gray-500 mb-2">
                  <p className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-[6px]">
                    <Image
                      src={TIMEDURATION}
                      alt="time"
                      width={16}
                      height={16}
                    />
                    6 months
                  </p>
                  <p className="hidden md:block px-2 py-1 bg-[#F3F3F4] text-[#695F5F] rounded-[6px]">
                    Beginner to advanced
                  </p>
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between">
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

        {/* Scroll Buttons → only visible on desktop */}
        <div className="hidden md:flex justify-center mt-6 gap-6">
          <button onClick={() => scroll("prev")}>
            <Image
              src={PREVIOUSBTN}
              alt="Previous"
              width={40}
              height={40}
              className="w-9 h-9 sm:w-10 sm:h-10"
            />
          </button>
          <button onClick={() => scroll("next")}>
            <Image
              src={NEXTBTN}
              alt="Next"
              width={40}
              height={40}
              className="w-9 h-9 sm:w-10 sm:h-10"
            />
          </button>
        </div>
      </section>
    </main>
  );
};
