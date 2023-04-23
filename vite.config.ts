import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path';

const ASSET_URL = "https://doghousedev.com/";
const ASSET_PATH = "svelte-ts-grid";

/** @type {import('vite').UserConfig} */
const config = {
  base: `${ASSET_URL}${ASSET_PATH}/dist`,
  build: {
    outDir: "./dist",
    assetsDir: "./assets",
    rollupOptions: {
      output: {
        entryFileNames: "bundle.js",
        chunkFileNames: "chunk.js",
        // manualChunks: undefined,
        assetFileNames: "[name].[ext]",
      },
    },
  },
  plugins: [svelte()],
  optimize: {
    include: ['ag-grid-enterprise']
  },
  resolve: {
    alias: {
      $components: resolve('./src/components'),
      $lib: resolve('./src/lib'),
      $store: resolve('./src/store'),
    },
    extensions: ['.mjs', '.js', '.ts', '.json'],
  },
};

export default config;
