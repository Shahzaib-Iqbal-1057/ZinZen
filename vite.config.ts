import path from "path";
import { Alias, defineConfig } from "vite";
// eslint-disable-next-line import/no-extraneous-dependencies
import { VitePWA } from "vite-plugin-pwa";

import * as tsconfig from "./tsconfig.paths.json";

function readAliasFromTsConfig(): Alias[] {
  // eslint-disable-next-line prefer-regex-literals
  const pathReplaceRegex = new RegExp(/\/\*$/, "");
  return Object.entries(tsconfig.compilerOptions.paths).reduce((aliases, [fromPaths, toPaths]) => {
    const find = fromPaths.replace(pathReplaceRegex, "");
    const toPath = toPaths[0].replace(pathReplaceRegex, "");
    const replacement = path.resolve(__dirname, toPath);
    aliases.push({ find, replacement });
    return aliases;
  }, [] as Alias[]);
}

export default defineConfig({
  resolve: {
    alias: readAliasFromTsConfig(),
  },
  plugins: [
    VitePWA({
      workbox: {
        cleanupOutdatedCaches: true, // default is true but added to make it explicit
        ignoreURLParametersMatching: [],
        globPatterns: [
          "**/*.{js,css,html,png,jpg,svg,json,wasm}",
          "assets/**/*.{svg,png,jpg,mp3}"
        ],
      },
      registerType: "autoUpdate",
      strategies: "injectManifest",
      srcDir: "src/service-worker",
      filename: "service-worker.ts",
      manifest: {
        short_name: "ZinZen",
        name: "ZinZen: Deliver purpose",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        start_url: "./",
        background_color: "#3367D6",
        display: "standalone",
        scope: "./",
        related_applications: [
          {
            platform: "webapp",
            url: "https://zinzen.me/manifest.webmanifest",
          },
        ],
        theme_color: "#3367D6",
        description: "ZinZen for purpose",
      },
      injectManifest: {},
    }),
  ],
});
