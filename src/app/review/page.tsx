import React from "react";
import {
  GoogleReviews,
  HeroSection,
  ReviewCTA,
  VideoTestimonialsSection,
} from "./components";
import { Navbar } from "@/components";

export default function page() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <VideoTestimonialsSection />
      <GoogleReviews />
      <ReviewCTA />
    </div>
  );
}
