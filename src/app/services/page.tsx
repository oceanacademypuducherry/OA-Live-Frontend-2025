import React from "react";
import { About, CTA, DetailedService, Hero, ServicesGrid } from "./components";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <Hero />

        {/* About Us */}
        <About />
        {/* Services Grid */}
        <section className="py-10 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">
                Our Comprehensive Services
              </h2>
              <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our full range of technology education and professional
                development services designed to accelerate your career
              </p>
              <ServicesGrid />
            </div>
          </div>
        </section>

        {/* Detailed Service Sections */}
        <DetailedService />

        {/* Call to Action */}
        <CTA />
      </div>
      <Footer />
    </>
  );
}
