# Ambra

Marketing site for the Ambra Android app. Vite + React + TypeScript + MUI, dark navy.

```bash
npm install
npm run dev
```

## Hosting

GitHub Pages is enough. Traffic will be tiny, the site is static, and the repo already has a workflow that publishes `main` to Pages.

Until a domain is connected, the site lives at `https://stoilkata.github.io/Ambra/`. In GitHub: **Settings → Pages → Source: GitHub Actions**.

A custom domain is DNS, not a second host. Buy something cheap (Porkbun, Cloudflare Registrar, Namecheap — often ~$10/year), then:

1. Add a `CNAME` file in `public/` with the domain (e.g. `ambra.app`).
2. Point the domain’s CNAME (or ALIAS) at `stoilkata.github.io`.
3. In `.github/workflows/pages.yml`, delete the `VITE_BASE: /Ambra/` line so the app is served from `/`.
4. In the GitHub Pages settings, add the custom domain and wait for HTTPS.

Do not put this on a VPS. There is nothing to run.
