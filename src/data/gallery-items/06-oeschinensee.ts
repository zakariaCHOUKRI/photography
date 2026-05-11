import type { Gallery } from '../gallery-types';
import { image } from '../gallery-utils';

const gallery: Gallery = {
  title: 'Oeschinensee',
  slug: 'oeschinensee',
  description: "Not really artistic photos to see here, just sweet memories that I wanted to share",
  location: 'Kandersteg',
  year: 2025,
  category: 'Personal',
  featured: false,
  visible: true,
  photos: [
    {
      src: image('images/oeschinensee/oeschinensee_0.jpg'),
      thumb: image('images/oeschinensee/oeschinensee_0.jpg'),
      alt: 'Oeschinensee memory 0',
      location: 'Kandersteg',
      year: 2025,
      orientation: 'landscape',
    },
    {
      src: image('images/oeschinensee/oeschinensee_1.jpg'),
      thumb: image('images/oeschinensee/oeschinensee_1.jpg'),
      alt: 'Oeschinensee memory 1',
      location: 'Kandersteg',
      year: 2025,
      orientation: 'landscape',
    },
    {
      src: image('images/oeschinensee/oeschinensee_2.jpg'),
      thumb: image('images/oeschinensee/oeschinensee_2.jpg'),
      alt: 'Oeschinensee memory 2',
      location: 'Kandersteg',
      year: 2025,
      orientation: 'landscape',
    },
    {
      src: image('images/oeschinensee/oeschinensee_3.jpg'),
      thumb: image('images/oeschinensee/oeschinensee_3.jpg'),
      alt: 'Oeschinensee memory 3',
      location: 'Kandersteg',
      year: 2025,
      orientation: 'landscape',
    },
    {
      src: image('images/oeschinensee/oeschinensee_4.jpg'),
      thumb: image('images/oeschinensee/oeschinensee_4.jpg'),
      alt: 'Oeschinensee memory 4',
      location: 'Kandersteg',
      year: 2025,
      orientation: 'landscape',
    },
    {
      src: image('images/oeschinensee/oeschinensee_5.jpg'),
      thumb: image('images/oeschinensee/oeschinensee_5.jpg'),
      alt: 'Oeschinensee memory 5',
      location: 'Kandersteg',
      year: 2025,
      orientation: 'landscape',
    },
  ],
};

export default gallery;
