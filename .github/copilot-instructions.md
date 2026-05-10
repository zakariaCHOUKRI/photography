# Copilot Instructions — Photography Portfolio

## Project Overview

This repository contains a static photography portfolio website built with Astro and deployed to GitHub Pages.

The final site will be published at:

https://zakariaCHOUKRI.github.io/photography/

The website should be elegant, minimal, fast, and image-focused. The design should let the photography stand out without unnecessary visual clutter.

## Technical Stack

Use:

- Astro
- TypeScript where useful
- Plain CSS or CSS modules
- Minimal JavaScript
- Static generation only
- GitHub Pages deployment through GitHub Actions

Do not add a backend, database, CMS, authentication, or server-side rendering.

## Astro Configuration

The site is deployed as a GitHub Pages project site, not a root user site.

Astro must be configured with:

```js
site: "https://zakariaCHOUKRI.github.io",
base: "/photography"
````

All internal links and asset paths must work correctly under the `/photography` base path.

Use Astro helpers or relative paths where appropriate. Avoid hardcoded root-relative links such as `/images/...` unless they are handled correctly with the base path.

## Design Direction

The visual style should be:

* Minimal
* Modern
* Editorial
* Elegant
* Spacious
* Image-first
* Responsive
* Accessible

Preferred aesthetic:

* Neutral background
* Strong typography
* Large image previews
* Clean gallery grids
* Subtle hover states
* No heavy animations
* No unnecessary UI effects

The photography should be the main focus.

## Site Pages

Create the following pages:

* Home page
* Galleries index page
* Individual gallery pages
* About page
* Contact page
* Optional 404 page

Recommended routes:

* `/`
* `/galleries/`
* `/galleries/[slug]/`
* `/about/`
* `/contact/`

## Content Structure

Represent galleries as structured content.

Each gallery should have:

* title
* slug
* description
* cover image
* photos array
* optional location
* optional year
* optional category

Each photo should have:

* src
* thumb
* alt
* title, optional
* location, optional
* year, optional
* orientation, optional

Every image must have meaningful alt text.

## Image Handling

This is a photography portfolio, so image performance is critical.

Use optimized images:

* thumbnails for gallery grids
* larger versions for detail or lightbox views
* WebP where possible
* lazy loading for non-critical images
* explicit width and height when possible

Do not use full-resolution original images directly in gallery grids.

Avoid loading all large images on initial page load.

## Components

Create reusable components such as:

* `BaseLayout.astro`
* `Navbar.astro`
* `Footer.astro`
* `GalleryGrid.astro`
* `GalleryCard.astro`
* `PhotoCard.astro`
* `Lightbox.astro`
* `Seo.astro`

Components should be simple, readable, and accessible.

## Accessibility Requirements

Follow accessibility best practices:

* Use semantic HTML
* Provide alt text for images
* Ensure keyboard navigation works
* Use visible focus states
* Maintain good color contrast
* Do not rely only on hover interactions
* Use proper heading hierarchy

## Performance Requirements

Prioritize performance.

Avoid:

* heavy JavaScript frameworks
* large animation libraries
* unnecessary dependencies
* unoptimized full-size images
* autoplay media
* layout shifts

Aim for:

* fast first load
* lazy-loaded galleries
* responsive images
* minimal CSS and JavaScript

## SEO Requirements

Each page should have:

* meaningful title
* meta description
* canonical URL where appropriate
* Open Graph metadata
* good image alt text

The homepage should clearly communicate that this is Zakaria Choukri's photography portfolio.

## Content Tone

The tone should be simple, confident, and artistic.

Avoid exaggerated marketing language.

Use short, elegant copy.

## Code Style

Write clean, maintainable code.

Prefer:

* small components
* clear naming
* semantic HTML
* simple CSS
* minimal dependencies

Avoid:

* overengineering
* unnecessary abstractions
* complex state management
* client-side routing
* backend assumptions

## Deployment

The project must deploy using GitHub Actions to GitHub Pages.

The generated build output should come from Astro's `dist` directory.

Do not assume the site is deployed at the root domain. It is deployed under `/photography/`.
