"use client";

import { GOALS, MISSION, OURVALUES, VISSION } from "@/assets";
import Image from "next/image";

interface PurposeItem {
  title: string;
  desc: string;
  img: any;
  color: string; // accent color for hover
}

const purposes: PurposeItem[] = [
  {
    title: "Our Mission",
    desc: "To empower students with cutting-edge IT skills and practical knowledge. We are dedicated to bridging the gap between academia and industry needs. Our mission is to inspire innovation and prepare learners for successful technology-driven careers.",
    img: MISSION,
    color: "#2563eb", // blue
  },
  {
    title: "Our Vision",
    desc: "To be a leading IT training institute recognized for excellence in education and career development. We envision building a future-ready workforce equipped with advanced technical expertise. Our vision is to create global professionals who contribute to sustainable digital growth.",
    img: VISSION,
    color: "#9333ea", // purple
  },
  {
    title: "Our Goals",
    desc: "To deliver industry-relevant training programs that enhance employability. We aim to continuously upgrade our curriculum in line with evolving technologies. Our goal is to nurture skilled IT professionals who can thrive in competitive environments.",
    img: GOALS,
    color: "#10b981", // green
  },
  {
    title: "Our Values",
    desc: "We uphold integrity, commitment, and lifelong learning in everything we do. Collaboration between students, trainers, and industry partners is at the core of our culture. Our values drive us to create a supportive and inspiring learning environment.",
    img: OURVALUES,
    color: "#f59e0b", // amber
  },
];

export const OurPurpose = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6">
      <h2 className="text-center text-[22px] sm:text-[26px] md:text-[28px] font-bold bg-gradient-to-r from-primary via-primary to-black bg-clip-text text-transparent mb-10">
        Our Purpose
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 2xl:max-w-[1350px] xl:max-w-[1150px] lg:max-w-[950px] md:max-w-[850px] mx-auto relative">
        {purposes.map((item, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl shadow-md transition-all duration-300 p-6 sm:p-8 relative"
            style={{
              border: `2px solid transparent`,
            }}
          >
            {/* Image + Title in same row */}
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={item.img}
                alt={item.title}
                width={48}
                height={48}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
              <h3
                className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-800 transition-colors duration-300"
                style={{
                  ["--hover-color" as any]: item.color,
                }}
              >
                <span className="group-hover:[color:var(--hover-color)] transition-colors">
                  {item.title}
                </span>
              </h3>
            </div>

            {/* Description */}
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
              {item.desc}
            </p>

            {/* Hover effect: lift + front + border color */}
            <style jsx>{`
              .group:hover {
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]
              hover:scale-[1.02]
              hover:z-10
              transition-all duration-300
                border-color: ${item.color};
                box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
              }
            `}</style>
          </div>
        ))}
      </div>
    </section>
  );
};
