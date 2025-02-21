import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import react from "@vitejs/plugin-react";
import { defineConfig, normalizePath } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

const require = createRequire(import.meta.url);
const path = fileURLToPath(import.meta.url);

// Get paths for PDF.js assets
const cMapsDir = normalizePath(
  join(dirname(require.resolve("pdfjs-dist/package.json")), "cmaps")
);
const standardFontsDir = normalizePath(
  join(dirname(require.resolve("pdfjs-dist/package.json")), "standard_fonts")
);

export default defineConfig({
  root: join(dirname(path), "client"),
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: cMapsDir,
          dest: "",
        },
        {
          src: standardFontsDir,
          dest: "",
        },
      ],
    }),
  ],
});
