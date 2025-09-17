"use client";

import { useState } from "react";
import { jobs, type Job } from "./careercard"; // adjust import path based on your project

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <div className=" text-gray-800 w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-t from-[#2E81A9] to-[#00AEFF] text-center py-4 px-0 sm:px-4 sm:py-6">
        <h1 className="text-2xl sm:text-4xl font-semibold text-white mb-2">
          Career
        </h1>
        <h2 className="text-lg sm:text-2xl font-semibold text-[#FDCE5C]">
          Join Our Incredible Team
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-white">
          At Ocean, we're building a passionate team dedicated to transforming
          ideas into impactful experiences. We value diverse perspectives,
          collaboration, and a commitment to growth.
        </p>
      </section>

      {/* Job Section */}
      <section className="px-4 py-8 md:py-12 space-y-6 max-w-[1500px] mx-auto ">
        {/* Apply Info Card */}
        <div className="bg-[#E6F6FE] rounded-xl border border-[#00AEFF] p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm md:text-base text-[#1F2937]">
              <span className="block text-[#00AEFF] font-medium mb-1 text-base md:text-lg">
                How To Apply?
              </span>
              If you’re interested in a role and are willing to commit to staying
              in Pondicherry for a minimum of 12 months
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-1 text-sm md:text-base text-gray-600">
            <a
              href="mailto:oceandocuments@gmail.com"
              className="text-[#00AEFF] font-medium break-all"
            >
              oceandocuments@gmail.com
            </a>
            <span className="text-[#6B7280] text-xs sm:text-sm md:text-base">
              Share Your CV, Portfolio, and a Cover Letter
            </span>
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid gap-6">
          {jobs.map((job: Job) => (
            <div
              key={job.id}
              onClick={() =>
                setSelectedJob(selectedJob === job.id ? null : job.id)
              }
              className="cursor-pointer"
            >
              {/* Expanded Detail Card */}
              <div
                className={`border rounded-lg shadow transition-all duration-300 overflow-hidden ${
                  selectedJob === job.id
                    ? "bg-[#00AEFF]/10 border-[#00AEFF]/40 p-6"
                    : "border-gray-200 p-4 hover:bg-gray-50"
                }`}
              >
                {/* Summary always visible */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div>
                    <p className="text-[16px] sm:text-base text-[#00AEFF] font-medium">
                      {job.category}
                    </p>
                    <h3
                      className={`font-bold ${
                        selectedJob === job.id
                          ? "text-lg text-[#00AEFF]"
                          : "text-lg text-gray-800"
                      }`}
                    >
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Focus: {job.focus}
                    </p>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 whitespace-nowrap">
                    Minimum Experience:{" "}
                    <span className="font-semibold">{job.experience}</span>
                  </p>
                </div>

                {/* Expanded content inside same card */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    selectedJob === job.id ? "max-h-[2000px] mt-4" : "max-h-0"
                  }`}
                >
                  <div className="mt-4">
                    <h4 className="font-semibold mb-1">Description:</h4>
                    <p className="text-sm sm:text-base text-gray-700">
                      {job.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold mb-1">Key Responsibilities:</h4>
                    <ul className="list-disc ml-6 text-sm sm:text-base text-gray-700 space-y-1">
                      {job.responsibilities.map((res, idx) => (
                        <li key={idx}>{res}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold mb-1">Requirements:</h4>
                    <ul className="list-disc ml-6 text-sm sm:text-base text-gray-700 space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold mb-1">Benefits:</h4>
                    <ul className="list-disc ml-6 text-sm sm:text-base text-gray-700 space-y-1">
                      {job.benefits.map((ben, idx) => (
                        <li key={idx}>{ben}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
