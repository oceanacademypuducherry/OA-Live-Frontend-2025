"use client";

import { CK, MIT, PU, SMVC } from "@/assets";
import Image from "next/image";
import Script from "next/script";

export const Awards = () => {
  const awardsData = [
    {
      id: 1,
      img: SMVC,
      alt: "Award recognition from Manakula Vinayagar Institute of Technology",
      text: "Manakula Vinayagar \nInstitute of Technology",
    },
    {
      id: 2,
      img: PU,
      alt: "Award recognition from Pondicherry University",
      text: "Pondicherry \nUniversity",
    },
    {
      id: 3,
      img: MIT,
      alt: "Award recognition from MIT College of Engineering",
      text: "MIT College \nof Engineering",
    },
    {
      id: 4,
      img: CK,
      alt: "Award recognition from Christ King College",
      text: "Christ King \nCollege",
    },
  ];

  // 🔹 JSON-LD Structured Data for SEO
  const awardsJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ocean Academy",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/logo.png",
    "award": awardsData.map((award) => award.text.replace("\n", " ")), // array of recognitions
  };

  return (
    <section className="bg-[#F0F8FF] py-[50px]">
      <main className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-[#0E90CF] text-[20px] sm:text-title font-normal">
          Awards & Recognition
        </h2>
        <p className="text-secondary max-[700px]:text-[16px] max-[500px]:text-[14px]">
          We are proud to be recognized by leading institutions for our
          excellence and reputation.
        </p>

        {/* Awards Grid */}
        <div className="flex flex-wrap justify-center gap-[30px] mt-[30px] p-4">
          {awardsData.map((award) => (
            <article
              key={award.id}
              className="bg-white w-[180px] flex flex-col items-center rounded-[10px] p-6 shadow-sm"
              itemScope
              itemType="https://schema.org/Award"
            >
              <p className="text-[13px] font-[600]">Recognized by</p>
              <Image
                src={award.img}
                alt={award.alt}
                height={100}
                width={100}
                className="object-contain"
                itemProp="image"
              />
              <p
                className="text-[11px] font-[500] text-center whitespace-pre-line mt-3"
                itemProp="name"
              >
                {award.text}
              </p>
            </article>
          ))}
        </div>
      </main>

      {/* ✅ Inject JSON-LD for SEO */}
      <Script
        id="awards-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(awardsJsonLd) }}
      />
    </section>
  );
};
