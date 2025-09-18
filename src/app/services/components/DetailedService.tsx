import React from "react";
import Image from "next/image";
import { Detailedservices } from "../data/service";

export function DetailedService() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 space-y-6">
        {Detailedservices.map((service) => (
          <div
            key={service.id}
            className="grid lg:grid-cols-2 gap-4 items-center"
          >
            {/* Image on left if reverse */}
            {service.reverse && (
              <div className="flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full max-w-md h-auto"
                  width={400} // adjust as needed
                  height={300} // adjust as needed
                />
              </div>
            )}

            {/* Text content */}
            <div>
              <h3 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-md sm:text-lg text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div
                className={
                  service.features.length > 3
                    ? "grid grid-cols-2 gap-4"
                    : "space-y-3"
                }
              >
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <feature.icon className={`w-5 h-5 mr-2 ${feature.color}`} />
                    <span className="text-sm sm:text-lg text-gray-700">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image on right if not reverse */}
            {!service.reverse && (
              <div className="flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full max-w-md h-auto"
                  width={400} // adjust as needed
                  height={300} // adjust as needed
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
