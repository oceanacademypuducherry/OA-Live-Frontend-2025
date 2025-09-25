"use client";
import { useEffect, useRef, useState } from "react";
import { AiFillPlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";
import {
  CAREERGUIDANCE,
  ICON,
  OATHUMB,
  REVIEW_VIDEO,
  SEMINARS,
  STUDENTCOUNT,
  TOPPATTERN,
  WORKSHOP,
} from "@/assets";

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Playback prevented:", err));
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="bg-gradient-to-t from-[#056f9c] to-[#189bd8] sm:py-[30px] lg:py-[40px] 2xl:py-[40px] py-[20px] px-[6px] md:px-[50px] relative overflow-hidden">
      {/* Background Pattern */}
      <img
        src={TOPPATTERN.src}
        alt="dot pattern"
        className="absolute top-0 right-[10px] h-[400px] w-[200px] opacity-70 z-0 object-cover"
      />

      {/* Content Wrapper */}
      <div className="max-w-[1700px] mx-auto flex flex-col xl:flex-row items-center justify-center gap-0 md:gap-[20px] xl:gap-[60px] relative z-10">

        {/* Left Content (Text) */}
        <div className="text-white xl:text-left  text-center xl:max-w-[40%] max-w-full order-2 xl:order-1">
          <h1 className="text-[26px] md:text-[38px] font-semibold leading-[1.375] mt-5 md:mt-0 sm:mt-5">
            Transforming Careers <br /> with Future-Ready Skills
          </h1>
          <p className="mt-[16px] text-[15px] sm:text-[18px] max-w-[512px] md:max-w-[712px] mx-auto leading-[2]">
            Upgrade your career with industry-recognized online and offline
            courses in Puducherry. Learn from expert mentors, build real-world
            projects, and land your dream job in IT and software development.
          </p>

          {/* Highlights */}
          <div className="flex flex-col text-[15px] sm:text-[16px] mt-6 xl:items-start items-center">
            <div className="flex gap-[15px] mb-2">
              <p className="flex items-center gap-[8px]">
                <img src={STUDENTCOUNT.src} alt="learned students" height={20} width={20} />
                10000+ Students
              </p>
              <p className="flex items-center gap-[8px]">
                <img src={SEMINARS.src} alt="Free seminars" height={18} width={18} />
                75+ Free seminars
              </p>
            </div>
            <div className="flex gap-[15px]">
              <p className="flex items-center gap-[8px]">
                <img src={WORKSHOP.src} alt="International Workshop" height={20} width={20} />
                6 International Workshop
              </p>
              <p className="flex items-center gap-[8px]">
                <img src={CAREERGUIDANCE.src} alt="Career guidance" height={20} width={20} />
                Career guidance
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-[24px] flex sm:justify-center xl:justify-start justify-center">
            <button className="bg-white text-primary px-[28px] py-[12px] rounded-[8px] font-bold hover:bg-[#F3F4F6] transition">
              Enroll Now
            </button>
          </div>
        </div>

        {/* Right Content (Video + Cards) */}
        <div className="flex flex-col items-center order-1 xl:order-2 w-full xl:w-auto mt-8 xl:mt-0">
          <div className="relative group w-fit rounded-[12px] overflow-hidden">
  <video
    ref={videoRef}
    className="h-[220px] sm:h-[300px] md:h-[350px] lg:h-[330px] w-full object-cover"
    muted
    playsInline
    preload="metadata"
    controls={false}
    poster={OATHUMB.src}
  >
    <source src={REVIEW_VIDEO} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="absolute inset-0 bg-black/40 backdrop-blur-[5px] opacity-0 group-hover:opacity-100 transition duration-300 z-10" />

  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
    {!isPlaying ? (
      <AiFillPlayCircle
        className="text-white text-[60px] cursor-pointer"
        onClick={handlePlay}
      />
    ) : (
      <AiOutlinePauseCircle
        className="text-white text-[60px] cursor-pointer"
        onClick={handlePause}
      />
    )}
  </div>
</div>


          {/* ✅ Cards below the video */}
          <div className="mt-5 flex flex-wrap gap-[15px] justify-center xl:justify-start w-full">
            <div className="flex items-center rounded-[8px] px-[6px] py-2 shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-[#ffffff] h-[60px] w-[120px]">
              <img src={ICON.src} alt="students" className="h-[45px] w-[45px]" />
              <p className="font-semibold text-center">
                <span className="text-black text-[16px]">10k+</span> <br />
                <span className="text-secondary text-[13px] font-medium">Students</span>
              </p>
            </div>

            <div className="flex items-center rounded-[8px] px-[6px] py-2 shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-[#ffffff] h-[60px] w-[150px]">
              <img src={ICON.src} alt="students" className="h-[45px] w-[45px]" />
              <p className="font-semibold text-start">
                <span className="text-black text-[16px]">75+</span> <br />
                <span className="text-secondary font-medium text-[13px]">Free seminars</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ JSON-LD SEO Structured Data */}
      <Script id="seo-organization" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Ocean Academy",
          "url": "https://oceanacademy.in",
          "logo": "https://oceanacademy.in/logo.png",
          "sameAs": [
            "https://www.facebook.com/oceanacademy",
            "https://www.linkedin.com/company/oceanacademy",
            "https://www.instagram.com/oceanacademy"
          ],
          "description":
            "Ocean Academy offers IT training courses in Puducherry. Learn MERN, Full Stack, Frontend, Backend, and more from expert mentors.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Puducherry Main Road",
            "addressLocality": "Puducherry",
            "addressRegion": "PY",
            "postalCode": "605001",
            "addressCountry": "IN"
          }
        })}
      </Script>
    </section>
  );
};
