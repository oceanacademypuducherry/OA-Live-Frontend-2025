// app/webinar/components/WebinarHomeComponent.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { AdSection } from "./AdSection";
import { FeaturedWebinarSection } from "./FeaturedWebinarSection";

import { mockWebinars } from "../data/webinarData";
import { adData } from "../data/adData";

export const WebinarHomeComponent: React.FC = () => {
  const router = useRouter();

  // Featured webinar
  const featuredWebinar = mockWebinars.find((w) => w.featured);

  const goToSingleWebinar = (webinarId: string) => {
    // ✅ Correct path: /webinars/[id]
    router.push(`/webinars/${webinarId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {featuredWebinar && <AdSection data={adData} id={featuredWebinar.id} />}

      {/* Featured Webinar */}
      {featuredWebinar && (
        <FeaturedWebinarSection
          webinar={featuredWebinar}
          onRegister={() => goToSingleWebinar(featuredWebinar.id)}
        />
      )}
    </div>
  );
};
