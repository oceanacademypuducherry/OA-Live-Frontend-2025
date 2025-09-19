// src/webinar_components/DetailedWebinarHeader.tsx
"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { LOGO } from "@/assets/webinar";

export const DetailedWebinarHeader: React.FC = () => {
  const router = useRouter();

  return (
    <header className="w-full flex items-center justify-between px-4 py-2 md:px-8 bg-white border-b">
      {/* Back button */}
      <button
        className="flex items-center gap-1 text-[#00AEFF] text-base font-medium"
        onClick={() => router.back()}
      >
        <ArrowLeft size={16} strokeWidth={2} />
        Back
      </button>

      {/* Logo */}
      <div className="h-6 md:h-8 w-[150px] sm:w-[200px]">
        <Image
          src={LOGO}
          alt="Webinar Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </header>
  );
};
