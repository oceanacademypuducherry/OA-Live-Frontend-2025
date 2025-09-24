"use client";

import React from "react";

export const CourseCardSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse group bg-white rounded-2xl shadow-sm transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Top Section */}
      <div className="relative h-40 bg-gray-200 rounded-t-2xl flex justify-between items-start px-6 py-4">
        {/* Left Side */}
        <div className="flex flex-col items-start space-y-4 gap-10 w-full">
          <div className="bg-gray-300 rounded-full px-3 py-1 w-24 h-4"></div>

          <div className="flex items-center gap-3">
            <div className="sm:w-10 sm:h-10 w-7 h-7 bg-gray-300 rounded-lg"></div>
            <div className="sm:w-10 sm:h-10 w-7 h-7 bg-gray-300 rounded-lg"></div>
            <div className="sm:w-10 sm:h-10 w-7 h-7 bg-gray-300 rounded-lg"></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-end justify-between h-full">
          <div className="bg-gray-300 rounded-full w-16 h-4 mt-1"></div>

          <div className="text-right py-1 space-y-2">
            <div className="bg-gray-300 h-4 w-32 rounded"></div>
            <div className="bg-gray-300 h-3 w-24 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Description */}
        <div className="bg-gray-200 h-3 w-full rounded"></div>
        <div className="bg-gray-200 h-3 w-full rounded"></div>
        <div className="bg-gray-200 h-3 w-3/4 rounded"></div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          <div className="bg-gray-300 h-6 w-16 rounded-full"></div>
          <div className="bg-gray-300 h-6 w-16 rounded-full"></div>
          <div className="bg-gray-300 h-6 w-16 rounded-full"></div>
        </div>

        {/* Duration & Students */}
        <div className="flex items-center justify-between">
          <div className="bg-gray-300 h-4 w-20 rounded"></div>
          <div className="bg-gray-300 h-4 w-16 rounded"></div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="bg-gray-300 h-6 w-16 rounded"></div>
            <div className="bg-gray-300 h-4 w-12 rounded"></div>
          </div>
          <div className="bg-gray-300 h-4 w-12 rounded-full"></div>
        </div>

        {/* Button */}
        <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
      </div>
    </div>
  );
};
