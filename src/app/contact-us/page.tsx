import type { Metadata } from "next";
import {
  ContactHero,
  ContactInfo,
  MapSection,
  ContactForm,
} from "./components";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact Us | Ocean Academy",
  description:
    "Get in touch with Ocean Academy for inquiries about courses, admissions, or services. We're here to help.",
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ocean Academy",
  image: "https://yourdomain.com/logo.png",
  telephone: "+91-413-2240580",
  email: "info@oceanacademy.in",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "No. 10, 2nd Floor, 45 Feet Road, Vengateswara Nagar, Near HDFC Bank, Saram",
    addressLocality: "Puducherry",
    postalCode: "605011",
    addressCountry: "IN",
  },
  openingHours: ["Mo-Sa 09:30-21:00"],
  url: "https://yourdomain.com",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
      <Footer />
    </>
  );
}
