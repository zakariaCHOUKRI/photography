import type { Gallery } from '../gallery-types';
import { image } from '../gallery-utils';

const gallery: Gallery = {
  title: "Man's best friend",
  slug: 'dogs',
  description: '',
  location: 'Various',
  year: '2025-2026',
  category: 'Street Photography',
  featured: true,
  visible: true,
  photos: [
    {
      src: image('images/dogs/dogs_0.jpg'),
      thumb: image('images/dogs/dogs_0.jpg'),
      alt: '',
      title: '',
      location: 'Lausanne',
      year: 2025,
      orientation: 'portrait',
    },
    {
      src: image('images/dogs/dogs_1.jpg'),
      thumb: image('images/dogs/dogs_1.jpg'),
      alt: '',
      title: '',
      location: 'Agadir',
      year: 2025,
      orientation: 'landscape',
    },
    {
      src: image('images/dogs/dogs_2.jpg'),
      thumb: image('images/dogs/dogs_2.jpg'),
      alt: '',
      title: '',
      location: 'Lausanne',
      year: 2025,
      orientation: 'landscape',
    },
    {
      src: image('images/dogs/dogs_3.jpg'),
      thumb: image('images/dogs/dogs_3.jpg'),
      alt: '',
      title: '',
      location: 'Lausanne',
      year: 2025,
      orientation: 'landscape',
    },
    {
      src: image('images/dogs/dogs_4.jpg'),
      thumb: image('images/dogs/dogs_4.jpg'),
      alt: '',
      title: '',
      location: 'Brussels',
      year: 2026,
      orientation: 'landscape',
    },
  ],
};

export default gallery;
