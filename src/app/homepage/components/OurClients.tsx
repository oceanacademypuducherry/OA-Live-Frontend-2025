import Image from "next/image";
import { clients } from "../data/ClientData";
import Script from "next/script";

export const OurClients = () => {
  // ✅ JSON-LD Schema for Clients (Educational Organizations)
  const clientsJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ocean Academy",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/logo.png",
    "alumni": clients.map((client) => ({
      "@type": "CollegeOrUniversity",
      "name": client.name,
      "logo": `https://yourdomain.com${client.logo}`, // adjust for your image hosting
    })),
  };

  return (
    <section
      className="bg-[#f0f8ff] py-12"
      aria-labelledby="our-clients-heading"
    >
      <div className="max-w-5xl mx-auto px-3 sm:px-12 text-center">
        {/* Heading */}
        <h2
          id="our-clients-heading"
          className="text-[20px] sm:text-title font-normal text-[#0E90CF] mb-3"
        >
          Our Clients
        </h2>

        {/* Description */}
        <p className="text-[14px] sm:text-[16px] text-secondary mb-10 leading-relaxed max-w-[25rem] sm:max-w-[33rem] mx-auto">
          Various Educational Institutes and Universities prefer our pioneering
          training methods for their students.
        </p>

        {/* Clients Logos */}
        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-6 gap-y-6 gap-x-4 place-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`flex flex-col items-center w-16 sm:w-28 md:w-32 ${
                index === 5
                  ? "col-span-5 justify-self-center sm:col-span-1"
                  : ""
              }`}
              itemScope
              itemType="https://schema.org/CollegeOrUniversity"
            >
              {/* Logo */}
              {client.name === "CK college" ? (
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                  <Image
                    src={client.logo}
                    alt={`Logo of ${client.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <Image
                  src={client.logo}
                  alt={`Logo of ${client.name}`}
                  width={120}
                  height={80}
                  className="object-contain h-14 sm:h-20 md:h-24"
                />
              )}

              {/* Hidden SEO text */}
              <p className="sr-only" itemProp="name">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Inject JSON-LD for SEO */}
      <Script
        id="clients-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clientsJsonLd) }}
      />
    </section>
  );
};
