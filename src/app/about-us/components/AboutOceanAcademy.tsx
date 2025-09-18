"use client";

import { ABOUT, EXPERIENCE, STUDENT } from "@/assets";
import Image from "next/image";


// Import images/icons from your assets folder



export const AboutOceanAcademy = () => {
  return (
    <section className="px-4 sm:px-6 xl:py-10 py-6 max-w-[1500px] mx-auto">
      {/* Content + Image */}
      <div className="flex flex-col xl:flex-row gap-6">
        {/* Left Content */}
        <div className="flex-1 mt-1 order-1">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#00AEFF] mb-4">
            About Ocean Academy
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            At Ocean Academy, learning and technology come together to open doors
            for your future. We believe in more than just teaching — we inspire
            innovation. Our programs are designed to help you master the latest
            technologies, gain real-world skills, and prepare for exciting
            opportunities in today’s rapidly evolving digital world. We pride
            ourselves on being more than just an academy — we are a community of
            learners, mentors, and innovators.
          </p>
          <br />
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            As an ISO 9001:2008 certified institution, Ocean Academy is committed
            to delivering the highest standards of education and training. Here,
            you’ll find not just knowledge, but the confidence and skills to go
            beyond limits and achieve your dreams.
          </p>

          {/* Stats Section */}
          <div className="mt-6 flex flex-row items-start sm:items-center gap-4">
            {/* Students trained */}
            <div className="flex items-center gap-2 border border-[#00AEFF] bg-[#E6F6FE] px-1 sm:px-4 py-2 rounded-lg shadow-sm">
              <Image
                src={STUDENT}
                alt="students"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
              <span className="text-[#00AEFF] font-medium text-[10px] sm:text-sm md:text-base">
                10,000+ Students trained
              </span>
            </div>

            {/* Years Experience */}
            <div className="flex items-center gap-2 border border-[#00AEFF] bg-[#E6F6FE] px-3 sm:px-4 py-2 rounded-lg shadow-sm">
              <Image
                src={EXPERIENCE}
                alt="experience"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
              <span className="text-[#00AEFF] font-medium text-[10px] sm:text-sm md:text-base">
                14+ Years Experience
              </span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 order-2 xl:order-2">
          <Image
            src={ABOUT}
            alt="About Ocean Academy"
            className="rounded-lg w-full h-auto object-contain max-w-[450px] md:max-w-[550px] lg:max-w-[550px] xl:max-w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};


