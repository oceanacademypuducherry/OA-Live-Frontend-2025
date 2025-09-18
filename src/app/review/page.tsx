import React from "react";
import {
  GoogleReviews,
  HeroSection,
  ReviewCTA,
  VideoTestimonialsSection,
} from "./components";

export default function page() {
  return (
    <div>
      <HeroSection />
      <VideoTestimonialsSection />
      <GoogleReviews />
      <ReviewCTA />
    </div>
  );
}
