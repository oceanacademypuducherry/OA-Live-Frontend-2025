// Types
export interface Images {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
}

export interface Album {
  id: string;
  title: string;
  thumbnail: string;
  images: Images[];
  description?: string;
}

export interface GalleryData {
  [category: string]: Images[];
}

export interface CategoryButtonProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
  count: number;
}

export interface ImageCardProps {
  image: Images;
  index: number;
  onClick: () => void;
}

export interface ImageModalProps {
  selectedImage: Images;
  allImages: Images[];
  onClose: () => void;
  onSelect: (image: Images) => void;
}
