"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Play, Quote } from "lucide-react";

interface VideoTestimonialProps {
  name: string;
  role: string;
  company: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  previewText: string;
  impact: string;
}

export const VideoTestimonial: React.FC<VideoTestimonialProps> = ({
  name,
  role,
  company,
  thumbnail,
  videoUrl,
  duration,
  previewText,
  impact,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handleEnd = () => setIsPlaying(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
      {isPlaying ? (
        <video
          src={videoUrl}
          autoPlay
          controls
          className="w-full h-72 sm:h-80 md:h-[472px] object-cover"
          onEnded={handleEnd}
        />
      ) : (
        <>
          {/* Thumbnail + Overlay */}
          <div className="relative w-full h-48 sm:h-64 md:h-72">
            {/* Thumbnail */}
            <Image
              src={thumbnail}
              alt={`${name} testimonial`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay (semi-transparent dark) */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20  group-hover:scale-105 transition-transform duration-300 " />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button
                onClick={handlePlay}
                className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 sm:p-4 transform hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 ml-1" />
              </button>
            </div>

            {/* Duration */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
              <span className="bg-black bg-opacity-70 text-white text-xs sm:text-sm px-2 py-1 rounded">
                {duration}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div className="relative">
              <Quote className="absolute -top-1 -left-1 w-4 h-4 sm:w-5 sm:h-5 text-blue-200 opacity-60" />
              <p className="text-gray-700 font-medium leading-relaxed pl-5 italic text-sm sm:text-base">
                "{previewText}"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                  {name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {role} at {company}
                </p>
              </div>
              <button
                onClick={handlePlay}
                className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm flex items-center space-x-1 transition-colors duration-200"
              >
                <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Watch Story</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
