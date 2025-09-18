"use client";


import Image from "next/image";
import { GOALS, MISSION, OURVALUES, VISSION } from "../../assets/img";

// Import images from your assets (or move them into /public)


interface PurposeItem {
  title: string;
  desc: string;
  img: any; // keep "any" if using imported images
}

const purposes: PurposeItem[] = [
  {
    title: "Our Mission",
    desc: "To empower students with cutting-edge IT skills and practical knowledge. We are dedicated to bridging the gap between academia and industry needs. Our mission is to inspire innovation and prepare learners for successful technology-driven careers.",
    img: MISSION,
  },
  {
    title: "Our Vision",
    desc: "To be a leading IT training institute recognized for excellence in education and career development. We envision building a future-ready workforce equipped with advanced technical expertise. Our vision is to create global professionals who contribute to sustainable digital growth.",
    img: VISSION,
  },
  {
    title: "Our Goals",
    desc: "To deliver industry-relevant training programs that enhance employability. We aim to continuously upgrade our curriculum in line with evolving technologies. Our goal is to nurture skilled IT professionals who can thrive in competitive environments.",
    img: GOALS,
  },
  {
    title: "Our Values",
    desc: "We uphold integrity, commitment, and lifelong learning in everything we do. Collaboration between students, trainers, and industry partners is at the core of our culture. Our values drive us to create a supportive and inspiring learning environment.",
    img: OURVALUES,
  },
];

export const OurPurpose = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-[#00AEFF] mb-6">
        Our Purpose
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {purposes.map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow transition-transform hover:scale-[1.02]"
          >
            {/* Image + Title */}
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
              <Image
                src={item.img}
                alt={item.title}
                width={56} // ~14 * 4px
                height={56}
                className="w-10 h-10 sm:w-14 sm:h-14 md:w-14 md:h-14 object-contain rounded-lg"
              />
              <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-800">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-[14px] sm:text-[14px] md:text-[14px] lg:text-[16px] text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};


