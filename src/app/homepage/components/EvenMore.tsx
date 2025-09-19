"use client";

import { CERTIFICATE, COMMUNITY, DOTPATTERN, PROJECT, RIGHTARROW, TIME } from "@/assets";
import Image from "next/image";


export const EvenMore = () => {
  return (
    <main className="bg-[#F6F9FA] relative overflow-hidden">
      {/* Background Pattern */}
      <Image
        src={DOTPATTERN}
        alt="dot pattern"
        className="absolute bottom-[10px] left-0 h-[500px] w-auto opacity-70 z-0 object-cover max-[800px]:hidden"
      />

      <article className="mt-[50px] max-w-[1200px] mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-center text-[#4B5563] max-[1000px]:text-[25px] max-[850px]:text-[22px] max-[600px]:text-[18px] max-[450px]:text-[17px]">
          Plus, You Get
          <span className="text-[#00AEFF]"> Even More</span>
        </h2>

        {/* Cards Section */}
        <section className="flex gap-[20px] justify-center mt-[20px] max-[1000px]:flex-wrap">
          <div className="bg-[#ffffff] w-[200px] flex flex-col items-center p-[15px] rounded-[15px] pt-[20px] pb-[20px]">
            <Image src={TIME} alt="lifetime access" height={40} width={40} />
            <h4 className="font-bold mt-[10px] max-[700px]:text-[14px]">
              Lifetime access
            </h4>
            <p className="mt-[-20px] text-[#4B5563] text-[14px] max-[700px]:text-[12px]">
              Learn at your own pace
            </p>
          </div>

          <div className="bg-[#ffffff] w-[200px] flex flex-col items-center p-[15px] rounded-[15px] pt-[20px] pb-[20px]">
            <Image src={CERTIFICATE} alt="certificate" height={40} width={40} />
            <h4 className="font-bold mt-[10px] max-[700px]:text-[14px]">
              Certificate
            </h4>
            <p className="mt-[-20px] text-[#4B5563] text-[14px] max-[700px]:text-[12px]">
              Industry recognized
            </p>
          </div>

          <div className="bg-[#ffffff] w-[200px] flex flex-col items-center p-[15px] rounded-[15px] pt-[20px] pb-[20px]">
            <Image src={COMMUNITY} alt="community" height={40} width={40} />
            <h4 className="font-bold mt-[10px] max-[700px]:text-[14px]">
              Community
            </h4>
            <p className="mt-[-20px] text-[#4B5563] text-[14px] max-[700px]:text-[12px]">
              3K+ active learners
            </p>
          </div>

          <div className="bg-[#ffffff] w-[200px] flex flex-col items-center p-[15px] rounded-[15px] pt-[20px] pb-[20px]">
            <Image src={PROJECT} alt="project portfolio" height={40} width={40} />
            <h4 className="font-bold mt-[10px] max-[700px]:text-[14px]">
              Project portfolio
            </h4>
            <p className="mt-[-20px] text-[#4B5563] text-[14px] max-[700px]:text-[12px]">
              Build real projects
            </p>
          </div>
        </section>

        {/* Buttons */}
        <section className="flex justify-center mt-[30px] gap-[20px] max-[420px]:flex-wrap">
          <button
            type="button"
            className="flex items-center border-none bg-gradient-to-r from-[#00AEFF] to-[#1DA3E4] p-[10px] text-[#ffffff] px-[25px] rounded-[20px] max-[700px]:text-[11px] max-[600px]:px-[20px] max-[450px]:px-[15px]"
          >
            Start Learning Today
            <Image src={RIGHTARROW} alt="arrow" className="w-[23px] ml-[10px]" />
          </button>

          <button
            type="button"
            className="border border-[#737171] text-[#737171] p-[10px] px-[25px] rounded-[20px] bg-[#ffffff] max-[700px]:text-[11px] max-[600px]:px-[20px] max-[450px]:px-[15px]"
          >
            Schedule Free Consultation
          </button>
        </section>
      </article>
    </main>
  );
};
