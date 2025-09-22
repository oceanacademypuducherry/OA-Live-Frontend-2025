"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Course, coursesdata } from "../data/courseData";
import {
  AiTools,
  CourseDetail,
  CourseHeader,
  CourseSidebar,
  DetailedCourseCta,
  GeneralTools,
  ReviewSection,
} from "../components";
import { Footer } from "@/components";

const CourseDetailPage = () => {
  const params = useParams();
  const id = params?.id as string;

  const course: Course | undefined = coursesdata.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center text-lg sm:text-xl text-gray-700">
        Course not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Back Button */}
      <CourseHeader />

      {/* Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8 mt-2">
          <CourseDetail course={course} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <CourseSidebar course={course} />
        </div>
      </div>

      {/* Tools Sections */}
      <GeneralTools />
      <AiTools />
      <div>
        <ReviewSection />
      </div>
      <div className="mt-8">
        <DetailedCourseCta />
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetailPage;
