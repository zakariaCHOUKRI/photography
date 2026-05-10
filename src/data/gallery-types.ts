export interface Photo {
  src: string;
  thumb: string;
  alt: string;
  title?: string;
  location?: string;
  year?: number | string;
  orientation?: 'landscape' | 'portrait' | 'square';
}

export interface Gallery {
  title: string;
  slug: string;
  description: string;
  location?: string;
  year?: number | string;
  category?: string;
  featured?: boolean;
  visible?: boolean;
  photos: Photo[];
}
