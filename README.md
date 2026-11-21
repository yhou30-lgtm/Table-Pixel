# Table & Pixel

Marketing site for a restaurant web design studio. Next.js, TypeScript, Tailwind. Builds to plain static files.

## Run it on your computer

```
npm install
npm run dev        # opens at http://localhost:3000
```

## Where to edit things

- Text, prices, packages, add-ons, concept projects: `lib/site.ts`
- Colors: `tailwind.config.ts`
- Page layouts: `app/<page>/page.tsx`

## Before launch (not done yet)

1. Set `SITE.url` in `lib/site.ts` to your real domain.
2. Confirm package contents and add-on prices in `lib/site.ts`. They are drafts.
3. Connect the contact form (see below).
4. Replace the drawn mockups with real screenshots if you want (`components/BrowserMockup.tsx`).

## Connect the contact form

The form validates input but sends nothing until `FORM_ENDPOINT` in `lib/site.ts` is set.
1. Make a free form at formspree.io and copy its URL (looks like `https://formspree.io/f/xxxxxxx`).
2. Paste it into `FORM_ENDPOINT`.
3. Rebuild, submit a test inquiry, and confirm the email arrives. This path has not been tested.

## Deploy to Cloudflare Pages

1. Put this folder on GitHub (the `.gitignore` already skips `node_modules`, `.next` and `out`).
2. In Cloudflare: Workers & Pages, Create, Pages, Connect to Git, choose the repo.
3. Build command: `npm run build`. Build output directory: `out`.
4. Deploy, then add your custom domain under the project's Custom domains tab.

Fonts (Fraunces, Inter) are downloaded during the build, so the build machine needs internet access.

## Publish on GitHub Pages

The `docs` folder holds the built site. GitHub Pages serves it at https://yhou30-lgtm.github.io/Table-Pixel/ (Settings, Pages, Branch main, folder /docs). GitHub does not run the build, so after changing the site, rebuild and push:

```
MSYS_NO_PATHCONV=1 BASE_PATH=/Table-Pixel npx next build   # in Git Bash
rm -rf docs && cp -r out docs && touch docs/.nojekyll
```
