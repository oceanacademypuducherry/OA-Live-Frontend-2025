"use client";

import { CK, MIT, PU, SMVC } from "@/assets";
import Image from "next/image";


export const Awards = () => {
  const awardsData = [
    {
      id: 1,
      img: SMVC,
      alt: "awards SMVEC",
      text: "Manakula Vinayagar \nInstitute of Technology",
    },
    {
      id: 2,
      img: PU,
      alt: "awards PU",
      text: "Pondicherry \nUniversity",
    },
    {
      id: 3,
      img: MIT,
      alt: "awards MIT",
      text: "MIT College \nof Engineering",
    },
    {
      id: 4,
      img: CK,
      alt: "awards CK",
      text: "Christ King \nCollege",
    },
  ];

  return (
    <main className="mt-[50px] bg-[#F0F8FF] pt-[20px]">
      <h2 className="text-[#4B5563] text-center max-[1000px]:text-[25px] max-[850px]:text-[22px] max-[600px]:text-[18px] max-[450px]:text-[17px]">
        Awards & Recognition
      </h2>
      <p className="text-[#7E7E7E] text-center max-[700px]:text-[16px] max-[500px]:text-[14px]">
        We have been recognized by the following for our reputation.
      </p>

      <section className="max-w-[1200px] mx-auto flex gap-[30px] justify-center mt-[30px] mb-5 max-[900px]:flex-wrap">
        {awardsData.map((award) => (
          <div
            key={award.id}
            className="bg-white w-[180px] flex flex-col items-center rounded-[10px] p-3"
          >
            <p className="text-[13px] font-[600]">Recognized by</p>
            <Image
              src={award.img}
              alt={award.alt}
              height={100}
              width={100}
              className="object-contain"
            />
            <p className="text-[11px] font-[500] text-center whitespace-pre-line">
              {award.text}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};
