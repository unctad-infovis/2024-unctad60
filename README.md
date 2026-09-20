# 2024-unctad60

**Live demo** https://unctad-infovis.github.io/2024-unctad60/

## About

A horizontal, swipeable timeline marking UNCTAD's 60th anniversary, covering key moments from 1964 to the present. Each slide shows a photo, date, country flag (where relevant) and a short markdown-formatted description; decade buttons and autoplay let visitors jump around or watch it play through.

## Embedding

```html
<script type="module" crossorigin="" src="https://storage.unctad.org/2024-unctad60/js/2024-unctad60.min.js?v=1"></script>
<link rel="stylesheet" crossorigin="" href="https://storage.unctad.org/2024-unctad60/css/2024-unctad60.min.css?v=1">
<div class="app-root-2024-unctad60" id="app-root-2024-unctad60-timeline">
  Loading...
</div>
<noscript>Your browser does not support Javascript!</noscript>
```

Update the `?v=` query parameter to match the current build version to bust the cache.

## Used in

* [UNCTAD's history](https://unctad.org/about/history)

## Rights of usage

Contact Teemo Tebest.

## How to build and develop

This is a Vite + React project.

* `npm install`
* `npm run start`

Project should start at: http://localhost:8080

For developing please refer to `package.json`

## Files and folders

All public assets go to folder `public` (photos, the `data.json` timeline content, fonts, favicon).

All source code goes to folder `src`.

### Mount point

Single mount point (see `src/jsx/Index.jsx`):

| DOM id | Component | Content |
|---|---|---|
| `app-root-2024-unctad60-timeline` | `src/jsx/HorizontalTimeline.jsx` | The full timeline |

### How to update

The slide content (dates, text, image filenames, country codes) lives in `public/assets/data/data.json`, fetched at runtime. Photos referenced by that file go in `public/assets/img/horizontal_timeline/`.

## Packages

The following packages are used in this project by default.

### Shared UNCTAD packages

* **@unctad-infovis/general-tools** — `CircleFlag` renders the country flags shown on each dated slide, resolved from UNCTAD's own `storage.unctad.org` CDN rather than a third-party one

These packages are published from the [`un-init-project`](https://github.com/unctad-infovis/un-init-project) monorepo to GitHub Packages, so installing needs an `.npmrc` with `@unctad-infovis:registry=https://npm.pkg.github.com` and a `GITHUB_PACKAGES_TOKEN` environment variable.

### Project specific

* **swiper** — the swipeable/keyboard/mousewheel-navigable slide carousel
* **react-markdown** — renders the markdown-formatted slide text
* **react-is-visible** / **intersection-observer** — detects when the timeline scrolls into view to start autoplay

### Build & Dev Server

* **vite** — development server with hot module replacement and production bundler, replaces webpack
* **@vitejs/plugin-react** — adds React and JSX support to Vite

### React

* **react** — UI component library
* **react-dom** — renders React components to the DOM

### Formatter & Linter

* **@biomejs/biome** — formats and lints JS, JSX and CSS files on save, replaces ESLint + Prettier

### Minification

* **terser** — minifies the production JavaScript bundle, removes console.logs in production builds
