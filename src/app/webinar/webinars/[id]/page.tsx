// src/app/webinar/webinars/[id]/page.tsx
"use client"; // required because we’re using hooks

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // ✅ App Router way
import { mockWebinars } from "../../data/webinarData";
import {
  AgendaSection,
  BenefitsSection,
  DetailedWebinarHeader,
  HeroSection,
  InstructorSection,
  RegistrationSidebar,
} from "../../components";

const SingleWebinar = () => {
  const { id } = useParams<{ id: string }>(); // ✅ get dynamic param

  const [isRegistered, setIsRegistered] = useState(false);
  const [webinar, setWebinar] = useState<(typeof mockWebinars)[0] | null>(null);

  useEffect(() => {
    if (!id) return;
    const foundWebinar = mockWebinars.find((w) => w.id === id) || null;
    setWebinar(foundWebinar);
  }, [id]);

  if (!webinar) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">
          Webinar not found 🚫
        </h2>
      </div>
    );
  }

  const targetDate = new Date(`${webinar.date} ${webinar.time}`).getTime();

  return (
    <main>
      <DetailedWebinarHeader />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <HeroSection webinar={webinar} targetDate={targetDate} />

        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-10 md:space-y-12">
              <BenefitsSection benefits={webinar.benefits} />
              <AgendaSection agenda={webinar.agenda} />
              <InstructorSection instructors={webinar.instructors} />
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1">
              <RegistrationSidebar
                webinarTitle={webinar.title}
                isRegistered={isRegistered}
                onRegister={() => setIsRegistered(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleWebinar;
