import type { Gallery } from '../gallery-types';
import { image } from '../gallery-utils';

const gallery: Gallery = {
  title: 'Crowds',
  slug: 'crowds',
  description: '',
  location: 'Various',
  year: 2025,
  category: 'Street Photography',
  featured: false,
  visible: true,
  photos: [
    {
      src: image('images/crowds/crowds_0.jpg'),
      thumb: image('images/crowds/crowds_0.jpg'),
      alt: 'Crowd scene',
      title: '',
      location: 'Various',
      year: 2025,
      orientation: 'landscape',
    },
  ],
};

export default gallery;
