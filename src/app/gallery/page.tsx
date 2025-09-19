"use client";

import { useRouter } from "next/navigation";
import { AlbumCard, HeroSection } from "./components";
import { OCEAN_ALBUMS } from "./data/oceanGallery";
import { Footer, Navbar } from "@/components";

export default function GalleryPage() {
  const router = useRouter();

  const handleNavigate = (id: string) => {
    router.push(`/gallery/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OCEAN_ALBUMS.map((album) => (
              <AlbumCard
                key={album.id}
                album={album}
                onClick={() => handleNavigate(album.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
