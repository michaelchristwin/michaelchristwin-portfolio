# Michael Christwin portfolio

A responsive portfolio with Vite HMR, TypeScript, and plain HTML/CSS. The design uses ink blue, warm ivory, and burnt orange, without gradients. Essential page content renders as HTML; a small TypeScript module enables contact links and expanded screenshot previews.

## Develop and build

Use the package manager version declared in `package.json`.

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

`dev` provides hot module replacement. `build` runs the TypeScript check and produces `dist/`. `preview` serves that production build locally. For remote development, use SSH port forwarding rather than exposing the dev server publicly.

## Add the CV and contact details

Edit **`src/config.ts`**. Empty values leave the corresponding controls visibly unavailable and without a destination; no fake address or phone number is used.

```ts
export const contact = {
  email: 'your-real-email@example.com',
  whatsapp: 'your-international-number',
  cvPath: '/Michael-Christwin-CV.pdf',
};
```

- Replace the example email with Michael’s address.
- WhatsApp requires 7–15 digits in international format: country code and number, without `+`, spaces, punctuation, or a domestic trunk prefix. The example text above must be replaced with digits. The link opens `https://wa.me/NUMBER` in a new tab.
- Put the real PDF at **`public/Michael-Christwin-CV.pdf`**, then set `cvPath` as above. The hero’s Download CV control becomes a download link. If you use another filename, update the path. Prefer a same-origin file so browsers honor the download attribute.
- Rebuild and redeploy after making changes. Vite copies `public/` files to the root of `dist/`.

## Add project screenshots

Three frontend cards have browser-style frames and local SVG placeholders:

| Project | Current file |
| --- | --- |
| M3terscan | `public/screenshots/m3terscan.svg` |
| Switch Electric | `public/screenshots/switch-electric.svg` |
| m3ter.ing | `public/screenshots/m3ter-ing.svg` |

To replace each placeholder:

1. Export an authentic screenshot as WebP or AVIF, ideally 1440 × 900 (16:10) and under about 200 KB when practical.
2. Put it in `public/screenshots/`, for example `m3terscan.webp`.
3. Update that card’s `<img src="/screenshots/m3terscan.webp">` in **`index.html`**. Write descriptive alt text for the actual interface and change the caption from “Project preview · Placeholder” to a useful description.
4. Update `width` and `height` if the source dimensions differ. The card reserves a 16:10 frame and crops from the top; the expanded view displays the complete image at its natural proportions.
5. Remove the unused SVG placeholder if desired.

Click or keyboard-activate a screenshot to open a native dialog. Close with the button, Escape, or a backdrop click. Focus returns to the originating button. Hover zoom and dialog entrance motion respect reduced-motion preferences. Images load lazily and decode asynchronously. No screenshot library or carousel is required.

The indexer and API retain technical illustrations. M3trs remains a text card until its presentation requirements are confirmed.

## Maintain

- `index.html`: page content, project cards, inline SVG icons, experience, screenshot paths and captions.
- `src/styles.css`: layout, responsive rules, and palette tokens in `:root`.
- `src/config.ts`: CV path and contact details.
- `src/main.ts`: contact wiring and screenshot dialog behavior.
- `public/favicon.svg`: browser icon.

Section navigation, skip link, visible focus styles, responsive layouts, and reduced-motion support are included. No employment dates for undated work, project metrics, or availability claims have been invented.

## Deploy

Run **`pnpm build`**, then deploy the contents of **`dist/`** to a static host. For Cloudflare Pages or Netlify, use `pnpm build` as the build command and `dist` as the output directory. No runtime server or environment variables are required. Do not edit `dist/` directly; it is generated.

For NGINX, upload `dist/` to your web root and adapt:

```nginx
server {
    listen 80;
    server_name portfolio.example.com;
    root /var/www/michael-portfolio/dist;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Configure HTTPS with your existing certificate tooling. HTML should revalidate; Vite’s hashed assets may use long immutable caching. Keep unversioned screenshots and the CV revalidatable when replacing files in place. Paths currently assume deployment at a domain root; for a subdirectory deployment, configure Vite’s base and adjust public asset/config URLs accordingly.
