"use client";

import React from "react";
import { Award, Clock, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Course } from "../data/courseData";
import { getTechIcon } from "../data/helper";

interface CourseCardProps {
  course: Course;
  onViewDetails?: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/courses/${course.id}`);
  };

  // Helper to calculate original price
  const calculateOriginalPrice = (price?: number, discount?: number) => {
    if (!price || !discount) return price ?? 0;
    return Math.round((price * 100) / (100 - discount));
  };

  // Helper to safely format numbers on client
  const formatNumber = (num?: number) =>
    typeof window !== "undefined" && num != null
      ? num.toLocaleString()
      : num ?? 0;

  return (
    <div
      key={course.courseId}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Top Section */}
      <div className="relative h-40 bg-gradient-to-br from-[#00AEFF] to-[#034E72] rounded-t-2xl flex justify-between items-start px-6 py-4">
        {/* Left Side */}
        <div className="flex flex-col items-start space-y-4 gap-10">
          {/* Certification Program Badge */}
          <div className="bg-white rounded-full px-3 py-1 text-[7px] sm:text-[10px] font-medium text-[#034E72]">
            Certification Program
          </div>

          {/* Tech Icons */}
          {/* Tech Icons in Header */}
          {course.technologies && course.technologies.length > 0 && (
            <div className="flex items-center gap-3">
              {course.technologies.slice(0, 3).map((tech) => (
                <div
                  key={tech}
                  className="sm:w-10 sm:h-10 w-7 h-7 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                >
                  <div className="text-[10px] sm:text-[16px] md:text-[24px]">
                    {getTechIcon(tech)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-end justify-between h-full">
          {/* Certified Badge */}
          <div className="bg-[#FACC15] rounded-full px-3 py-1 flex items-center gap-1">
            <Award className="w-3 h-3 text-[#5D330F]" />
            <span className="text-[#5D330F] text-xs font-bold">Certified</span>
          </div>

          {/* Title + Subtitle */}
          <div className="text-right py-1">
            <h3 className="text-white text-md font-bold leading-tight">
              {course.courseName}
            </h3>
            <h4 className="text-white text-sm mt-1">Certification Training</h4>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Description */}
        <h3 className="text-gray-800 text-md font-bold mb-2 group-hover:text-[#034E72]">
          {course.courseName}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {course.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <p className="text-md text-gray-800 mb-2 font-semibold group-hover:text-[#034E72]">
            Technologies Covered
          </p>
          <div className="flex flex-wrap gap-2">
            {course.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="bg-[#00AEFF]/10 text-[#00AEFF] hover:bg-sky-500 hover:text-white px-2 py-2 font-medium rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
            {course.technologies.length > 3 && (
              <span className="bg-gray-100 text-gray-600 hover:bg-gray-300 hover:text-gray-700 text-xs p-2 rounded-full font-medium">
                +{course.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Duration & Students */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration ?? 0} Months</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{course.studentCount}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ₹{formatNumber(course.price)}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ₹
              {formatNumber(
                calculateOriginalPrice(course.price, course.discountPercentage)
              )}
            </span>
          </div>
          <div className="bg-[#00AEFF]/10 text-[#00AEFF] px-2 py-1 rounded-full text-xs font-medium">
            {course.discountPercentage ?? 0}% OFF
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleViewDetails}
          className="w-full bg-[#00AEFF] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#034E72] transition-colors group-hover:shadow-lg group-hover:shadow-blue-500/25"
        >
          View Details
        </button>
      </div>
    </div>
  );
};
