import type { Metadata } from "next";
import {
  ContactHero,
  ContactInfo,
  MapSection,
  ContactForm,
} from "./components";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Contact Us | Ocean Academy",
  description:
    "Get in touch with Ocean Academy for inquiries about courses, admissions, or services. We're here to help.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <ContactHero />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <ContactInfo />
              <MapSection />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
