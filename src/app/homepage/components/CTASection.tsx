"use client";
import React from "react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 px-6 text-center bg-blue-50">
      <h3 className="text-2xl md:text-3xl font-semibold">
        Ready to join the{" "}
        <span className="bg-gradient-to-r from-[#0E90CF] to-[#034E72] bg-clip-text text-transparent">
          Success stories?
        </span>
      </h3>
      <p className="text-md font-medium sm:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
        Transform your career with Ocean academy’s industry leading courses.
        Start your journey to working with your dream company today.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Primary CTA */}
        <Link
          href="/courses"
          className="w-[200px] text-center font-semibold bg-gradient-to-r from-[#0E90CF] via-[#0E90CF] to-[#034E72] bg-[length:200%_100%] bg-left hover:bg-right text-white px-6 py-3 rounded-full shadow transition-all duration-500"
        >
          Start Your Journey
        </Link>

        {/* Secondary CTA → Navigate to Review Page */}
        <Link
          href="/review"
          className="w-[220px] text-center font-medium border border-gray-800 text-gray-600 px-2 sm:px-6 py-2 sm:py-3 rounded-full shadow-md transition-all duration-300 hover:bg-[#00AEFF] hover:border-none hover:text-white hover:shadow-lg hover:scale-105"
        >
          View Success Stories
        </Link>
      </div>
    </section>
  );
}
