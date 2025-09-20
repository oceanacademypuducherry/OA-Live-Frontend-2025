"use client";
import { useEffect, useRef, useState } from "react";
import { AiFillPlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script"; // ✅ for JSON-LD SEO
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
    <section className="bg-gradient-to-t from-[#056f9c] to-[#189bd8] py-[50px] px-[16px] relative overflow-hidden">
      {/* Background Pattern */}
      <img
        src={TOPPATTERN.src}
        alt="dot pattern"
        className="absolute top-0 right-[10px] h-[400px] w-[200px] opacity-70 z-0 object-cover text-[#ffffff]"
      />

      {/* Content Wrapper */}
      <div className="max-w-[1200px] mx-auto flex gap-[40px] items-center justify-center max-[1150px]:flex-col-reverse relative z-10">
        {/* Left Content */}
        <div className="text-white">
          <h1 className="text-[30px] sm:text-[30px] md:text-[36px] font-bold leading-[1.375] text-[#ffffff] max-[1150px]:text-center">
            Transforming Careers <br /> with Future-Ready Skills
          </h1>
          <p className="mt-[16px] text-[13px] sm:text-[16px] max-w-[512px] text-[#ffffff] leading-[2] max-[1150px]:text-center">
            Upgrade your career with industry-recognized online and offline
            courses in Puducherry. Learn from expert mentors, build real-world
            projects, and land your dream job in IT and software development.
          </p>

          {/* Highlights */}
          <div className="flex flex-col text-[14px] sm:text-[16px] text-[#ffffff] max-[1150px]:items-center">
            <div className="flex gap-[15px] mb-2">
              <p className="flex items-center gap-[8px]">
                <img src={STUDENTCOUNT.src} alt="learned students" height={20} width={20} />
                10000+ Students
              </p>
              <p className="flex items-center gap-[8px]">
                <img src={SEMINARS.src} alt="Free seminars" height={20} width={20} />
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
          <button className="mt-[24px] bg-white text-[#00AEFF] px-[24px] py-[8px] rounded-[8px] font-bold hover:bg-[#F3F4F6] transition border-none max-[1150px]:flex max-[1150px]:justify-center">
            Enroll Now
          </button>
        </div>

        {/* Right Content (Video Card) */}
        <section className="relative">
          <div className="relative group w-fit">
            {/* Video */}
            <video
              ref={videoRef}
              className="h-[300px] rounded-[12px]"
              loop={false}
              muted
              poster={OATHUMB.src}
            >
              <source src={REVIEW_VIDEO} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 rounded-[12px] bg-black/40 backdrop-blur-[5px] opacity-0 group-hover:opacity-100 transition duration-300 z-10" />

            {/* Play / Pause Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition duration-300">
              {!isPlaying ? (
                <AiFillPlayCircle
                  className="text-[#ffffff] text-[50px] cursor-pointer"
                  onClick={handlePlay}
                />
              ) : (
                <AiOutlinePauseCircle
                  className="text-[#ffffff] text-[50px] cursor-pointer"
                  onClick={handlePause}
                />
              )}
            </div>
          </div>

          {/* Stats Below Video */}
          <div className="mt-5 flex flex-wrap gap-[15px] justify-start absolute top-[290px] left-[-1px]">
            <div className="flex items-center rounded-[8px] px-[6px] py-2 shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-[#ffffff] h-[60px] w-[120px]">
              <img src={ICON.src} alt="students" className="h-[45px] w-[45px]" />
              <p className="font-semibold">
                <span className="text-black text-[16px]">10k+</span> <br />
                <span className="text-gray-500 text-[13px] font-medium">Students</span>
              </p>
            </div>
            <div className="flex items-center rounded-[8px] px-[6px] py-2 shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-[#ffffff] h-[60px] w-[150px]">
              <img src={ICON.src} alt="students" className="h-[45px] w-[45px]" />
              <p className="font-semibold">
                <span className="text-black text-[16px]">75+</span> <br />
                <span className="text-gray-500 font-medium text-[13px]">Free seminars</span>
              </p>
            </div>
          </div>
        </section>
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
            "addressCountry": "IN",
          },
        })}
      </Script>
    </section>
  );
};
