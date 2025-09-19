"use client";
import React from "react";
import Image from "next/image";
import { companies, Company } from "../data/companies";

export const CompaniesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0E90CF]">
          Our students works at
        </h2>
        <p className="text-[#5C5454] font-medium text-sm sm:text-lg mt-2">
          We not only enlighten students with our knowledge but also help
          develop their careers. Our students have grabbed placement in various
          firms and MNCs.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10 max-w-7xl mx-auto">
        {companies.map((company: Company, idx: number) => (
          <div
            key={idx}
            className="flex items-center justify-center bg-white shadow-sm rounded-lg p-1 hover:shadow-md transition"
          >
            <div className="h-20 w-24 relative">
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
