"use client";

import Image from "next/image";

import { EvenMore } from "./EvenMore";
import { CURRICULUM, DOTPATTERN, MENTORSHIP, PLACEMENT } from "@/assets";


export const WeBest = () => {
  return (
    <main className="bg-[#F6F9FA] pb-[50px] pt-[15px] ">
      <section className="relative overflow-hidden max-w-[1200px] mx-auto">
        {/* Background pattern */}
        <Image
          src={DOTPATTERN}
          alt="dot pattern"
          className="absolute top-0 right-[10px] h-[500px] w-fit opacity-70 z-0 object-cover max-[800px]:hidden"
        />

        <article className="relative z-10 max-w-[1200px] mx-auto">
          <h2 className="text-center text-[#4B5563] max-[1000px]:text-[25px] max-[850px]:text-[22px] max-[600px]:text-[18px] max-[450px]:text-[17px]">
            Why We're the <span className="text-[#00AEFF]">Best Choice</span>
          </h2>
          <p className="text-[#7E7E7E] text-center font-semibold max-[700px]:text-[16px] max-[500px]:text-[13px]">
            Join thousands of successful professionals who choose Ocean Academy to transform 
their careers. Here's why we stand out from the competition.
          </p>

          {/* Cards */}
          <section className="flex justify-center gap-[30px] mt-[50px] flex-wrap">
            {/* Card 1 */}
            <div className="w-[280px] bg-white rounded-[15px] p-[20px]">
              <div className="flex justify-between items-center">
                <Image src={CURRICULUM} alt="curriculam" width={60} height={60} />
                <button
                  type="button"
                  className="border-none bg-[#F6F9FA] p-[10px] text-[12px] px-[15px] rounded-[20px] text-[#737171]"
                >
                  20+ courses
                </button>
              </div>
              <h3 className="text-[18px]">World-class Curriculam</h3>
              <p className="text-[#5C5A5A] text-[14px]">
                Our tech courses are designed by industry experts and updated
                regularly. Learn the latest in Python, Full-Stack Development,
                Data Science, Cloud, and AI.
              </p>
              <ul>
                <li className="text-[#737171] text-[13px]">Real - world projects</li>
                <li className="text-[#737171] text-[13px]">Hands-on learning</li>
                <li className="text-[#737171] text-[13px]">
                  Case studies from leading industries
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="w-[280px] bg-white rounded-[15px] p-[20px]">
              <div className="flex justify-between items-center">
                <Image src={MENTORSHIP} alt="mentorship" width={60} height={60} />
                <button
                  type="button"
                  className="border-none bg-[#F6F9FA] p-[10px] text-[12px] px-[15px] rounded-[20px] text-[#737171]"
                >
                  25+ courses
                </button>
              </div>
              <h3 className="text-[18px]">Expert Mentorship</h3>
              <p className="text-[#5C5A5A] text-[14px]">
                Get 1-on-1 mentorship from industry professionals with years of
                experience in top companies. Our mentors from Puducherry and
                across India guide you at every step of your learning journey.
              </p>
              <ul>
                <li className="text-[#737171] text-[13px]">1-on-1 guidance</li>
                <li className="text-[#737171] text-[13px]">Career counseling</li>
                <li className="text-[#737171] text-[13px]">Interview preparation</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="w-[280px] bg-white rounded-[15px] p-[20px]">
              <div className="flex justify-between items-center">
                <Image src={PLACEMENT} alt="placement" width={60} height={60} />
                <button
                  type="button"
                  className="border-none bg-[#F6F9FA] p-[10px] text-[12px] px-[15px] rounded-[20px] text-[#737171]"
                >
                  90% Success rate
                </button>
              </div>
              <h3 className="text-[18px]">Placement Support</h3>
              <p className="text-[#5C5A5A] text-[14px]">
                With 90%+ placement success, we help learners from Puducherry
                and beyond land jobs in leading IT firms. Our dedicated
                placement team ensures you are job-ready from day one.
              </p>
              <ul>
                <li className="text-[#737171] text-[13px]">Job guarantee</li>
                <li className="text-[#737171] text-[13px]">Resume building</li>
                <li className="text-[#737171] text-[13px]">Network access</li>
              </ul>
            </div>
          </section>
        </article>

        <EvenMore />
      </section>
    </main>
  );
};
