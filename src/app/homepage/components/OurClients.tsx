"use client";

import Image from "next/image";
import { clients } from "../data/ClientData";
import Script from "next/script";

export const OurClients = () => {
  const clientsJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ocean Academy",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/logo.png",
    "alumni": clients.map((client) => ({
      "@type": "CollegeOrUniversity",
      "name": client.name,
      "logo": `https://yourdomain.com${client.logo}`,
    })),
  };

  return (
    <section className="bg-white py-12" aria-labelledby="our-clients-heading">
      <div className="max-w-5xl mx-auto px-3 sm:px-12 text-center">
        <h2
          id="our-clients-heading"
          className="text-[20px] sm:text-title font-normal text-[#0E90CF] mb-3"
        >
          Our Clients
        </h2>
        <p className="text-[14px] sm:text-[16px] text-secondary mb-10 leading-relaxed max-w-[25rem] sm:max-w-[33rem] mx-auto">
          Various Educational Institutes and Universities prefer our pioneering
          training methods for their students.
        </p>

        {/* Marquee container */}
       <div className="overflow-hidden">
  <div className="flex animate-marquee whitespace-nowrap">
    {/* Duplicate the client list twice for smooth loop */}
    {[...clients, ...clients].map((client, index) => (
      <div
        key={index}
        className={`flex items-center justify-center flex-shrink-0 ${
          client.name === "CK college"
            ? "w-20 h-20 rounded-full mt-3 overflow-hidden"
            : "w-32 h-24"
        }`}
      >
        <Image
          src={client.logo}
          alt={`Logo of ${client.name}`}
          width={120}
          height={120}
          className="object-contain w-full h-full"
        />
      </div>
    ))}
  </div>
</div>

      </div>

      {/* JSON-LD Schema */}
      <Script
        id="clients-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clientsJsonLd) }}
      />

      {/* Tailwind CSS animation */}
      <style jsx>{`
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%); /* move full width of first copy */
    }
  }
  .animate-marquee {
    display: flex;
    gap: 1.5rem;
    animation: marquee 60s linear infinite; /* slower and smooth */
  }
`}</style>  
    </section>
  );
};
