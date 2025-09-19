"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Images } from "../data/types";

export const ImageModal: React.FC<{
  images: Images[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}> = ({ images, currentIndex, onClose, onNavigate }) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const nextImage = () => onNavigate((currentIndex + 1) % images.length);
  const prevImage = () =>
    onNavigate((currentIndex - 1 + images.length) % images.length);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextImage();
    if (distance < -minSwipeDistance) prevImage();
  };

  const currentImage = images[currentIndex];

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between text-white">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X size={24} />
          </button>
          <div className="text-center">
            <p className="text-sm opacity-80">
              {currentIndex + 1} of {images.length}
            </p>
          </div>
          <div className="w-10" />
        </div>
      </div>

      {/* Main Image */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          className="object-contain"
        />

        {/* Navigation buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white hidden md:flex"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white hidden md:flex"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="text-white text-center">
          {currentImage.subtitle && (
            <p className="text-sm opacity-80 mb-2">{currentImage.subtitle}</p>
          )}
          <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => onNavigate(index)}
                className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                  index === currentIndex
                    ? "border-white"
                    : "border-transparent opacity-60"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
