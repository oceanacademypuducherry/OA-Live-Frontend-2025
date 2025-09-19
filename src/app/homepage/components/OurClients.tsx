import Image from "next/image";
import { clients } from "../data/ClientData";


export const OurClients = () => {
  return (
    <section className="bg-[#f0f8ff] py-12">
      <div className="max-w-5xl mx-auto px-3 sm:px-12 text-center">
        <h2 className="text-[20px] sm:text-3xl font-semibold text-[#0E90CF] mb-3">
          Our Clients
        </h2>

        {/* Description */}
        <p className="text-[14px] sm:text-[16px] text-gray-600 mb-10 leading-relaxed max-w-[25rem] sm:max-w-[33rem] mx-auto">
          Various Educational Institutes and Universities prefer our pioneering
          training methods for their students.
        </p>

        {/* Clients Logos */}
        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-6 gap-y-6 gap-x-4 place-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`flex flex-col items-center w-16 sm:w-28 md:w-32
                ${index === 5 ? "col-span-5 justify-self-center sm:col-span-1" : ""}`}
            >
              {client.name === "CK college" ? (
                // ✅ CK logo in a circle
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                // ✅ Other logos normal
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={80}
                  className="object-contain h-14 sm:h-20 md:h-24"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
