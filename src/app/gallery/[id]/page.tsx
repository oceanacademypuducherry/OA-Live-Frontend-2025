"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { OCEAN_ALBUMS } from "../data/oceanGallery";
import { ImageModal, PageHeader, PhotoThumbnail } from "../components";

export default function GalleryDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const selectedAlbum = OCEAN_ALBUMS.find((album) => album.id === id);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  if (!selectedAlbum) {
    return <p className="text-center text-gray-500 p-8">Album not found.</p>;
  }

  const handleBackToAlbums = () => {
    setSelectedImageIndex(null);
    router.back();
  };

  return (
    <section>
      <PageHeader
        title={selectedAlbum.title}
        showBackButton
        onBack={handleBackToAlbums}
      />

      <div className="grid grid-cols-2 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-2 sm:mt-10">
        {selectedAlbum.images.map((image, index) => (
          <PhotoThumbnail
            key={index}
            image={image}
            index={index}
            onClick={() => setSelectedImageIndex(index)}
            isActive={selectedImageIndex === index}
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <ImageModal
          images={selectedAlbum.images}
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onNavigate={setSelectedImageIndex}
        />
      )}
    </section>
  );
}
