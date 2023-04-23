import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  preprocess: vitePreprocess(),
  kit: {
    alias: {
      $components: './src/components',
      $lib: './src/lib',
      $stores: './src/stores',
      $types: './src/types',
    },
  }
}
