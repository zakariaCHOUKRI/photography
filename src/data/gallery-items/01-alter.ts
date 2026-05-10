import type { Gallery } from '../gallery-types';
import { image } from '../gallery-utils';

const gallery: Gallery = {
  title: 'Alter: everything that I am not',
  slug: 'alter',
  description:
    "I explore the many facets of 'The Other', not as something separate, but as a series of daily confrontations that shape our identity. 'Everything That Is Not Me Right Now' manifests through different interfaces: the empathetic bridge to the creature, the emotional landscape of a fellow human, the cold gaze of objects built in our image, and the communal mind expressed through collective art. Each photograph represents a distinct type of 'Other', an urban Alter, which serves as a necessary mirror, challenging and defining our own sense of self.",
  location: 'Brussels',
  year: 2026,
  category: 'Street Photography',
  featured: true,
  visible: true,
  photos: [
    {
      src: image('images/alter/alter_1.jpg'),
      thumb: image('images/alter/alter_1.jpg'),
      alt: '',
      title: '',
      location: 'Brussels',
      year: 2026,
      orientation: 'landscape',
    },
    {
      src: image('images/alter/alter_2.jpg'),
      thumb: image('images/alter/alter_2.jpg'),
      alt: '',
      title: '',
      location: 'Brussels',
      year: 2026,
      orientation: 'landscape',
    },
    {
      src: image('images/alter/alter_3.jpg'),
      thumb: image('images/alter/alter_3.jpg'),
      alt: '',
      title: '',
      location: 'Brussels',
      year: 2026,
      orientation: 'landscape',
    },
    {
      src: image('images/alter/alter_4.jpg'),
      thumb: image('images/alter/alter_4.jpg'),
      alt: '',
      title: '',
      location: 'Brussels',
      year: 2026,
      orientation: 'landscape',
    },
  ],
};

export default gallery;
