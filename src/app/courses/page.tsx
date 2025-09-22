import React from "react";
import { CourseCategory, CourseHeroSection } from "./components";
import { Footer, Navbar } from "@/components";

export default function page() {
  return (
    <div>
      <Navbar />
      <CourseHeroSection />
      <CourseCategory />
      <Footer />
    </div>
  );
}
