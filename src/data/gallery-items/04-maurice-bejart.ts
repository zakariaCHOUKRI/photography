import type { Gallery } from '../gallery-types';
import { image } from '../gallery-utils';

const gallery: Gallery = {
  title: 'Maurice Bejart',
  slug: 'maurice-bejart',
  description: '',
  location: 'Lausanne',
  year: 2025,
  category: 'Street Photography',
  featured: true,
  visible: true,
  photos: [
    {
      src: image('images/maurice_bejart/mb_1.jpg'),
      thumb: image('images/maurice_bejart/mb_1.jpg'),
      alt: '',
      location: 'Lausanne',
      year: 2025,
      orientation: 'landscape',
    },
    {
      src: image('images/maurice_bejart/mb_2.jpg'),
      thumb: image('images/maurice_bejart/mb_2.jpg'),
      alt: '',
      location: 'Lausanne',
      year: 2025,
      orientation: 'landscape',
    },
    {
      src: image('images/maurice_bejart/mb_3.jpg'),
      thumb: image('images/maurice_bejart/mb_3.jpg'),
      alt: '',
      location: 'Lausanne',
      year: 2025,
      orientation: 'portrait',
    },
    {
      src: image('images/maurice_bejart/mb_4.jpg'),
      thumb: image('images/maurice_bejart/mb_4.jpg'),
      alt: '',
      location: 'Lausanne',
      year: 2025,
      orientation: 'portrait',
    },
    {
      src: image('images/maurice_bejart/mb_5.jpg'),
      thumb: image('images/maurice_bejart/mb_5.jpg'),
      alt: '',
      location: 'Lausanne',
      year: 2025,
      orientation: 'landscape',
    },
    {
      src: image('images/maurice_bejart/mb_6.jpg'),
      thumb: image('images/maurice_bejart/mb_6.jpg'),
      alt: '',
      location: 'Lausanne',
      year: 2025,
      orientation: 'portrait',
    },
    {
      src: image('images/maurice_bejart/mb_7.jpg'),
      thumb: image('images/maurice_bejart/mb_7.jpg'),
      alt: '',
      location: 'Lausanne',
      year: 2025,
      orientation: 'portrait',
    },
  ],
};

export default gallery;
