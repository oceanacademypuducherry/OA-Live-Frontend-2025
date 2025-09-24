"use client";

import Image from "next/image";
import Script from "next/script";
import { EvenMore } from "./EvenMore";
import { CURRICULUM, DOTPATTERN, MENTORSHIP, PLACEMENT } from "@/assets";

export const WeBest = () => {
  // JSON-LD Structured Data (Educational Organization + Courses)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ocean Academy",
    "url": "https://oceanacademy.in",
    "logo": "https://oceanacademy.in/logo.png",
    "description":
      "Ocean Academy offers world-class training in Python, Full-Stack Development, Data Science, Cloud, and AI with expert mentorship and 90%+ placement success.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Puducherry",
      "addressCountry": "India",
    },
    "course": [
      {
        "@type": "Course",
        "name": "Full Stack Development",
        "description":
          "Learn MERN/MEAN stack development with real-world projects and placement support.",
        "provider": { "@type": "EducationalOrganization", "name": "Ocean Academy" },
      },
      {
        "@type": "Course",
        "name": "Data Science & AI",
        "description":
          "Master Python, Machine Learning, and Artificial Intelligence with industry mentors.",
        "provider": { "@type": "EducationalOrganization", "name": "Ocean Academy" },
      },
      {
        "@type": "Course",
        "name": "Cloud Computing",
        "description":
          "Hands-on training in AWS, Azure, and DevOps tools with certification support.",
        "provider": { "@type": "EducationalOrganization", "name": "Ocean Academy" },
      },
    ],
  };

  return (
    <main className="bg-[#F6F9FA] pb-[50px] sm:pt-[55px] pt-[25px]">
      {/* ✅ JSON-LD SEO Script */}
      <Script
        id="we-best-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section
        className="relative overflow-hidden max-w-[1200px] mx-auto"
        aria-labelledby="we-best-heading"
      >
        {/* Background pattern */}
        <Image
          src={DOTPATTERN}
          alt="decorative dot pattern background"
          className="absolute top-0 right-[10px] h-[500px] w-fit opacity-70 z-0 object-cover max-[800px]:hidden"
        />

        <article className="relative z-10 max-w-[1200px] mx-auto">
          <h2
            id="we-best-heading"
            className="text-center text-[#4B5563] text-[20px] sm:text-title font-normal"
          >
            Why We're the <span className="text-primary">Best Choice</span>
          </h2>
          <p className="text-secondary text-center text-[14px] sm:text-[16px] mt-2 max-w-[700px] mx-auto leading-6">
            Join thousands of successful professionals who choose Ocean Academy
            to transform their careers. Here's why we stand out from the
            competition.
          </p>

          {/* Cards */}
          <section className="flex justify-center gap-[30px]  mt-[50px] flex-wrap">
            {/* Card 1 */}
            <article
              className="w-[280px] bg-white rounded-[15px] p-[31px]"
              aria-labelledby="curriculum-title"
            >
              <div className="flex justify-between items-center">
                <Image
                  src={CURRICULUM}
                  alt="World-class curriculum icon"
                  width={60}
                  height={60}
                />
                <span className="bg-[#F6F9FA] p-[10px] text-[12px] px-[15px] rounded-[20px] text-[#737171]">
                  20+ courses
                </span>
              </div>
              <h3 id="curriculum-title" className="text-[18px] text-[#000000] font-medium mt-2">
                World-class Curriculum
              </h3>
              <p className="text-[#5C5A5A] text-[14px] leading-6 mt-2">
                Our tech courses are designed by industry experts and updated
                regularly.
              </p>
              <ul className="list-disc pl-7 mt-2 space-y-1">
                <li className="text-secondary text-[13px]">Real-world projects</li>
                <li className="text-secondary text-[13px]">Hands-on learning</li>
                <li className="text-secondary text-[13px]">
                  Case studies from leading industries
                </li>
              </ul>
            </article>

            {/* Card 2 */}
            <article
              className="w-[280px] bg-white rounded-[15px] p-[31px]"
              aria-labelledby="mentorship-title"
            >
              <div className="flex justify-between items-center">
                <Image
                  src={MENTORSHIP}
                  alt="Expert mentorship icon"
                  width={60}
                  height={60}
                />
                <span className="bg-[#F6F9FA] p-[10px] text-[12px] px-[15px] rounded-[20px] text-secondary">
                  25+ mentors
                </span>
              </div>
              <h3 id="mentorship-title" className="text-[18px] text-[#000000] font-medium mt-2">
                Expert Mentorship
              </h3>
              <p className="text-[#5C5A5A] text-[14px] leading-6 mt-2">
                Get 1-on-1 mentorship from industry professionals with years of
                experience.
              </p>
              <ul className="list-disc pl-7 mt-2 space-y-1">
                <li className="text-secondary text-[13px]">1-on-1 guidance</li>
                <li className="text-secondary text-[13px]">Career counseling</li>
                <li className="text-secondary text-[13px]">Interview preparation</li>
              </ul>
            </article>

            {/* Card 3 */}
            <article
              className="w-[280px] bg-white rounded-[15px] p-[31px]"
              aria-labelledby="placement-title"
            >
              <div className="flex justify-between items-center">
                <Image
                  src={PLACEMENT}
                  alt="Placement support icon"
                  width={60}
                  height={60}
                />
                <span className="bg-[#F6F9FA] p-[10px] text-[12px] px-[15px] rounded-[20px] text-secondary">
                  90% Success rate
                </span>
              </div>
              <h3 id="placement-title" className="text-[18px] text-[#000000] font-medium mt-2">
                Placement Support
              </h3>
              <p className="text-[#5C5A5A] text-[14px] leading-6 mt-2">
                With 90%+ placement success, we help learners land jobs in top IT
                firms.
              </p>
              <ul className="list-disc  pl-7 mt-2 space-y-1 ">
                <li className="text-secondary text-[13px]">Job guarantee</li>
                <li className="text-secondary text-[13px]">Resume building</li>
                <li className="text-secondary text-[13px]">Network access</li>
              </ul>
            </article>
          </section>
        </article>

        <EvenMore />
      </section>
    </main>
  );
};
