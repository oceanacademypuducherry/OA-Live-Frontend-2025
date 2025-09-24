"use client";
import React, { useState } from "react";
import { CourseCategory, CourseHeroSection } from "./components";
import { Footer, Navbar } from "@/components";

export default function page() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Navbar />
      <CourseHeroSection onSearch={setSearchQuery} />
      <CourseCategory searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}
