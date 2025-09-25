"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

import { CourseCard } from "./CourseCard";
import { Course } from "../data/courseData"; // type only
import { fetchCourses } from "@/app/api/courseApi";
import { CourseCardSkeleton } from "./CourseCardSkeleton";

interface CourseCategoryProps {
  searchQuery: string;
}

export const CourseCategory: React.FC<CourseCategoryProps> = ({
  searchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // mobile dropdown

  const categories = [
    "All",
    "Most popular",
    "Fullstack",
    "frontend",
    "Backend",
    "Design",
  ];

  // Fetch courses from backend
  useEffect(() => {
    const loadCourses = async () => {
      setLoading(true);
      try {
        const res = await fetchCourses(searchQuery);
        setAllCourses(res || []); // Use the courses array
      } catch (error) {
        console.error("Failed to fetch courses:", error);
        setAllCourses([]);
      }
      setLoading(false);
    };
    loadCourses();
  }, [searchQuery]);

  // Apply category filter
  useEffect(() => {
    let filtered = [...allCourses];

    if (selectedCategory === "Most popular") {
      filtered = filtered.slice(0, 9); // first 9 courses from backend
    } else if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (course) =>
          course.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setCourses(filtered);
  }, [selectedCategory, allCourses]);

  const skeletonCount = 6;

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Buttons */}
        <div className="hidden sm:flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-[#00AEFF] text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="relative sm:hidden mb-6 w-full max-w-xs mx-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center px-4 py-3 bg-[#00AEFF] text-white rounded-lg shadow-sm"
          >
            <span>{selectedCategory}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute z-10 w-full bg-white  rounded-lg shadow-lg mt-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 ${
                    selectedCategory === category
                      ? "bg-blue-100 text-[#00AEFF] font-medium"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Courses Grid */}
        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: skeletonCount }).map((_, idx) => (
              <CourseCardSkeleton key={idx} />
            ))
          ) : courses.length > 0 ? (
            courses.map((course) => (
              <CourseCard
                key={course.courseId}
                course={course}
                onViewDetails={(course) => console.log("View course:", course)}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No courses available in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
