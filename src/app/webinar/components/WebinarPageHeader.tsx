"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const WebinarPageHeader = () => {
  const router = useRouter();

  return (
    <header className="relative flex flex-col items-center justify-center text-[#034E72]">
      {/* Back Button */}
      <button
        onClick={() => router.back()} // 🔙 go back
        className="absolute left-2 top-0 sm:left-4 sm:top-4
          inline-flex items-center gap-2 px-4 py-2
          rounded-full bg-[#00AEFF] text-white font-semibold
          shadow-md hover:shadow-lg hover:scale-105
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E81A9]
          transition-all duration-300"
      >
        <ArrowLeft size={18} />
        <span className="text-sm sm:text-base">Back</span>
      </button>

      {/* Title */}
      <div className="text-center px-4 mb-10 mt-10 sm:mt-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Browse All Webinars
        </h1>
        <p className="text-gray-500 mt-2">
          Explore upcoming and past sessions across multiple categories
        </p>
      </div>
    </header>
  );
};
