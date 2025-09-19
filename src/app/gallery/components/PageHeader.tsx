"use client";

import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  showBackButton = false,
  onBack,
}) => {
  return (
    <header
      className={`relative flex flex-col items-center justify-center text-gray-700 ${
        showBackButton ? "pt-12 sm:pt-6" : "py-6"
      }`}
    >
      {showBackButton && (
        <button
          onClick={onBack}
          className="absolute left-2 top-2 sm:left-4 sm:top-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00AEFF] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
      )}
      <div className="text-center px-4">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">{title}</h1>
      </div>
    </header>
  );
};
