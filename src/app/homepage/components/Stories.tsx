"use client";

import { FaStar } from "react-icons/fa";
import { testimonials } from "../data/TestimonialData";

export const Stories = () => {
  // Split testimonials into 3 nearly equal parts
  const chunkSize = Math.ceil(testimonials.length / 3);

  const col1Raw = testimonials.slice(0, chunkSize);
  const col2Raw = testimonials.slice(chunkSize, chunkSize * 2);
  const col3Raw = testimonials.slice(chunkSize * 2);

  // Duplicate each column for infinite scroll effect
  const col1 = [...col1Raw, ...col1Raw];
  const col2 = [...col2Raw, ...col2Raw];
  const col3 = [...col3Raw, ...col3Raw];

  return (
    <section className="bg-[#f9fcff] py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-[20px] sm:text-3xl font-semibold text-[#0E90CF] mb-2">
          Stories That Inspire
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-10 max-w-[25rem] sm:max-w-[33rem] mx-auto">
          Discover how learners turned knowledge into confidence and careers with
          Ocean Academy.
        </p>

        {/* Responsive Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6">
          {[col1, col2, col3].map((col, idx) => (
            <div
              key={idx}
              className="overflow-hidden h-[600px] group"
            >
              {/* Animate scroll, but pause on hover */}
              <div className="flex flex-col gap-6 animate-vertical-scroll group-hover:[animation-play-state:paused]">
                {col.map((t, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg p-5 flex flex-col text-left hover:shadow-lg transition w-full flex-shrink-0 h-auto"
                  >
                    {/* Image + Name */}
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-md font-semibold">{t.name}</h3>
                        <p className="text-sm text-gray-900">{t.course}</p>
                      </div>
                    </div>

                    {/* Text */}
                    <p className="text-sm text-gray-600 mb-4">{t.text}</p>

                    {/* Stars */}
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
