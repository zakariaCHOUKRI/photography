import type { Gallery } from '../gallery-types';
import { image } from '../gallery-utils';

const gallery: Gallery = {
  title: 'D.A.N.C.E.',
  slug: 'dance',
  description: 'Do the D-A-N-C-E! 1, 2, 3, 4, fight!',
  location: 'Various',
  year: '2025-2026',
  category: 'Street Photography',
  featured: false,
  visible: false,
  photos: [
    {
      src: image('images/dance/dance_0.jpg'),
      thumb: image('images/dance/dance_0.jpg'),
      alt: '',
      title: '',
      location: 'Brussels',
      year: 2026,
      orientation: 'landscape',
    },
  ],
};

export default gallery;
