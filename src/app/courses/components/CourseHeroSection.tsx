"use client";
import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";

interface CourseHeroSectionProps {
  onSearch: (value: string) => void;
}

export function CourseHeroSection({ onSearch }: CourseHeroSectionProps) {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);
    return () => clearTimeout(handler);
  }, [inputValue]);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <section className="bg-gradient-to-r from-[#034E72] to-[#00AEFF] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Master Your Skills with Expert-Led Courses
          </h1>
          <p className="text-base sm:text-md lg:text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of students learning cutting-edge technologies from
            industry experts. Build real projects and advance your career.
          </p>

          {/* Search Bar */}
          <div className="max-w-lg sm:max-w-xl mx-auto relative">
            <div className="relative bg-white rounded-xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for courses, technologies, or topics..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full pl-12 pr-4 py-2 sm:py-4 rounded-xl text-gray-900 text-[14px] sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
