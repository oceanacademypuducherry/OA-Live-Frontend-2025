"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const CourseHeader = () => {
  const router = useRouter();

  return (
    <header className="absolute left-2 top-2 sm:left-4 sm:top-4 z-10">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 px-3 sm:px-4 py-2
                   rounded-full bg-[#00AEFF] text-white font-medium sm:font-semibold
                   shadow-md hover:shadow-lg hover:scale-105
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E81A9]
                   transition-transform duration-300 text-sm sm:text-base"
      >
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>
    </header>
  );
};
