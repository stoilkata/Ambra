import { copyFileSync, existsSync, mkdirSync } from 'node:fs';

copyFileSync('dist/index.html', 'dist/404.html');

// GitHub Pages serves 404.html with HTTP 404. Play Console needs /privacy to be 200.
// Prefer the static public/privacy/index.html (policy text without JS). Fall back to the SPA shell.
if (!existsSync('dist/privacy/index.html')) {
  mkdirSync('dist/privacy', { recursive: true });
  copyFileSync('dist/index.html', 'dist/privacy/index.html');
}
copyFileSync('dist/privacy/index.html', 'dist/privacy.html');
