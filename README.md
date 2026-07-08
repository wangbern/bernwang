## Quick Start

Welcome! To run this project locally:

### `npm run dev`

Use this while developing. It starts the local dev server with hot reload so you can preview changes as you edit the app.

```bash
npm run dev
```

### `npm run build`

Use this when you want a production build. Run it before deploying or when you need to test the built output locally.

```bash
npm run build
```

This writes the client and server bundles to `build/`.

### `npm run start`

Use this after `npm run build` to run the production server locally. This is for testing the built app, not for day-to-day development.

```bash
npm run build
npm run start
```
### `npm run deploy`

Use this when you are ready to publish the site to GitHub Pages at [bern.wang](https://bern.wang). Requires Github repo access. 

```bash
npm run build
npm run deploy
```

This copies `build/client/index.html` to `build/client/404.html` so client-side routing works on GitHub Pages, then deploys the `build/client` folder with the custom domain `bern.wang`.
